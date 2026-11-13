import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MarkerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-2">
      <div className="bg-muted-foreground/24 h-px min-w-0 flex-1" />
      <div className="bg-primary h-2 w-16 rounded-full" />
      <div className="bg-muted-foreground/24 h-px min-w-0 flex-1" />
    </div>
  </ThumbCard>
);
