import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PlanThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2 rounded-xl border border-input bg-muted p-2 shadow-md/5">
      <div className="h-3 w-2/3 rounded bg-primary" />
      <div className="h-2 w-full rounded bg-muted-foreground/16" />
      <div className="h-2 w-5/6 rounded bg-muted-foreground/16" />
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted-foreground/16">
        <div className="h-full w-1/3 rounded-full bg-primary" />
      </div>
    </div>
  </ThumbCard>
);
