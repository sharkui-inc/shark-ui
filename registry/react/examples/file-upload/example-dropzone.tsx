"use client";

import { CloudUploadIcon } from "lucide-react";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload className="w-full max-w-xs">
    <FileUploadDropzone>
      <CloudUploadIcon
        aria-hidden="true"
        className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
        strokeWidth={1.5}
      />
      <FileUploadTitle>Drop your files here</FileUploadTitle>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
