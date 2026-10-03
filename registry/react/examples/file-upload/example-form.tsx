"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  FileUpload,
  FileUploadClearTrigger,
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const files = new FormData(event.currentTarget)
      .getAll("attachments")
      .filter(
        (file): file is File => file instanceof File && file.name.length > 0
      );
    toast.info({
      description:
        files.map((file) => file.name).join(", ") || "No files selected",
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <FileUpload maxFiles={3} name="attachments">
          <CardContent>
            <FileUploadDropzone>
              <FileUploadDropzoneIcon />
              <FileUploadTitle>Drop files here</FileUploadTitle>
              <FileUploadDescription>
                or choose files from your device
              </FileUploadDescription>
              <FileUploadTrigger asChild>
                <Button type="button" variant="outline">
                  Browse files
                </Button>
              </FileUploadTrigger>
            </FileUploadDropzone>
            <FileUploadList />
          </CardContent>
          <CardFooter className="justify-end">
            <FileUploadClearTrigger asChild>
              <Button type="button" variant="outline">
                Clear
              </Button>
            </FileUploadClearTrigger>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </FileUpload>
      </form>
    </Card>
  );
};

export default Example;
