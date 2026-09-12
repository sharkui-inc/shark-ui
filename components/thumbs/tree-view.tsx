import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TreeViewThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-1.5 rounded-lg border border-input bg-muted p-3 shadow-md/5">
      <div className="flex items-center gap-2">
        <ChevronDownIcon
          aria-hidden="true"
          className="size-3 shrink-0 text-muted-foreground/64"
        />
        <div className="h-2 w-1/2 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="flex items-center gap-2 ps-4">
        <ChevronDownIcon
          aria-hidden="true"
          className="size-3 shrink-0 text-primary"
        />
        <div className="h-2 w-1/3 rounded-full bg-primary" />
      </div>
      <div className="flex items-center gap-2 ps-4">
        <ChevronDownIcon
          aria-hidden="true"
          className="size-3 shrink-0 text-muted-foreground/64"
        />
        <div className="h-2 w-2/5 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
