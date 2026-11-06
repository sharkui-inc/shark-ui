import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ImageCropperThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted h-24 w-full rounded-lg border p-5 shadow-sm/4">
      <div className="border-primary relative size-full rounded-md border-2 border-dashed">
        <div className="border-primary bg-muted absolute -inset-e-3 -top-3 size-2.5 rounded-xs border-2" />
        <div className="border-primary bg-muted absolute -inset-s-3 -bottom-3 size-2.5 rounded-xs border-2" />
        <div className="border-primary bg-muted absolute -inset-s-3 -top-3 size-2.5 rounded-xs border-2" />
        <div className="border-primary bg-muted absolute -inset-e-3 -bottom-3 size-2.5 rounded-xs border-2" />
      </div>
    </div>
  </ThumbCard>
);
