import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ReasoningThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-lg border border-input bg-muted p-2 shadow-md/5">
      <div className="flex items-center justify-between gap-2">
        <div className="h-2 w-28 rounded-full bg-primary" />
        <ChevronDownIcon
          aria-hidden="true"
          className="size-3 shrink-0 rotate-180 text-primary"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="h-1.5 w-full rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
