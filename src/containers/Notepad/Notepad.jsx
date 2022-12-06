import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { useRef } from "react";

function Notepad() {
  const notepad = useRef(null);
  const [downloadLink, setDownloadLink] = useState("");
  const handleEditorDidMount = (editor, monaco) => {
    notepad.current = editor;
  };

  const makeTextFile = () => {
    const filedata = notepad.current.getValue();
    const data = new Blob([filedata], { type: "text/plain" });
    if (downloadLink !== "") window.URL.revokeObjectURL(downloadLink);
    setDownloadLink(window.URL.createObjectURL(data));
  };
  return (
    <div className="p-5 flex flex-col w-full gap-2 h-screen/2">
      <div className="flex items-center justify-between w-full">
        <div className="text-xl">Notepad </div>
        <div className="flex gap-2">
          <a
            href={downloadLink}
            download={downloadLink.substring(downloadLink.lastIndexOf("/") + 1)}
            className="py-1 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Save
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <Editor
          height="75vh"
          language="text"
          onMount={handleEditorDidMount}
          onChange={makeTextFile}
          options={{ minimap: { enabled: false } }}
        />
      </div>
    </div>
  );
}

export default Notepad;
