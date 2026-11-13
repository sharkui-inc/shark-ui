import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DataListThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted rounded-lg border p-3 shadow-sm/4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-muted-foreground/24 h-2 w-16 shrink-0 rounded-full" />
          <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted-foreground/24 h-2 w-20 shrink-0 rounded-full" />
          <div className="bg-primary h-2 w-2/3 rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted-foreground/24 h-2 w-14 shrink-0 rounded-full" />
          <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
