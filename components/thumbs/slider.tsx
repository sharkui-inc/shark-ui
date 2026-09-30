import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SliderThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-56 items-center gap-1.5">
      <div className="h-2 min-w-0 flex-1 rounded-full bg-primary" />
      <div className="h-4.5 w-[calc(--spacing(4.5)*1.375)] shrink-0 rounded-full bg-primary" />
      <div className="h-2 min-w-0 flex-[2] rounded-full bg-muted-foreground/24" />
    </div>
  </ThumbCard>
);
