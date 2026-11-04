import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ProgressThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="bg-muted-foreground/24 relative h-3 w-56 overflow-hidden rounded-full">
      <div className="bg-primary absolute inset-y-0 inset-s-0 w-2/5 rounded-full rounded-e-none" />
    </div>
  </ThumbCard>
);
