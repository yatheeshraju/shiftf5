import React from "react";
import { useState } from "react";

function Base64Image() {
  const [inputTxt, setinputTxt] = useState();

  return (
    <div className="p-4">
      <div className="text-xl text-center border-b-2">Base 64 to Image</div>
      <div className="w-full  flex flex-col justify-center gap-4 p-2">
        <div className="flex flex-col">
          <label className="hidden">Input</label>
          <textarea
            cols={50}
            rows={10}
            className="border-2 p-2 focus:outline-none focus:bg-gray-100 resize-none"
            value={inputTxt}
            onChange={(e) => setinputTxt(e.target.value)}
            placeholder="enter base64 encoded image...."
          />
        </div>

        <div className="flex flex-col">
          <label className="hidden">Output</label>
          <img alt="base64image" src={inputTxt}></img>
        </div>
      </div>
    </div>
  );
}

export default Base64Image;
