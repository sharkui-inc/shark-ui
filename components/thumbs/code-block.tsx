import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CodeBlockThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-input bg-muted shadow-md/5">
      <div className="h-6 border-input border-b bg-muted/80" />
      <div className="flex flex-col gap-1 p-2">
        <div className="h-2 w-5/6 rounded bg-muted-foreground/20" />
        <div className="h-2 w-2/3 rounded bg-primary" />
        <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
      </div>
    </div>
  </ThumbCard>
);
