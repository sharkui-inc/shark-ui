import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { FormatByte } from "@/registry/react/components/format";

const FormatDemo = () => (
  <Attachment state="done">
    <AttachmentMedia format="pdf" variant="file" />
    <AttachmentContent>
      <AttachmentTitle>brand-guidelines.pdf</AttachmentTitle>
      <AttachmentDescription>
        PDF · <FormatByte value={120_000} />
      </AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

export default FormatDemo;
