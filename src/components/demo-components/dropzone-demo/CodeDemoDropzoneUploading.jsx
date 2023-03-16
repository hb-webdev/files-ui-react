import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
const CodeDemoDropzoneUploading = ({ splittedOnly = false }) => {
  return (
    <ShowDemoCode
      splittedOnly={splittedOnly}
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSandboxTS="https://codesandbox.io/s/dropzone-ui-basic-3j01v"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoDropzoneUploading;

const splittedCodeJS = `<Dropzone
    onChange={updateFiles}
    value={files}
    accept={"image/*"}
    maxFileSize={28 * 1024*1024}
    maxFiles={2}
    actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
    uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        headers: {
            Authorization:
            "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
        },
        cleanOnUpload: true,
    }}
    fakeUpload
>
  {files.length > 0 &&
    files.map((file) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const splittedCodeTS = `<Dropzone
    onChange={updateFiles}
    value={files}
    accept={"image/*"}
    maxFileSize={28 * 1024*1024}
    maxFiles={2}
    actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
    uploadConfig={{
        url: "https://www.myawsomeserver.com/upload",
        method: "POST",
        headers: {
            Authorization:
            "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
        },
        cleanOnUpload: true,
    }}
    fakeUpload
>
  {files.length > 0 &&
    files.map((file: ExtFile) => (
      <FileMosaic key={file.id} {...file} onDelete={removeFile} info/>
    ))}
</Dropzone>`;
const completeCodeJS = `import { Dropzone,FileMosaic } from "@files-ui/react";
import * as React from "react";

export default function App() {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone
        onChange={updateFiles}
        value={files}
        accept={"image/*"}
        maxFileSize={28 * 1024*1024}
        maxFiles={2}
        actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
        uploadConfig={{
            url: "https://www.myawsomeserver.com/upload",
            method: "POST",
            headers: {
                Authorization:
                "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
            },
            cleanOnUpload: true,
        }}
        fakeUpload
    >
      {files.length > 0 &&
        files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;

const completeCodeTS = `import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import * as React from "react";

export default function App() {
  const [files, setFiles] = React.useState<ExtFile[]>([]);
  const updateFiles = (incommingFiles:ExtFile[]) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id: string | number | undefined) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));
  };
  return (
    <Dropzone
        onChange={updateFiles}
        value={files}
        accept={"image/*"}
        maxFileSize={28 * 1024*1024}
        maxFiles={2}
        actionButtons={{ position: "bottom", uploadButton: {}, abortButton: {} }}
        uploadConfig={{
            url: "https://www.myawsomeserver.com/upload",
            method: "POST",
            headers: {
                Authorization:
                "bearer HTIBI/IBYG/&GU&/GV%&G/&IC%&V/Ibi76bfh8g67gg68g67i6g7G&58768&/(&/(FR&G/&H%&/",
            },
            cleanOnUpload: true,
        }}
        fakeUpload
    >
      {files.length > 0 &&
        files.map((file:ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
    </Dropzone>
  );
}`;