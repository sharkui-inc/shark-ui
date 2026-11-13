import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const StepsThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex items-center gap-1 rounded-lg border p-3 shadow-sm/4">
      <div className="border-input border-primary bg-primary size-5 rounded-full border-2" />
      <div className="bg-primary h-0.5 flex-1 rounded-full" />
      <div className="bg-primary size-5 rounded-full" />
      <div className="bg-muted-foreground/24 h-0.5 flex-1 rounded-full" />
      <div className="border-input border-muted-foreground/24 size-5 rounded-full border-2" />
    </div>
  </ThumbCard>
);
