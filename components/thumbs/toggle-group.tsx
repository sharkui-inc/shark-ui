import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToggleGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-8 w-32 rounded-lg border shadow-sm/4">
      <div className="border-input flex size-full items-center justify-center border-e">
        <div className="bg-muted-foreground/24 h-1.5 w-1/2 rounded-full" />
      </div>
      <div className="bg-primary flex size-full items-center justify-center">
        <div className="bg-primary-foreground h-1.5 w-1/2 rounded-full" />
      </div>
      <div className="border-input flex size-full items-center justify-center border-s">
        <div className="bg-muted-foreground/24 h-1.5 w-1/2 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
