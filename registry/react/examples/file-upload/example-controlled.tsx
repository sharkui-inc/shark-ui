"use client";

import { CloudUploadIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const Example = () => {
  const [acceptedFiles, setAcceptedFiles] = React.useState<File[]>([]);

  return (
    <FileUpload
      acceptedFiles={acceptedFiles}
      className="mx-auto w-full max-w-sm"
      maxFileSize={10 * 1024 * 1024}
      maxFiles={2}
      onFileChange={(details) => setAcceptedFiles(details.acceptedFiles)}
    >
      <FileUploadDropzone className="gap-4 py-10" disableClick>
        <CloudUploadIcon
          aria-hidden="true"
          className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
          strokeWidth={1.5}
        />
        <div className="flex flex-col gap-0.5">
          <FileUploadTitle>Drag and drop your files</FileUploadTitle>
          <FileUploadHelper>
            {acceptedFiles.length} of 2 files selected
          </FileUploadHelper>
        </div>
        <FileUploadTrigger asChild>
          <Button size="sm">Select files</Button>
        </FileUploadTrigger>
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
  );
};

export default Example;
