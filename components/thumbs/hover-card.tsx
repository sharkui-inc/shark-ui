import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const HoverCardThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-32 flex-col items-center gap-4">
      <div className="border-input bg-muted flex w-40 items-center gap-3 rounded-lg border border-dashed p-3 shadow-sm/4">
        <div className="bg-muted-foreground/24 size-8 shrink-0 rounded-full" />
        <div className="flex w-full flex-col gap-1.5">
          <div className="bg-muted-foreground/24 h-2 w-1/3 rounded-full" />
          <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        </div>
      </div>
      <div className="bg-primary h-2 w-1/2 rounded-full" />
    </div>
  </ThumbCard>
);
