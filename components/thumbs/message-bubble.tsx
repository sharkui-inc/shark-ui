import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MessageBubbleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="h-8 w-3/4 self-start rounded-xl bg-muted shadow-md/5" />
      <div className="h-8 w-1/2 self-end rounded-xl bg-primary shadow-md/5" />
    </div>
  </ThumbCard>
);
