import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MarqueeThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted relative isolate flex w-64 gap-2 overflow-hidden rounded-lg border p-2 shadow-sm/4">
      <div className="from-muted absolute inset-y-0 inset-s-0 z-10 w-1/2 rounded-s-lg bg-linear-to-r to-transparent rtl:bg-linear-to-l" />
      <div className="bg-primary h-8 w-full rounded-lg" />
      <div className="border-input bg-muted-foreground/24 h-8 w-full rounded-lg border" />
      <div className="border-input bg-muted-foreground/24 h-8 w-full rounded-lg border" />
      <div className="border-input bg-muted-foreground/24 h-8 w-full rounded-lg border" />
      <div className="from-muted absolute inset-y-0 inset-e-0 z-10 w-1/2 rounded-e-lg bg-linear-to-l to-transparent rtl:bg-linear-to-r" />
    </div>
  </ThumbCard>
);
