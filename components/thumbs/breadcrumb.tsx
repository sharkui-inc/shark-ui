import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BreadcrumbThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <nav className="border-input bg-muted text-muted-foreground/64 flex w-56 items-center gap-1 rounded-lg border p-2 text-sm shadow-sm/4">
      <div className="bg-muted-foreground/24 h-1.5 w-full rounded-full" />
      <div className="bg-muted-foreground/24 h-0.5 w-3 shrink-0 -rotate-45 rounded-full" />
      <div className="bg-muted-foreground/24 h-1.5 w-full rounded-full" />
      <div className="bg-muted-foreground/24 h-0.5 w-3 shrink-0 -rotate-45 rounded-full" />
      <div className="bg-primary h-1.5 w-full rounded-full" />
    </nav>
  </ThumbCard>
);
