import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AttachmentThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full items-center gap-2 rounded-xl border p-2 shadow-sm/4">
      <div className="bg-primary size-10 shrink-0 rounded-lg" />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="bg-muted-foreground/24 h-2 w-3/4 rounded-full" />
        <div className="bg-muted-foreground/24 h-2 w-1/3 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
