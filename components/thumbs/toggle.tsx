import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToggleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center justify-center gap-2">
      <div className="flex size-9 items-center justify-center rounded-lg border border-input bg-muted-foreground/16 shadow-sm/4">
        <div className="h-1 w-1/3 rounded-full bg-primary" />
      </div>

      <div className="flex size-9 items-center justify-center rounded-lg border border-input bg-muted shadow-sm/4">
        <div className="h-1 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
