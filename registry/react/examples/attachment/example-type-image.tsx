import { createWavesAvatar } from "@/lib/dicebear";
import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentRemove,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment orientation="vertical">
    <AttachmentMedia variant="image">
      <img
        alt=""
        height={104}
        src={createWavesAvatar("campaign cover", "green-dark")}
        width={104}
      />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>campaign-cover.png</AttachmentTitle>
      <AttachmentDescription>PNG · 820 KB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentRemove aria-label="Remove campaign-cover.png" />
    </AttachmentActions>
  </Attachment>
);

export default Example;
