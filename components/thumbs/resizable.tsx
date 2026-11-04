import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ResizableThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex size-full items-center gap-2">
      <div className="border-input bg-muted flex h-1/2 min-h-0 flex-1 items-center justify-center rounded-lg border shadow-sm/4">
        <span className="text-muted-foreground/64 text-sm">A</span>
      </div>
      <div className="flex shrink-0 items-center justify-center">
        <div className="bg-muted-foreground/24 h-1/3 min-h-8 w-1 rounded-full" />
      </div>
      <div className="border-input bg-muted flex h-1/2 min-h-0 flex-1 items-center justify-center rounded-lg border shadow-sm/4">
        <span className="text-muted-foreground/64 text-sm">B</span>
      </div>
    </div>
  </ThumbCard>
);
