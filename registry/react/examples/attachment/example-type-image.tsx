import { createWavesAvatar } from "@/lib/dicebear";
import {
  Attachment,
  AttachmentActions,
  AttachmentMedia,
  AttachmentRemove,
} from "@/registry/react/components/attachment";

const Example = () => (
  <Attachment orientation="vertical">
    <AttachmentMedia variant="image">
      <img
        alt=""
        height={104}
        src={createWavesAvatar("brand mark", "green-dark")}
        width={104}
      />
    </AttachmentMedia>
    <AttachmentActions>
      <AttachmentRemove aria-label="Remove brand-mark.png" />
    </AttachmentActions>
  </Attachment>
);

export default Example;
