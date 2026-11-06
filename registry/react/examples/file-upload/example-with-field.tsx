"use client";

import { CloudUploadIcon } from "lucide-react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadList,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>Upload images</FieldLabel>
    <FileUpload className="w-full">
      <FileUploadDropzone>
        <CloudUploadIcon
          aria-hidden="true"
          className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
          strokeWidth={1.5}
        />
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
  </Field>
);

export default Example;
