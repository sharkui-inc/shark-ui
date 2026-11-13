import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CollapsibleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted overflow-hidden rounded-lg border shadow-sm/4">
      <div className="border-input flex items-center justify-between gap-3 border-b px-3 py-2.5">
        <div className="bg-primary h-2 w-1/2 rounded-full" />
        <ChevronDownIcon
          aria-hidden="true"
          className="text-primary size-3 shrink-0 rotate-180"
        />
      </div>
      <div className="flex flex-col gap-1 px-3 py-3">
        <div className="bg-muted-foreground/24 h-1.5 w-full rounded-full" />
        <div className="bg-muted-foreground/24 h-1.5 w-2/3 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
