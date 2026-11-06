import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToolResultThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-2">
      <div className="bg-primary h-2 w-20 rounded-sm" />
      <div className="bg-muted-foreground/32 h-1.5 w-8 rounded-sm" />
      <div className="bg-muted-foreground/24 ms-auto h-2 w-14 rounded-sm" />
    </div>
  </ThumbCard>
);
