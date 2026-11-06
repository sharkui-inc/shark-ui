import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MessageThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-end gap-2">
        <div className="bg-muted-foreground/24 size-6 shrink-0 rounded-full" />
        <div className="bg-primary h-8 w-3/5 rounded-xl shadow-sm/4" />
      </div>
      <div className="flex justify-end">
        <div className="bg-secondary h-8 w-2/5 rounded-xl shadow-sm/4" />
      </div>
    </div>
  </ThumbCard>
);
