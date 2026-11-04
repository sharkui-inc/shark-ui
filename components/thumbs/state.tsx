import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const StateThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col items-center gap-2 rounded-lg border border-dashed p-3 shadow-sm/4">
      <div className="bg-muted-foreground/24 size-6 rounded-md" />
      <div className="bg-muted-foreground/24 h-2 w-1/2 rounded-full" />
      <div className="bg-muted-foreground/24 h-1.5 w-3/4 rounded-full" />
      <div className="bg-primary mt-1 h-3 w-1/3 rounded-md" />
    </div>
  </ThumbCard>
);
