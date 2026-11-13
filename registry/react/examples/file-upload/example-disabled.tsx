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

const Example = () => (
  <FileUpload className="mx-auto w-full max-w-sm" disabled>
    <FileUploadDropzone className="gap-4 py-10" disableClick>
      <CloudUploadIcon
        aria-hidden="true"
        className="text-muted-foreground size-8"
        strokeWidth={1.5}
      />
      <div className="flex flex-col gap-0.5">
        <FileUploadTitle>Drag and drop your files</FileUploadTitle>
        <FileUploadHelper>Uploads are currently disabled</FileUploadHelper>
      </div>
      <FileUploadTrigger asChild>
        <Button size="sm">Select files</Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
