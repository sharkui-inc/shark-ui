"use client";

import { PaperclipIcon } from "lucide-react";
import React from "react";
import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentRemove,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadTrigger,
  useFileUploadContext,
} from "@/registry/react/components/file-upload";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const [value, setValue] = React.useState("");

  return (
    <FileUpload
      accept="image/*,.md,.pdf,.txt"
      className="w-full max-w-lg"
      maxFiles={4}
    >
      <FileUploadDropzone
        asChild
        className="cursor-default justify-start rounded-none border-0 p-0 text-start data-dragging:bg-transparent [&[data-dragging]_[data-slot=input-group]]:border-primary/64 [&[data-dragging]_[data-slot=input-group]]:bg-primary/8"
        disableClick
      >
        <PromptInput onSubmit={() => setValue("")}>
          <FileUploadAttachments />
          <PromptInputTextarea
            aria-label="Prompt with attachments"
            onChange={(event) => setValue(event.target.value)}
            placeholder="Ask about your files…"
            value={value}
          />
          <PromptInputFooter>
            <FileUploadTrigger asChild>
              <PromptInputButton aria-label="Attach files" size="icon-sm">
                <PaperclipIcon aria-hidden="true" />
              </PromptInputButton>
            </FileUploadTrigger>
            <PromptInputSubmit size="icon-sm" />
          </PromptInputFooter>
        </PromptInput>
      </FileUploadDropzone>
    </FileUpload>
  );
};

const FileUploadAttachments = () => {
  const { acceptedFiles, deleteFile } = useFileUploadContext();

  if (acceptedFiles.length === 0) {
    return null;
  }

  return (
    <PromptInputHeader>
      <AttachmentGroup className="w-full">
        {acceptedFiles.map((file) => (
          <Attachment
            className="max-w-52"
            key={`${file.name}-${file.lastModified}`}
            size="sm"
          >
            <AttachmentMedia
              format={file.name.split(".").pop()}
              variant="file"
            />
            <AttachmentContent>
              <AttachmentTitle>{file.name}</AttachmentTitle>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentRemove
                aria-label={`Remove ${file.name}`}
                onClick={() => deleteFile(file)}
              />
            </AttachmentActions>
          </Attachment>
        ))}
      </AttachmentGroup>
    </PromptInputHeader>
  );
};

export default Example;
