import { XIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export interface TagsInputThumbProps extends ThumbCardProps {}

export const TagsInputThumb = (props: TagsInputThumbProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex min-h-8 w-full max-w-52 flex-wrap items-center gap-1 rounded-lg border p-1 pe-4 shadow-sm/4">
      <div className="border-border bg-secondary flex h-4.5 items-center gap-1 rounded-md border px-1.5">
        <div className="bg-muted-foreground/24 h-1.5 w-4 rounded-lg" />
        <XIcon aria-hidden className="text-muted-foreground/64 size-2" />
      </div>
      <div className="border-border bg-secondary flex h-4.5 items-center gap-1 rounded-md border px-1.5">
        <div className="bg-muted-foreground/24 h-1.5 w-5 rounded-lg" />
        <XIcon aria-hidden className="text-muted-foreground/64 size-2" />
      </div>
      <XIcon aria-hidden className="text-muted-foreground/64 ms-auto size-2" />
    </div>
  </ThumbCard>
);
