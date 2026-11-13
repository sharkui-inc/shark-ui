"use client";

import { CloudUploadIcon } from "lucide-react";
import type React from "react";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

export const FileUploadExample = (props: React.ComponentProps<"div">) => (
  <FileUpload accept={acceptedTypes} maxFileSize={maxFileSize} {...props}>
    <FileUploadDropzone>
      <CloudUploadIcon
        aria-hidden="true"
        className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
        strokeWidth={1.5}
      />
      <FileUploadTitle>Drop files here</FileUploadTitle>
      <FileUploadHelper>PNG, JPG, or PDF up to 10MB</FileUploadHelper>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

const acceptedTypes = "image/png,image/jpeg,application/pdf";

const maxFileSize = 10 * 1024 * 1024;
