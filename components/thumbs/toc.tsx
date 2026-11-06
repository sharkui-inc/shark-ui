import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TocThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-48 gap-3 rounded-lg border p-3 shadow-sm/4">
      <div className="flex flex-1 flex-col gap-2 py-1">
        <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-4/5 rounded-full" />
        <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-3/5 rounded-full" />
      </div>
      <div className="border-border flex w-16 flex-col gap-1.5 border-s ps-2">
        <div className="bg-primary h-1.5 w-full rounded-full" />
        <div className="bg-muted-foreground/24 h-1.5 w-4/5 rounded-full" />
        <div className="bg-muted-foreground/24 ms-2 h-1.5 w-3/5 rounded-full" />
        <div className="bg-muted-foreground/24 h-1.5 w-4/5 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
