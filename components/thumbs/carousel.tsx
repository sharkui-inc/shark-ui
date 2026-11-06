import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CarouselThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-48 flex-col items-center gap-2 rounded-lg border p-2 shadow-sm/4">
      <div className="flex w-full items-center gap-2">
        <div className="border-input bg-muted-foreground/16 size-3 shrink-0 rounded-full border" />
        <div className="bg-muted-foreground/24 h-16 min-w-0 flex-1 rounded-lg" />
        <div className="bg-primary h-16 min-w-0 flex-1 rounded-lg" />
        <div className="border-input bg-muted-foreground/16 size-3 shrink-0 rounded-full border" />
      </div>
    </div>
  </ThumbCard>
);
