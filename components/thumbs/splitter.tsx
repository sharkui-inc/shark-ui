import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SplitterThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-24 w-full overflow-hidden rounded-lg border shadow-sm/4">
      <div className="flex w-2/5 items-center justify-center">
        <div className="bg-muted-foreground/24 h-2 w-8 rounded-full" />
      </div>
      <div className="bg-primary w-1 shrink-0 rounded-full" />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-muted-foreground/24 h-2 w-12 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
