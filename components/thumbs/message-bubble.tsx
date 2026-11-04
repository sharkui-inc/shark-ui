import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MessageBubbleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="bg-muted h-8 w-3/4 self-start rounded-xl shadow-sm/4" />
      <div className="bg-primary h-8 w-1/2 self-end rounded-xl shadow-sm/4" />
    </div>
  </ThumbCard>
);
