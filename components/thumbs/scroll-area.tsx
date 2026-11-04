import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ScrollAreaThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-40 gap-2 rounded-lg border p-2 pe-1 shadow-sm/4">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div className="bg-muted-foreground/24 h-2 w-2/3 rounded-full" />
          <div className="bg-muted-foreground/16 h-1.5 w-1/3 rounded-full" />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="bg-muted-foreground/16 h-1.5 w-2/4 rounded-full" />
          <div className="bg-muted-foreground/16 h-1.5 w-3/4 rounded-full" />
          <div className="bg-muted-foreground/16 h-1.5 w-1/3 rounded-full" />
        </div>
      </div>
      <div className="bg-primary w-1 shrink-0 rounded-full" />
    </div>
  </ThumbCard>
);
