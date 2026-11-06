"use client";

import { CloudUploadIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <FileUpload
    className="mx-auto w-full max-w-sm"
    maxFiles={5}
    onFileReject={() =>
      toast.error({
        description: "You can upload up to 5 files at a time.",
        title: "Upload failed.",
      })
    }
  >
    <FileUploadDropzone className="gap-4 py-10" disableClick>
      <CloudUploadIcon
        aria-hidden="true"
        className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
        strokeWidth={1.5}
      />
      <div className="flex flex-col gap-0.5">
        <FileUploadTitle>Drag and drop your files</FileUploadTitle>
        <FileUploadHelper>Up to 5 files at a time</FileUploadHelper>
      </div>
      <FileUploadTrigger asChild>
        <Button size="sm">Select files</Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
