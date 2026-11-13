import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BadgeThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-24 items-center gap-2 rounded-lg border px-3 py-2 shadow-sm/4">
      <div className="bg-primary size-1.5 shrink-0 rounded-full" />
      <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
    </div>
  </ThumbCard>
);
