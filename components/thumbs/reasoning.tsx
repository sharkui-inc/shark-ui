import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ReasoningThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full flex-col gap-2 rounded-lg border p-2 shadow-sm/4">
      <div className="flex items-center justify-between gap-2">
        <div className="bg-primary h-2 w-28 rounded-full" />
        <ChevronDownIcon
          aria-hidden
          className="text-primary size-3 shrink-0 rotate-180"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="bg-muted-foreground/24 h-1.5 w-full rounded-full" />
        <div className="bg-muted-foreground/24 h-1.5 w-4/5 rounded-full" />
        <div className="bg-muted-foreground/16 h-1.5 w-2/3 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
