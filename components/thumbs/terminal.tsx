import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TerminalThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-input bg-muted shadow-sm/4">
      <div className="flex h-5 items-center border-input border-b px-2">
        <div className="h-1.5 w-12 rounded bg-muted-foreground/32" />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <div className="h-2 w-3/4 rounded bg-primary" />
        <div className="h-2 w-1/2 rounded bg-muted-foreground/32" />
      </div>
    </div>
  </ThumbCard>
);
