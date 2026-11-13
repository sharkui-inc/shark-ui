import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ButtonThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="bg-primary flex h-8 w-24 items-center justify-center gap-2 rounded-lg shadow-sm/4">
      <div className="bg-primary-foreground h-1.5 w-2/3 rounded-full" />
    </div>
  </ThumbCard>
);
