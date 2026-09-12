import { ChevronLeftIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CalendarThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative flex w-48 flex-col gap-2 rounded-lg border border-input bg-muted/64 p-3 shadow-md/5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex size-5 items-center justify-center rounded-lg border border-input bg-muted">
          <ChevronLeftIcon
            aria-hidden="true"
            className="size-3 text-muted-foreground/64"
          />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="h-2 w-full rounded-lg bg-muted-foreground/16" />
          <div className="h-2 w-3/4 rounded-lg bg-muted-foreground/16" />
        </div>
        <div className="flex size-5 items-center justify-center rounded-lg border border-input bg-muted">
          <ChevronLeftIcon
            aria-hidden="true"
            className="size-3 rotate-180 text-muted-foreground/64"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 place-content-center gap-1.5">
        {Array.from({ length: 5 }, (_, i) => `day-${i}`).map((key) => (
          <div className="h-1.5 rounded-lg bg-muted-foreground/16" key={key} />
        ))}
      </div>
      <div className="grid grid-cols-5 justify-items-center gap-1.5">
        {Array.from({ length: 10 }, (_, i) => `cell-${i}`).map((key, i) => (
          <div
            className={
              i === 2
                ? "size-6 rounded-lg bg-primary"
                : "size-6 rounded-lg bg-muted-foreground/8"
            }
            key={key}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 size-full rounded-b-lg bg-linear-to-b from-transparent via-transparent to-muted" />
    </div>
  </ThumbCard>
);
