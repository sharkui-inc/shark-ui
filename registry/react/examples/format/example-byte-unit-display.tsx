import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { FormatByte } from "@/registry/react/components/format";

const Example = () => (
  <div className="flex w-full max-w-xs flex-col gap-4">
    <Attachment state="done">
      <AttachmentMedia format="zip" variant="file" />
      <AttachmentContent>
        <AttachmentTitle>assets.zip</AttachmentTitle>
        <AttachmentDescription>
          ZIP · <FormatByte value={1_500_000} />
        </AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <ul className="flex flex-col gap-2 rounded-xl border px-3 py-2.5">
      {unitDisplays.map((unitDisplay) => (
        <li
          className="flex items-baseline justify-between gap-4 text-sm"
          key={unitDisplay}
        >
          <span className="text-muted-foreground capitalize">
            {unitDisplay}
          </span>
          <span className="font-medium tabular-nums tracking-tight">
            <FormatByte unitDisplay={unitDisplay} value={1_500_000} />
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const unitDisplays = ["long", "short", "narrow"] as const;

export default Example;
