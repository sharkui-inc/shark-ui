import { CloudUploadIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const Example = () => (
  <Field className="mx-auto w-full max-w-sm" invalid>
    <FieldLabel>Attachments</FieldLabel>
    <FileUpload
      accept="application/pdf,image/png,image/jpeg"
      className="w-full"
      invalid
    >
      <FileUploadDropzone className="gap-4 py-10" disableClick>
        <CloudUploadIcon
          aria-hidden="true"
          className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
          strokeWidth={1.5}
        />
        <div className="flex flex-col gap-0.5">
          <FileUploadTitle>Drag and drop your files</FileUploadTitle>
          <FileUploadHelper>PDF, PNG, or JPG</FileUploadHelper>
        </div>
        <FileUploadTrigger asChild>
          <Button size="sm">Select files</Button>
        </FileUploadTrigger>
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
    <FieldError>Upload a supported file type.</FieldError>
  </Field>
);

export default Example;
