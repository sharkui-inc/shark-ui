import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const InputOTPThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: 3 }, (_, i) => `otp-start-${i}`).map((key, i) => (
        <div
          className={
            i === 0
              ? "flex size-8 items-center justify-center rounded-lg border border-primary bg-muted shadow-md/5"
              : "flex size-8 items-center justify-center rounded-lg border border-input bg-muted shadow-md/5"
          }
          key={key}
        >
          <div
            className={
              i === 0
                ? "h-4 w-px rounded-full bg-primary"
                : "size-1.5 rounded-full bg-muted-foreground/16"
            }
          />
        </div>
      ))}

      <hr className="mx-1 h-1 w-2 shrink-0 rounded-full bg-muted-foreground/16" />

      {Array.from({ length: 3 }, (_, i) => `otp-end-${i}`).map((key) => (
        <div
          className="flex size-8 items-center justify-center rounded-lg border border-input bg-muted shadow-md/5"
          key={key}
        >
          <div className="size-1.5 rounded-full bg-muted-foreground/16" />
        </div>
      ))}
    </div>
  </ThumbCard>
);
