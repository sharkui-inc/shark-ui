import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MessageScrollerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-24 w-full flex-col gap-2 overflow-hidden rounded-lg border p-2 shadow-sm/4">
      <div className="bg-muted-foreground/24 h-6 w-3/5 rounded-lg" />
      <div className="bg-primary ms-auto h-6 w-2/5 rounded-lg" />
      <div className="bg-muted-foreground/24 mx-auto size-5 shrink-0 rounded-full border shadow-sm/4" />
    </div>
  </ThumbCard>
);
