import { ChevronLeftIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PaginationThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 items-center justify-center gap-2">
      <div className="border-input bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg border shadow-sm/4">
        <ChevronLeftIcon aria-hidden className="text-muted-foreground size-4" />
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-muted-foreground/24 size-8 rounded-lg" />
        <div className="bg-primary size-8 rounded-lg" />
        <div className="bg-muted-foreground/24 size-8 rounded-lg" />
      </div>
      <div className="border-input bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg border shadow-sm/4">
        <ChevronLeftIcon
          aria-hidden
          className="text-muted-foreground size-4 rotate-180"
        />
      </div>
    </div>
  </ThumbCard>
);
