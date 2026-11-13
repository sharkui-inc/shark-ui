import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ItemThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col gap-2 rounded-lg border p-3 shadow-sm/4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex w-full items-center gap-2">
          <div className="bg-muted-foreground/24 size-6 shrink-0 rounded-lg" />
          <div className="flex w-full flex-col gap-1">
            <div className="bg-muted-foreground/24 h-2 w-3/4 rounded-full" />
            <div className="bg-muted-foreground/24 h-2 w-2/4 rounded-full" />
          </div>
        </div>
        <div className="bg-primary size-4 w-8 shrink-0 rounded-lg" />
      </div>
    </div>
  </ThumbCard>
);
