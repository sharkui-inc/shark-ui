import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AnnouncementThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 items-center gap-3 rounded-lg border border-input bg-muted p-1 shadow-sm/4">
      <div className="flex h-full w-14 items-center justify-center rounded-md bg-primary" />
      <div className="me-2 h-2 w-full rounded-full bg-muted-foreground/24" />
    </div>
  </ThumbCard>
);
