"use client";

import { PaperclipIcon } from "lucide-react";
import { useState } from "react";
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
  useFileUpload,
} from "@/registry/react/components/file-upload";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const [value, setValue] = useState("Fix the email validator in helpers.ts");

  return (
    <FileUpload
      accept="image/*,.pdf,.txt"
      className="w-full max-w-lg"
      maxFiles={4}
    >
      <FileUploadDropzone
        asChild
        className="cursor-default justify-start rounded-none border-0 p-0 text-start data-dragging:bg-transparent [&[data-dragging]_[data-slot=input-group]]:border-primary [&[data-dragging]_[data-slot=input-group]]:bg-primary/10"
        disableClick
      >
        <PromptInput onSubmit={() => setValue("")}>
          <FileUploadAttachments />
          <PromptInputTextarea
            aria-label="Prompt"
            onChange={(event) => setValue(event.target.value)}
            placeholder="Ask about a file..."
            value={value}
          />
          <PromptInputFooter>
            <PromptInputTools>
              <Menu positioning={{ placement: "top-start" }}>
                <MenuTrigger asChild>
                  <PromptInputButton aria-label="Add attachment" size="icon-xs">
                    <PaperclipIcon aria-hidden="true" />
                  </PromptInputButton>
                </MenuTrigger>
                <MenuContent>
                  <MenuItem asChild value="upload-file">
                    <FileUploadTrigger asChild>
                      <button type="button">
                        <PaperclipIcon aria-hidden="true" />
                        Upload file
                      </button>
                    </FileUploadTrigger>
                  </MenuItem>
                </MenuContent>
              </Menu>
            </PromptInputTools>
            <PromptInputSubmit />
          </PromptInputFooter>
        </PromptInput>
      </FileUploadDropzone>
    </FileUpload>
  );
};

const FileUploadAttachments = () => {
  const { acceptedFiles, deleteFile } = useFileUpload();

  if (acceptedFiles.length === 0) {
    return null;
  }

  return (
    <PromptInputHeader>
      <AttachmentGroup className="w-full">
        {acceptedFiles.map((file) => (
          <Attachment
            className="max-w-44"
            key={`${file.name}-${file.lastModified}`}
            size="xs"
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
