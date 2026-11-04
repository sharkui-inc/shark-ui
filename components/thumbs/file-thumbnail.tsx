import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FileThumbnailThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-14 w-11 items-center justify-center rounded-md border p-1.5 shadow-sm/4">
      <div className="bg-primary size-full rounded-sm" />
    </div>
  </ThumbCard>
);
