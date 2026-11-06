import { ArrowUpRightIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const LinkOverlayThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted max-w-40 rounded-lg border shadow-sm/4">
      <div className="relative flex h-16 w-full items-center justify-center p-3">
        <div className="bg-muted-foreground/24 size-full rounded-md" />
        <div
          aria-hidden="true"
          className="border-input absolute inset-0 flex items-center justify-center rounded-md border border-dashed"
        >
          <ArrowUpRightIcon className="text-muted-foreground/64 size-4" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
