import React from "react";
import "./JsonFormatter.css";
import Editor from "@monaco-editor/react";
import { useRef } from "react";

function JsonFormatter() {
  const mainEditor = useRef(null);

  const handleEditorDidMount = (editor) => {
    mainEditor.current = editor;
  };

  const options = {
    formatOnPaste: true,
    formatOnType: true,
     minimap: { enabled: false } 
  };

  const handleFormat = () => {
    mainEditor.current.getAction("editor.action.formatDocument").run();
    mainEditor.current.setPosition({ lineNumber: 1, column: 1 });
  };
  const handleCollapse = () => {
    mainEditor.current.trigger("fold", "editor.foldAll");
  };
  const handleExpand = () => {
    mainEditor.current.trigger("unfold", "editor.unfoldAll");
    mainEditor.current.setPosition({ lineNumber: 1, column: 1 });
  };

  return (
    <div className="p-5 flex flex-col w-full gap-2 h-screen/2">
      <div className="flex items-center  justify-between w-full">
        <div className="text-xl">&#123; json formatter &#125; </div>
        <div className="flex gap-2">
          <button
            className="py-1 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={handleFormat}
          >
            FORMAT
          </button>
          <button
            className="py-1 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={handleCollapse}
          >
            COLLAPSE
          </button>
          <button
            className="py-1 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={handleExpand}
          >
            EXPAND
          </button>
         
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <Editor
          height="80vh"
          language="json"
          onMount={handleEditorDidMount}
          defaultValue="paste your json ...."
          options={options}
        />
      </div>
    </div>
  );
}

export default JsonFormatter;
