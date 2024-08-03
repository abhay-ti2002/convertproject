import React from "react";
import { useState } from "react";
import converfile from "./convertapi";
function App() {
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [convertFilesResult, setconvertFilesResult] = useState<string | null>(
    null
  );
  const handlefileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectFile(event.target.files[0]);
    }
  };
  // console.log(selectFile);

  const handleConvertapi = async () => {
    if (selectFile) {
      try {
        const result = await converfile(selectFile, "doc", "pdf");
        setconvertFilesResult(result.files[0].Url);
      } catch (error) {
        // console.log(selectFile);
        console.error("convesion result", error);
      }
    }
  };
  // console.log(convertFilesResult);
 
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="border-2 border-solid h-1/2 w-1/2 flex flex-col justify-center items-center">
        <div className="m-6">
          <h1 className="font-bold text-4xl">Convert Docs To Pdf</h1>
        </div>
        <div>
          <label className="font-semibold">
            Select file:
            <span className="m-4">
              <input
                type="file"
                accept=".doc, .docx"
                onChange={handlefileChange}
              />
            </span>
          </label>
          <button
            className="bg-gray-300 p-1 rounded-sm"
            onClick={handleConvertapi}
          >
            ConvertFile
          </button>
          {convertFilesResult ? (
            <div className="text-center border-2 border-solid m-7 p-2 rounded-lg bg-blue-600">
              <a href={convertFilesResult} download>
                Download
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
