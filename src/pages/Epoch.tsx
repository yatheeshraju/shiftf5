import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
export interface EpochProps {}

export default function Epoch(props: EpochProps) {
  const [inputTime, setInputTime] = useState(Date.now());

  var units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };

  var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  var getRelativeTime = (d1, d2 = new Date()) => {
    var elapsed = d1 - d2;

    // "Math.abs" accounts for both "past" & "future" scenarios
    for (var u in units)
      if (Math.abs(elapsed) > units[u] || u == 'second')
        return rtf.format(Math.round(elapsed / units[u]), u);
  };

  const columns = [
    {
      timezone: 'GMT',
      time: new Date(inputTime).toUTCString(),
    },
    {
      timezone: 'ISO Format',
      time: new Date(inputTime).toISOString(),
    },
    {
      timezone: 'Local',
      time:
        new Date(inputTime).toLocaleString() +
        ' ' +
        new Date(inputTime)
          .toString()
          .match(/\((.*)\)/)
          .pop(),
    },
    {
      timezone: 'Relative',
      time: getRelativeTime(inputTime, new Date()),
    },
  ];
  return (
    <div className="flex items-center flex-col mt-2 fira-code-regular">
      <Helmet>
        <title>Epoch Time to Human Time</title>
      </Helmet>
      <span className="flex  gap-2">
        <Input
          className="text-center"
          defaultValue={inputTime}
          type="number"
          onChange={(e) => setInputTime(Number(e.target.value))}
        />
      </span>
      <span className="flex w-full   md:w-1/2 lg:w-1/3 mt-2">
        <Table>
          <TableCaption>Time in Human readable format</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Timezone</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {columns.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{item.timezone}</TableCell>
                <TableCell className="text-right">{item.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </span>
    </div>
  );
}
