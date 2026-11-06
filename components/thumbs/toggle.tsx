import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToggleThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center justify-center gap-2">
      <div className="border-input bg-muted-foreground/24 flex size-9 items-center justify-center rounded-lg border shadow-sm/4">
        <div className="bg-primary h-1 w-1/3 rounded-full" />
      </div>

      <div className="border-input bg-muted flex size-9 items-center justify-center rounded-lg border shadow-sm/4">
        <div className="bg-muted-foreground/24 h-1 w-1/3 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
