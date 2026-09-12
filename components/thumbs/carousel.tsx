import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CarouselThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 flex-col items-center gap-2 rounded-lg border border-input bg-muted p-2 shadow-md/5">
      <div className="flex w-full items-center gap-2">
        <div className="size-3 shrink-0 rounded-full border border-input bg-muted-foreground/8" />
        <div className="h-16 min-w-0 flex-1 rounded-lg bg-muted-foreground/16" />
        <div className="h-16 min-w-0 flex-1 rounded-lg bg-primary" />
        <div className="size-3 shrink-0 rounded-full border border-input bg-muted-foreground/8" />
      </div>
    </div>
  </ThumbCard>
);
