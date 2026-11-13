import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SpinnerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="border-input border-muted-foreground/32 border-e-primary size-8 rounded-full border-3" />
    </div>
  </ThumbCard>
);
