"use client";

import { toast } from "@/components/examples/example-toast";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

export const FileUploadExample = (props: React.ComponentProps<"div">) => (
  <FileUpload
    accept={acceptedTypes}
    maxFileSize={maxFileSize}
    onFileAccept={({ files }) => {
      const count = files.length;

      toast.success({
        description: `${count} ${count === 1 ? "file" : "files"} added.`,
        title: "Uploaded",
      });
    }}
    {...props}
  >
    <FileUploadDropzone>
      <FileUploadDropzoneIcon className="border-0 bg-transparent p-0" />
      <FileUploadTitle>Drop files here</FileUploadTitle>
      <FileUploadHelper>PNG, JPG, or PDF up to 10MB</FileUploadHelper>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

const acceptedTypes = "image/png,image/jpeg,application/pdf";
const maxFileSize = 10 * 1024 * 1024;
