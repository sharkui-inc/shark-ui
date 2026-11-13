import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ProseThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col gap-3 rounded-lg border p-3 shadow-sm/4">
      <div className="flex flex-col gap-1">
        <div className="bg-primary h-3 w-2/4 rounded-lg" />
        <div className="bg-muted-foreground/24 h-1.5 w-1/4 rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-muted-foreground/24 h-2 w-full rounded-lg" />
        <div className="bg-muted-foreground/16 h-2 w-3/4 rounded-lg" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="bg-muted-foreground/24 size-2 rounded-lg" />
          <div className="bg-muted-foreground/24 h-2 w-1/4 rounded-lg" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
