"use client";

import { FolderIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadList,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload className="w-full max-w-xs" directory>
    <div className="flex justify-center">
      <FileUploadTrigger asChild>
        <Button size="sm" variant="outline">
          <FolderIcon />
          Select Folder
        </Button>
      </FileUploadTrigger>
      <FileUploadList />
    </div>
  </FileUpload>
);

export default Example;
