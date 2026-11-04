import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FloatThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative size-16">
      <div className="border-input bg-muted-foreground/24 size-full rounded-lg border shadow-sm/4" />
      <div className="bg-primary ring-background absolute -inset-e-2 -top-2 flex size-6 items-center justify-center rounded-full ring-4" />
    </div>
  </ThumbCard>
);
