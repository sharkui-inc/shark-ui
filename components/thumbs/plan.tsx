import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PlanThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="bg-muted flex w-full flex-col gap-1 rounded-xl p-2">
      <div className="flex h-5 items-center gap-1.5 px-1.5">
        <div className="border-muted-foreground/32 size-2 rounded-sm border" />
        <div className="flex flex-1 flex-col gap-1">
          <div className="bg-muted-foreground/32 h-1.5 w-2/3 rounded" />
          <div className="bg-muted-foreground/32 h-1 w-1/3 rounded" />
        </div>
        <div className="bg-primary size-1.5 rounded-full" />
      </div>
      <div className="bg-background/64 flex h-4 items-center gap-1.5 rounded-md px-1.5">
        <div className="bg-primary size-1.5 rounded-full" />
        <div className="bg-muted-foreground/32 h-1.5 w-3/4 rounded" />
      </div>
      <div className="flex h-4 items-center gap-1.5 px-1.5">
        <div className="border-muted-foreground/32 size-1.5 rounded-full border" />
        <div className="bg-muted-foreground/24 h-1.5 w-5/6 rounded" />
      </div>
    </div>
  </ThumbCard>
);
