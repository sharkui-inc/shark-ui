import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const QueueThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full flex-col overflow-hidden rounded-xl border shadow-sm/4">
      <div className="flex items-center justify-between border-b px-2 py-1.5">
        <div className="bg-muted-foreground/32 h-2.5 w-24 rounded" />
        <div className="bg-muted-foreground/24 h-2.5 w-10 rounded" />
      </div>
      <div className="flex flex-col gap-1 p-1">
        <div className="bg-primary flex h-5 items-center rounded-md px-1.5">
          <div className="bg-primary-foreground h-2 w-3/5 rounded" />
        </div>
        <div className="flex h-5 items-center px-1.5">
          <div className="bg-muted-foreground/24 h-2 w-2/5 rounded" />
        </div>
        <div className="flex h-5 items-center px-1.5">
          <div className="bg-muted-foreground/24 h-2 w-1/2 rounded" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
