import { CloudUploadIcon } from "lucide-react";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <FileUpload accept="image/png,image/jpeg" className="w-full max-w-xs">
    <FileUploadDropzone className="w-full">
      <CloudUploadIcon
        aria-hidden="true"
        className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
        strokeWidth={1.5}
      />
      <FileUploadTitle>Drop your images here</FileUploadTitle>
      <FileUploadHelper>
        Only PNG and JPEG formats are allowed.
      </FileUploadHelper>
    </FileUploadDropzone>
    <FileUploadList />
  </FileUpload>
);

export default Example;
