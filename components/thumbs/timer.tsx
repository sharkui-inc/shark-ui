import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TimerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted text-muted-foreground inline-flex w-fit items-center justify-center gap-2 rounded-lg border px-6 py-4 text-xl font-semibold tabular-nums shadow-sm/4">
      <div className="bg-muted-foreground/24 h-1.5 w-6 rounded-full" />
      <div className="flex flex-col gap-1">
        <div className="bg-muted-foreground/24 size-0.5 rotate-90 rounded-full" />
        <div className="bg-muted-foreground/24 size-0.5 rotate-90 rounded-full" />
      </div>
      <div className="bg-muted-foreground/24 h-1.5 w-6 rounded-full" />
      <div className="flex flex-col gap-1">
        <div className="bg-muted-foreground/24 size-0.5 rotate-90 rounded-full" />
        <div className="bg-muted-foreground/24 size-0.5 rotate-90 rounded-full" />
      </div>
      <div className="bg-primary h-1.5 w-6 rounded-full" />
      <div className="flex flex-col gap-1">
        <div className="bg-muted-foreground/24 size-0.5 rotate-90 rounded-full" />
        <div className="bg-muted-foreground/24 size-0.5 rotate-90 rounded-full" />
      </div>
      <div className="bg-muted-foreground/24 h-1.5 w-6 rounded-full" />
    </div>
  </ThumbCard>
);
