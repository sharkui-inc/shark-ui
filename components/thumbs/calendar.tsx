import { ChevronLeftIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CalendarThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted relative flex w-48 flex-col gap-2 rounded-lg border p-3 shadow-sm/4">
      <div className="flex items-center justify-between gap-3">
        <div className="border-input bg-muted flex size-5 items-center justify-center rounded-lg border">
          <ChevronLeftIcon
            aria-hidden="true"
            className="text-muted-foreground/64 size-3"
          />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <div className="bg-muted-foreground/24 h-2 w-full rounded-lg" />
          <div className="bg-muted-foreground/24 h-2 w-3/4 rounded-lg" />
        </div>
        <div className="border-input bg-muted flex size-5 items-center justify-center rounded-lg border">
          <ChevronLeftIcon
            aria-hidden="true"
            className="text-muted-foreground/64 size-3 rotate-180"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 place-content-center gap-1.5">
        {Array.from({ length: 5 }, (_, i) => `day-${i}`).map((key) => (
          <div className="bg-muted-foreground/24 h-1.5 rounded-lg" key={key} />
        ))}
      </div>
      <div className="grid grid-cols-5 justify-items-center gap-1.5">
        {Array.from({ length: 10 }, (_, i) => `cell-${i}`).map((key, i) => (
          <div
            className={
              i === 2
                ? "bg-primary size-6 rounded-lg"
                : "bg-muted-foreground/16 size-6 rounded-lg"
            }
            key={key}
          />
        ))}
      </div>
      <div className="to-muted absolute inset-0 z-10 size-full rounded-b-lg bg-linear-to-b from-transparent via-transparent" />
    </div>
  </ThumbCard>
);
