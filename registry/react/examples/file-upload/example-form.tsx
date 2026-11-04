"use client";

import { CloudUploadIcon } from "lucide-react";
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
  FileUploadDropzone,
  FileUploadList,
  FileUploadTitle,
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
    <Card asChild className="w-full max-w-md pb-0">
      <form onSubmit={onSubmit}>
        <FileUpload maxFiles={2} name="attachments">
          <CardContent>
            <FileUploadDropzone>
              <CloudUploadIcon
                aria-hidden="true"
                className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
                strokeWidth={1.5}
              />
              <FileUploadTitle>Drop files here</FileUploadTitle>
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
