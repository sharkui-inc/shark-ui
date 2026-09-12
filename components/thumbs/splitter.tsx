import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SplitterThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-24 w-full overflow-hidden rounded-lg border border-input bg-muted shadow-md/5">
      <div className="flex w-2/5 items-center justify-center">
        <div className="h-2 w-8 rounded-full bg-muted-foreground/16" />
      </div>
      <div className="w-1 shrink-0 rounded-full bg-primary" />
      <div className="flex flex-1 items-center justify-center">
        <div className="h-2 w-12 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
