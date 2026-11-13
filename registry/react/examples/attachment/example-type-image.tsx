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
        src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=campaign+cover&waveColor=1a6b5c"
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
