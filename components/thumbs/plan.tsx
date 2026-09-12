import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PlanThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-1 rounded-xl bg-muted p-2">
      <div className="flex h-5 items-center gap-1.5 px-1.5">
        <div className="size-2 rounded-sm border border-muted-foreground/40" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="h-1.5 w-2/3 rounded bg-foreground" />
          <div className="h-1 w-1/3 rounded bg-muted-foreground/24" />
        </div>
        <div className="size-1.5 rounded-full bg-primary" />
      </div>
      <div className="flex h-4 items-center gap-1.5 rounded-md bg-background/72 px-1.5">
        <div className="size-1.5 rounded-full bg-primary" />
        <div className="h-1.5 w-3/4 rounded bg-muted-foreground/24" />
      </div>
      <div className="flex h-4 items-center gap-1.5 px-1.5">
        <div className="size-1.5 rounded-full border border-muted-foreground/40" />
        <div className="h-1.5 w-5/6 rounded bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
