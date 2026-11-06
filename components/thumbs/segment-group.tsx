import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SegmentGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-52 flex-col gap-4">
      <div className="border-input bg-muted flex items-center gap-3 rounded-lg border p-1 shadow-sm/4">
        <div className="bg-primary flex items-center justify-center rounded-lg p-2">
          <div className="bg-primary-foreground h-1.5 w-8 rounded-full" />
        </div>
        <div className="bg-muted-foreground/24 h-1.5 w-8 rounded-full" />
        <div className="bg-muted-foreground/24 h-1.5 w-8 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
