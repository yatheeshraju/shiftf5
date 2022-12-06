import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function UrlEncodeDecode() {
  const [inputTxt, setinputTxt] = useState();
  const [outputTxt, setoutputTxt] = useState();
  const handleEncode = () => {
    try {
      if (inputTxt !== null || inputTxt !== "") {
        setoutputTxt(encodeURI(inputTxt));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDecode = () => {
    try {
      if (inputTxt !== null || inputTxt !== "") {
        setoutputTxt(decodeURI(inputTxt));
      }
    } catch (error) {
      toast.error("The String is not encoded correctly!");
    }
  };
  return (
    <div className="p-4">
      <div className="text-xl border-b-2 text-center">
        URL 64 Encode / Decode{" "}
      </div>
      <div className="w-full  flex flex-col items-center justify-center md:flex-row gap-4 p-2">
        <div className="flex flex-col">
          <label className="hidden">Input</label>
          <textarea
            cols={50}
            rows={15}
            className="border-2 p-2 focus:outline-none focus:bg-gray-100 resize-none"
            value={inputTxt}
            onChange={(e) => setinputTxt(e.target.value)}
            placeholder="enter your text ...."
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <button
            type="button"
            onClick={handleEncode}
            className="py-1 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            ENCODE
          </button>
          <button
            type="button"
            onClick={handleDecode}
            className="py-1 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            DECODE
          </button>
        </div>
        <div className="flex flex-col">
          <label className="hidden">Output</label>
          <textarea
            cols={50}
            rows={15}
            className="border-2 p-2 bg-transparent resize-none"
            disabled
            value={outputTxt}
            placeholder="your converted text ...."
          />
        </div>
      </div>
    </div>
  );
}

export default UrlEncodeDecode;
