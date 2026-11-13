import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SkipNavThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col gap-2 rounded-lg border p-2 shadow-sm/4">
      <div className="flex items-center gap-3">
        <div className="bg-primary h-4 w-1/3 rounded-md" />
        <div className="bg-muted-foreground/24 h-2 w-1/3 rounded-full" />
      </div>
      <div className="flex w-full gap-3">
        <div className="flex w-1/3 flex-col gap-2">
          <div className="bg-muted-foreground/24 h-2 w-2/3 rounded-full" />
          <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
          <div className="bg-muted-foreground/16 h-2 w-1/3 rounded-full" />
        </div>
        <div className="border-primary flex flex-1 flex-col gap-2 rounded-md border border-dashed" />
      </div>
    </div>
  </ThumbCard>
);
