import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SliderThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-56 items-center">
      <div className="h-2 w-1/3 rounded-s-full bg-primary" />
      <div className="h-4.5 w-6 shrink-0 rounded-full border border-input bg-background shadow-xs/5" />
      <div className="h-2 min-w-0 flex-1 rounded-e-full bg-input/64" />
    </div>
  </ThumbCard>
);
