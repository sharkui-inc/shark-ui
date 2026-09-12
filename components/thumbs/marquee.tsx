import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MarqueeThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative isolate flex w-64 gap-2 overflow-hidden rounded-lg border border-input bg-muted p-2 shadow-md/5">
      <div className="absolute inset-y-0 start-0 z-10 w-1/2 rounded-s-lg bg-linear-to-r from-muted to-transparent rtl:bg-linear-to-l" />
      <div className="h-8 w-full rounded-lg bg-primary" />
      <div className="h-8 w-full rounded-lg border border-input bg-muted-foreground/16" />
      <div className="h-8 w-full rounded-lg border border-input bg-muted-foreground/16" />
      <div className="h-8 w-full rounded-lg border border-input bg-muted-foreground/16" />
      <div className="absolute inset-y-0 end-0 z-10 w-1/2 rounded-e-lg bg-linear-to-l from-muted to-transparent rtl:bg-linear-to-r" />
    </div>
  </ThumbCard>
);
