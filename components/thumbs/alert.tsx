import { InfoIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const AlertThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full items-center gap-4 rounded-lg border p-3 shadow-sm/4">
      <InfoIcon aria-hidden className="text-primary size-4" />
      <div className="bg-muted-foreground/24 h-2 w-3/4 rounded-full" />
    </div>
  </ThumbCard>
);
