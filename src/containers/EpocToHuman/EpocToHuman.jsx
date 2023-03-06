import moment from "moment/moment";
import React, { useState } from "react";

function EpocToHuman() {
  const epocTime = parseInt(Date.now() / 1000);
  const [inputTime, setinputTime] = useState(epocTime);
  const [fomattedTimes, setfomattedTimes] = useState([]);
  const epoc2human = (timestamp) => {
    const ftimes = [];
    ftimes.push({
      format: "DD MM YYYY, h:mm:ss a",
      description: "",
      timestamp: moment.unix(timestamp).format("DD MM YYYY, h:mm:ss a"),
    });
    ftimes.push({
      format: "DD-MM-YYYY HH:mm",
      description: "",
      timestamp: moment.unix(timestamp).format("DD MM YYYY HH:mm"),
    });
    ftimes.push({
      format: "MM/DD/YY",
      description: "Month-Day-Year wit leading zeros (02/17/2009)",
      timestamp: moment.unix(timestamp).format("MM/DD/YY"),
    });
    ftimes.push({
      format: "dddd MMMM Do YYYY, h:mm:ss a",
      description: "",
      timestamp: moment.unix(timestamp).format("dddd MMMM Do YYYY, h:mm:ss a"),
    });
    ftimes.push({
      format: "D M YYYY, h:mm:ss a",
      description: "",
      timestamp: moment.unix(timestamp).format("D M YYYY, h:mm:ss a"),
    });
    setfomattedTimes(ftimes);
  };
  return (
    <div className="p-4">
      <div className="text-xl text-center border-b-2">Epoc/Unix to Human</div>
      <div className="w-full  flex flex-col justify-center items-center gap-4 p-2">
        <div className=" w-1/2 ">
          <div className="flex flex-col gap-2">
            <label className="hidden">Input</label>
            <input
              type="number"
              value={inputTime}
              onChange={(e) => setinputTime(e.target.value)}
              className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:appearance-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              placeholder="unix timestamp ex:1678070284"
            />

            <button
              className="py-1 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => epoc2human(inputTime)}
            >
              Convert to Human
            </button>
          </div>
        </div>
        <div className=" w-1/2 ">
          {fomattedTimes.length > 0 && (
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    time format
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    time
                  </th>
                </tr>
              </thead>
              <tbody>
                {fomattedTimes.map((ftime) => (
                  <tr key={ftime.format}>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      {ftime.format}
                    </td>
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {ftime.timestamp}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="w-full  flex flex-row justify-center items-center gap-4 p-2">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/yatheeshraju/shiftf5/edit/master/src/containers/EpocToHuman/EpocToHuman.jsx"
        >
          Add Formats / Contribute
        </a>
        |
        <a
          target="_blank"
          rel="noreferrer"
          href="https://momentjs.com/guides/#/parsing/"
        >
          uses Moment.JS
        </a>
      </div>
    </div>
  );
}

export default EpocToHuman;
