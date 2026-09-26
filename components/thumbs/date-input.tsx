import { CalendarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DateInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 w-full max-w-48 items-center gap-1 rounded-lg border border-input bg-muted px-3 shadow-sm/4">
      <div className="flex h-2 min-w-5 items-center justify-center rounded-sm bg-muted-foreground/16" />

      <span aria-hidden className="px-1 text-[10px] text-muted-foreground/64">
        /
      </span>

      <div className="flex h-2 min-w-5 items-center justify-center rounded-sm bg-muted-foreground/16" />

      <span aria-hidden className="px-1 text-[10px] text-muted-foreground/64">
        /
      </span>

      <div className="flex h-2 min-w-5 items-center justify-center rounded-sm bg-primary" />

      <CalendarIcon
        aria-hidden
        className="ms-auto size-3 shrink-0 text-muted-foreground/64"
      />
    </div>
  </ThumbCard>
);
