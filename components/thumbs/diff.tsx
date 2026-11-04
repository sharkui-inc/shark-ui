import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DiffThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full flex-col overflow-hidden rounded-xl border shadow-sm/4">
      <div className="border-border/80 flex h-5 items-center justify-between border-b px-2">
        <div className="bg-muted-foreground/24 h-1.5 w-16 rounded-sm" />
        <div className="bg-muted-foreground/32 h-1.5 w-8 rounded-sm" />
      </div>
      <div className="flex h-4 items-stretch">
        <div className="bg-muted-foreground/16 flex-1" />
      </div>
      <div className="flex h-4 items-stretch">
        <div className="bg-muted-foreground/24 w-0.5" />
        <div className="bg-muted-foreground/24 flex-1" />
      </div>
      <div className="flex h-4 items-stretch">
        <div className="bg-muted-foreground/32 w-0.5" />
        <div className="bg-muted-foreground/32 flex-1" />
      </div>
      <div className="flex h-4 items-stretch">
        <div className="bg-muted-foreground/16 flex-1" />
      </div>
    </div>
  </ThumbCard>
);
