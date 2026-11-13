"use client";

import { CloudUploadIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadClearTrigger,
  FileUploadDropzone,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload className="w-full max-w-xs">
    <FileUploadClearTrigger asChild className="absolute top-2 right-2">
      <Button aria-label="Clear files" size="icon-sm" variant="ghost">
        <Trash2Icon />
      </Button>
    </FileUploadClearTrigger>
    <FileUploadDropzone className="w-full">
      <CloudUploadIcon
        aria-hidden="true"
        className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
        strokeWidth={1.5}
      />
      <FileUploadTitle>Drop files here</FileUploadTitle>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
