import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const QueueThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-input bg-muted shadow-md/5">
      <div className="flex items-center justify-between border-b px-2 py-1.5">
        <div className="h-2.5 w-24 rounded bg-muted-foreground/24" />
        <div className="h-2.5 w-10 rounded bg-muted-foreground/16" />
      </div>
      <div className="flex flex-col gap-1 p-1">
        <div className="flex h-5 items-center rounded-md bg-primary px-1.5">
          <div className="h-2 w-3/5 rounded bg-primary-foreground" />
        </div>
        <div className="flex h-5 items-center px-1.5">
          <div className="h-2 w-2/5 rounded bg-muted-foreground/16" />
        </div>
        <div className="flex h-5 items-center px-1.5">
          <div className="h-2 w-1/2 rounded bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
