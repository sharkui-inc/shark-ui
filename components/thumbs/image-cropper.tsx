import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ImageCropperThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="h-24 w-full rounded-lg border border-input bg-muted p-5 shadow-md/5">
      <div className="relative size-full rounded-md border-2 border-primary border-dashed">
        <div className="absolute -end-3 -top-3 size-2.5 rounded-xs border-2 border-primary bg-muted" />
        <div className="absolute -start-3 -bottom-3 size-2.5 rounded-xs border-2 border-primary bg-muted" />
        <div className="absolute -start-3 -top-3 size-2.5 rounded-xs border-2 border-primary bg-muted" />
        <div className="absolute -end-3 -bottom-3 size-2.5 rounded-xs border-2 border-primary bg-muted" />
      </div>
    </div>
  </ThumbCard>
);
