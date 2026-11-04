import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SkeletonThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted relative isolate flex items-center gap-3 rounded-lg border p-3 shadow-sm/4">
      <div className="bg-muted-foreground/24 size-8 shrink-0 rounded-full" />
      <div className="flex w-full flex-col gap-1.5">
        <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/24 h-2 w-2/3 rounded-full" />
      </div>
      <div className="from-muted/80 via-muted/80 absolute inset-0 z-10 rounded-lg bg-linear-to-r to-transparent" />
    </div>
  </ThumbCard>
);
