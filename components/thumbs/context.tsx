import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ContextThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center justify-center gap-2">
      <div className="border-muted-foreground/32 border-t-primary size-8 rounded-full border-2" />
      <div className="bg-muted-foreground/32 h-3 w-10 rounded" />
    </div>
  </ThumbCard>
);
