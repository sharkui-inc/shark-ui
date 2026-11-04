import { StarIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const RatingGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex justify-center gap-1">
      <StarIcon aria-hidden className="text-primary size-6 fill-current" />
      <StarIcon aria-hidden className="text-primary size-6 fill-current" />
      <StarIcon aria-hidden className="text-primary size-6 fill-current" />
      <StarIcon aria-hidden className="text-primary size-6" />
      <StarIcon aria-hidden className="text-primary size-6" />
    </div>
  </ThumbCard>
);
