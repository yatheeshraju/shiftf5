import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export interface IpAddressProps {}

export default function IpAddress(props: IpAddressProps) {
  const [ipAddressv4, setipAddressv4] = useState('');
  const [ipAddressv6, setipAddressv6] = useState('');

  const findIpAddress = () => {
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((result) => {
        setipAddressv4(result.ip);
      });
    fetch('https://api64.ipify.org?format=json')
      .then((res) => res.json())
      .then((result) => {
        setipAddressv6(result.ip);
      });
  };

  useEffect(() => {
    findIpAddress();
  }, []);
  return (
    <div className="flex items-center flex-col mt-2 fira-code-regular">
      <Helmet>
        <title>IP Address</title>
      </Helmet>
      <span className="flex w-full   md:w-1/2 lg:w-1/3 mt-2">
        <Table>
          <TableCaption>
            <Link to="https://www.ipify.org" target="_blank">
              powered by ipify.org
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">IP Format</TableHead>
              <TableHead className="text-right">IP Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ipv4</TableCell>
              <TableCell className="text-right">{ipAddressv4}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ipv6</TableCell>
              <TableCell className="text-right">{ipAddressv6}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </span>
    </div>
  );
}
