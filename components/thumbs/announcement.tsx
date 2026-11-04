import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AnnouncementThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-8 items-center gap-3 rounded-lg border p-1 shadow-sm/4">
      <div className="bg-primary flex h-full w-14 items-center justify-center rounded-md" />
      <div className="bg-muted-foreground/24 me-2 h-2 w-full rounded-full" />
    </div>
  </ThumbCard>
);
