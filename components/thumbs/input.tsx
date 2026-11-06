import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const InputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted rounded-lg border shadow-sm/4">
      <div className="flex h-8 items-center gap-0.5 px-3">
        <div className="bg-muted-foreground/24 h-2 w-1/3 rounded-full" />
        <div className="bg-primary h-4 w-px rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
