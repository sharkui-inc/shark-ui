import { CalendarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DateInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-8 w-full max-w-48 items-center gap-1 rounded-lg border px-3 shadow-sm/4">
      <div className="bg-muted-foreground/16 flex h-2 min-w-5 items-center justify-center rounded-sm" />

      <span
        aria-hidden
        className="text-muted-foreground/64 px-1 text-[0.5625rem]"
      >
        /
      </span>

      <div className="bg-muted-foreground/16 flex h-2 min-w-5 items-center justify-center rounded-sm" />

      <span
        aria-hidden
        className="text-muted-foreground/64 px-1 text-[0.5625rem]"
      >
        /
      </span>

      <div className="bg-primary flex h-2 min-w-5 items-center justify-center rounded-sm" />

      <CalendarIcon
        aria-hidden
        className="text-muted-foreground/64 ms-auto size-3 shrink-0"
      />
    </div>
  </ThumbCard>
);
