import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SeparatorThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-56 flex-col gap-2.5 rounded-lg border border-input bg-muted p-3 shadow-sm/4">
      <div className="flex flex-col gap-1.5">
        <div className="h-1.5 w-2/3 shrink-0 rounded-full bg-muted-foreground/16" />
        <div className="h-1.5 w-full shrink-0 rounded-full bg-muted-foreground/16" />
      </div>

      <div className="h-0.5 w-full shrink-0 rounded-full bg-muted-foreground/24" />

      <div className="flex h-6 items-center gap-2">
        <div className="h-1.5 w-1/3 rounded-full bg-muted-foreground/16" />
        <div className="h-full w-0.5 shrink-0 rounded-full bg-muted-foreground/24" />
        <div className="h-1.5 w-1/3 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
