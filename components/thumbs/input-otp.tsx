import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const InputOTPThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 3 }, (_, i) => `otp-start-${i}`).map((key, i) => (
        <div
          className={
            i === 0
              ? "border-primary bg-muted flex size-8 items-center justify-center rounded-lg border shadow-sm/4"
              : "border-input bg-muted flex size-8 items-center justify-center rounded-lg border shadow-sm/4"
          }
          key={key}
        >
          <div
            className={
              i === 0
                ? "bg-primary h-4 w-px rounded-full"
                : "bg-muted-foreground/24 size-1.5 rounded-full"
            }
          />
        </div>
      ))}

      <hr className="bg-muted-foreground/24 mx-1 h-1 w-2 shrink-0 rounded-full" />

      {Array.from({ length: 3 }, (_, i) => `otp-end-${i}`).map((key) => (
        <div
          className="border-input bg-muted flex size-8 items-center justify-center rounded-lg border shadow-sm/4"
          key={key}
        >
          <div className="bg-muted-foreground/24 size-1.5 rounded-full" />
        </div>
      ))}
    </div>
  </ThumbCard>
);
