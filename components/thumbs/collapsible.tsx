import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CollapsibleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="overflow-hidden rounded-lg border border-input bg-muted shadow-md/5">
      <div className="flex items-center justify-between gap-3 border-input border-b px-3 py-2.5">
        <div className="h-2 w-1/2 rounded-full bg-primary" />
        <ChevronDownIcon
          aria-hidden="true"
          className="size-3 shrink-0 rotate-180 text-primary"
        />
      </div>
      <div className="flex flex-col gap-1 px-3 py-3">
        <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
