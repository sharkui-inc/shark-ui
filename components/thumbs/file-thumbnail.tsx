import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FileThumbnailThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-14 w-11 items-center justify-center rounded-md border border-input bg-muted p-1.5 shadow-md/5">
      <div className="size-full rounded-sm bg-primary" />
    </div>
  </ThumbCard>
);
