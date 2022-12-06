import React, { useEffect, useState } from "react";

function IpAddress() {
  const [ipAddressv4, setipAddressv4] = useState("");
  const [ipAddressv6, setipAddressv6] = useState("");

  const findIpAddress = () => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((result) => {
        setipAddressv4(result.ip);
      });
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((result) => {
        setipAddressv6(result.ip);
      });
  };

  useEffect(() => {
    findIpAddress();
    console.log("called ");
  }, []);

  return (
    <div className="p-5 flex flex-col w-full gap-2 h-screen/2">
      <div className="flex items-center justify-center w-full">
        <div className="text-xl">Your Public IP Address </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center w-screen/2 gap-4">
        <div className="flex relative ">
          <span className="inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
            https://
          </span>
          <input
            type="url"
            className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            name="url"
            placeholder="www.google.com"
            value={url}
            onChange={(e) => seturl(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={findIpAddress}
          className="py-2 px-4 w-32 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   "
        >
          Find
        </button>
      </div> */}
      <div className="flex flex-col items-center justify-center w-screen/2 gap-4">
        <table className="table p-4 bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                IPV4
              </th>
              <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                IPV6
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700">
              <td className="border p-4 dark:border-dark-5">{ipAddressv4}</td>
              <td className="border p-4 dark:border-dark-5">{ipAddressv6}</td>
            </tr>
          </tbody>
        </table>

        <a
          href="https://www.ipify.org"
          className="text-blue-600"
          rel="noreferrer"
          target="_blank"
        >
          powered by ipify.org
        </a>
      </div>
    </div>
  );
}

export default IpAddress;
