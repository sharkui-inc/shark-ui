import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const StatusThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full max-w-40 min-w-0 flex-1 flex-col gap-2">
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="bg-primary size-2.5 shrink-0 rounded-full"
        />
        <div className="border-input bg-muted flex-1 rounded-md border border-dashed p-1.5 shadow-sm/4">
          <div className="bg-muted-foreground/24 h-2 w-3/4 rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="bg-muted-foreground/24 size-2.5 shrink-0 rounded-full"
        />
        <div className="border-input bg-muted flex-1 rounded-md border border-dashed p-1.5 shadow-sm/4">
          <div className="bg-muted-foreground/24 h-2 w-1/2 rounded-full" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
