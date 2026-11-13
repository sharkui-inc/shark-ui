import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SourcesThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col items-start gap-2">
      <div className="bg-muted-foreground/32 h-3 w-28 rounded" />
      <div className="bg-primary h-7 w-32 rounded-lg shadow-sm/4" />
      <div className="border-input bg-muted h-7 w-20 rounded-lg border shadow-sm/4" />
    </div>
  </ThumbCard>
);
