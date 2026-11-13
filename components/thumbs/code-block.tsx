import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CodeBlockThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full flex-col overflow-hidden rounded-xl border shadow-sm/4">
      <div className="border-input flex h-6 items-center border-b px-2">
        <div className="bg-muted-foreground/32 h-1.5 w-16 rounded" />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <div className="bg-muted-foreground/32 h-2 w-5/6 rounded" />
        <div className="bg-primary h-2 w-2/3 rounded" />
        <div className="bg-muted-foreground/32 h-2 w-3/4 rounded" />
      </div>
    </div>
  </ThumbCard>
);
