import { ChevronLeftIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PaginationThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 items-center justify-center gap-2">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-input bg-muted shadow-md/5">
        <ChevronLeftIcon
          aria-hidden="true"
          className="size-4 text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-1">
        <div className="size-8 rounded-lg bg-muted-foreground/16" />
        <div className="size-8 rounded-lg bg-primary" />
        <div className="size-8 rounded-lg bg-muted-foreground/16" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-input bg-muted shadow-md/5">
        <ChevronLeftIcon
          aria-hidden="true"
          className="size-4 rotate-180 text-muted-foreground"
        />
      </div>
    </div>
  </ThumbCard>
);
