import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SourcesThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col items-start gap-2">
      <div className="h-3 w-28 rounded bg-muted-foreground/24" />
      <div className="h-7 w-32 rounded-lg bg-primary shadow-md/5" />
      <div className="h-7 w-20 rounded-lg border border-input bg-muted shadow-md/5" />
    </div>
  </ThumbCard>
);
