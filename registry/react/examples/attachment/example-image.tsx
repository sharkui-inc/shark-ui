import { XIcon } from "lucide-react";
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
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=workspace&waveColor=1a6b5c",
  },
  {
    meta: "JPG · 1.1 MB",
    name: "desk-reference.jpg",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=desk+reference&waveColor=2b6cb0",
  },
  {
    meta: "JPG · 940 KB",
    name: "office-reference.jpg",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=office+reference&waveColor=7c3aed",
  },
] as const;

export default Example;
