import { CalendarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DatePickerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full max-w-48 flex-col gap-2">
      <div className="border-input bg-muted flex h-8 items-center rounded-lg border px-3 shadow-sm/4">
        <div className="flex w-full items-center gap-3">
          <CalendarIcon
            aria-hidden
            className="text-muted-foreground/64 size-3 shrink-0"
          />
          <div className="bg-muted-foreground/24 h-2 w-1/3 rounded-full" />
        </div>
      </div>
      <div className="border-input bg-muted relative flex flex-col gap-2 rounded-lg border border-dashed p-3 shadow-sm/4">
        <div className="grid grid-cols-5 place-content-center gap-1.5">
          {Array.from({ length: 5 }, (_, i) => `day-${i}`).map((key) => (
            <div
              className="bg-muted-foreground/24 h-1.5 rounded-lg"
              key={key}
            />
          ))}
        </div>
        <div className="grid grid-cols-5 justify-items-center gap-1.5">
          {Array.from({ length: 5 }, (_, i) => `cell-${i}`).map((key, i) => (
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
    </div>
  </ThumbCard>
);
