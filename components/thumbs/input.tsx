import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const InputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="rounded-lg border border-input bg-muted shadow-sm/4">
      <div className="flex h-8 items-center gap-0.5 px-3">
        <div className="h-2 w-1/3 rounded-full bg-muted-foreground/24" />
        <div className="h-4 w-px rounded-full bg-primary" />
      </div>
    </div>
  </ThumbCard>
);
