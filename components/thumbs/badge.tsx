import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BadgeThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-24 items-center gap-2 rounded-lg border border-input bg-muted px-3 py-2 shadow-sm/4">
      <div className="size-1.5 shrink-0 rounded-full bg-primary" />
      <div className="h-2 w-full rounded-full bg-muted-foreground/24" />
    </div>
  </ThumbCard>
);
