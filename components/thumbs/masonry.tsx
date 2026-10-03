import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MasonryThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="grid w-48 grid-cols-3 items-start gap-2 rounded-lg border border-input bg-muted p-2 shadow-sm/4">
      <div className="flex flex-col gap-2">
        <div className="h-12 rounded-md bg-muted-foreground/24" />
        <div className="h-7 rounded-md bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-8 rounded-md bg-primary" />
        <div className="h-14 rounded-md bg-muted-foreground/24" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-16 rounded-md bg-muted-foreground/16" />
        <div className="h-6 rounded-md bg-muted-foreground/24" />
      </div>
    </div>
  </ThumbCard>
);
