import React from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/stackoverflow-light.css";
import { toast } from "react-toastify";

function JwtDecode() {
  const [inputTxt, setinputTxt] = useState();
  const [outputTxt, setoutputTxt] = useState();
  const handleDecode = () => {
    try {
      if (inputTxt !== null || inputTxt !== "") {
        setoutputTxt(JSON.stringify(jwt_decode(inputTxt)));
      }
    } catch (error) {
      setoutputTxt();
      toast.error("Invalid JWT Token !");
    }
  };
  return (
    <div className="p-4">
      <div className="text-xl border-b-2 text-center">JWT Decode </div>
      <div className="flex flex-col items-center justify-center gap-4 p-2">
        <div className="flex flex-col w-full md:w-5/6 ">
          <label className="hidden">Input</label>
          <textarea
            cols={20}
            rows={5}
            className="border-2 p-2 focus:outline-none focus:bg-gray-100 resize-none"
            value={inputTxt}
            onChange={(e) => setinputTxt(e.target.value)}
            placeholder="enter your base64 encoded jwt token ...."
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-5/6 gap-2">
          <button
            type="button"
            onClick={handleDecode}
            className="py-2 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            DECODE
          </button>
        </div>
        <div className="flex flex-col w-full md:w-5/6 ">
          {outputTxt && (
            <Highlight className="language-javascript">
              {JSON.stringify(JSON.parse(outputTxt), null, 4)}
              {/* <textarea
                cols={50}
                rows={15}
                className="border-2 p-2 bg-transparent resize-none"
                disabled
                value={outputTxt}
                placeholder="your converted text ...."
              /> */}
            </Highlight>
          )}
        </div>
      </div>
    </div>
  );
}

export default JwtDecode;
