import { FileTextIcon } from "lucide-react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const AttachmentDemo = () => (
  <Attachment state="done">
    <AttachmentMedia>
      <FileTextIcon aria-hidden />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>brief.pdf</AttachmentTitle>
      <AttachmentDescription>PDF · 240 KB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default AttachmentDemo;
