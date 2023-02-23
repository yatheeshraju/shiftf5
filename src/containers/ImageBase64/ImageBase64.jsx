import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function ImageBase64() {
  const [outputTxt, setoutputTxt] = useState();
  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setoutputTxt(reader.result);
    };
    reader.onerror = function (error) {
      toast.error(error);
    };
  };
  return (
    <div className="p-4">
      <div className="text-xl text-center border-b-2">Image to Base64</div>
      <div className="w-full  flex flex-col justify-center gap-4 p-2">
        <div className="flex flex-col">
          <label className="hidden">Input</label>
          <input
            onChange={(e) => getBase64(e.target.files[0])}
            type="file"
            placeholder="Choose Image"
            accept="image/*"
            className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2"
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="hidden">Output</label>

          <textarea
            disabled
            cols={50}
            rows={10}
            className="border-2 p-2 focus:outline-none focus:bg-gray-100 resize-none"
            value={outputTxt}
            placeholder="your base64 encoded image...."
          />
        </div>
      </div>
    </div>
  );
}

export default ImageBase64;
