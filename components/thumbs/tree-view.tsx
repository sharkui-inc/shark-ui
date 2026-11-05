import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TreeViewThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col gap-1.5 rounded-lg border p-3 shadow-sm/4">
      <div className="flex items-center gap-2">
        <ChevronDownIcon
          aria-hidden="true"
          className="text-muted-foreground/64 size-3 shrink-0"
        />
        <div className="bg-muted-foreground/24 h-2 w-1/2 rounded-full" />
      </div>
      <div className="flex items-center gap-2 ps-4">
        <ChevronDownIcon
          aria-hidden="true"
          className="text-primary size-3 shrink-0"
        />
        <div className="bg-primary h-2 w-1/3 rounded-full" />
      </div>
      <div className="flex items-center gap-2 ps-4">
        <ChevronDownIcon
          aria-hidden="true"
          className="text-muted-foreground/64 size-3 shrink-0"
        />
        <div className="bg-muted-foreground/24 h-2 w-2/5 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
