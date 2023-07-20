import React, { useState } from "react";
import { DiffEditor } from "@monaco-editor/react";
import { useRef } from "react";

function Compare() {
  const compareEditor = useRef(null);
  const handleEditorDidMount = (editor, monaco) => {
    compareEditor.current = editor;
  };
  const options = {
    formatOnPaste: true,
    formatOnType: true,
     minimap: { enabled: true } ,
     readOnly: true 
  };
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  return (
    <div className="p-5 flex flex-col w-full gap-2 h-screen/2">
      <div className="flex items-center w-full">
        <div className="text-xl">Compare </div> &nbsp;
      </div>
      <div className="flex items-center gap-4 w-full">
        <div className="flex flex-col w-1/2">
          <label className="hidden">Input 1 </label>
          <textarea
            className="border-2 border-slate-400 p-2 focus:outline-none focus:bg-gray-100 resize-none"
            value={input1}
            onChange={(e) => setinput1(e.target.value)}
            placeholder="input 1"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label className="hidden">Input 2</label>
          <textarea
            className="border-2  border-slate-400 p-2 focus:outline-none focus:bg-gray-100 resize-none"
            value={input2}
            onChange={(e) => setinput2(e.target.value)}
            placeholder="input 2 "
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <DiffEditor
         options={options}
          height="75vh"
          language="text"
          onMount={handleEditorDidMount}
          original={input1}
          modified={input2}
        />
      </div>
    </div>
  );
}

export default Compare;
