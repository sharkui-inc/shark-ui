import { XIcon } from "lucide-react";
import { createWavesAvatar } from "@/lib/dicebear";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <div className="flex flex-wrap gap-3">
    {files.map((file) => (
      <Attachment key={file.name} orientation="vertical">
        <AttachmentMedia variant="image">
          <img alt="" height={96} src={file.src} width={96} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>{file.name}</AttachmentTitle>
          <AttachmentDescription>{file.meta}</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label={`Remove ${file.name}`}>
            <XIcon aria-hidden="true" />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    ))}
  </div>
);

const files = [
  {
    meta: "PNG · 820 KB",
    name: "workspace.png",
    src: createWavesAvatar("workspace", "green-dark"),
  },
  {
    meta: "JPG · 1.1 MB",
    name: "desk-reference.jpg",
    src: createWavesAvatar("desk reference", "blue"),
  },
  {
    meta: "JPG · 940 KB",
    name: "office-reference.jpg",
    src: createWavesAvatar("office reference", "purple"),
  },
] as const;

export default Example;
