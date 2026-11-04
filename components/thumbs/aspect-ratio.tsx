import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AspectRatioThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex aspect-video h-auto w-32 items-center justify-center rounded-lg border shadow-sm/4">
      <span className="text-muted-foreground text-xs select-none">16:9</span>
    </div>
  </ThumbCard>
);
