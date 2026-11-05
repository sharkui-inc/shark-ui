import { MinusIcon, XIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FloatingPanelThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col overflow-hidden rounded-lg border border-dashed shadow-sm/4">
      <div className="border-input bg-muted flex items-center justify-between gap-2 border-b px-3 py-2">
        <div className="bg-primary h-2 w-1/3 min-w-0 rounded-full" />
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-muted-foreground/64">
            <MinusIcon className="text-muted-foreground/64 size-3" />
          </span>

          <span aria-hidden="true" className="text-muted-foreground/64">
            <XIcon className="text-muted-foreground/64 size-3" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <div className="bg-muted-foreground/24 h-2 w-2/3 rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
