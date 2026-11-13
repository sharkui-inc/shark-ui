import { InfoIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ToggleTooltipThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-32 flex-col items-center gap-2">
      <div className="border-input bg-muted flex h-8 w-full items-center justify-center rounded-lg border border-dashed shadow-sm/4">
        <div className="bg-muted-foreground/24 h-2 w-3/4 rounded-full" />
      </div>
      <div className="bg-primary flex size-6 items-center justify-center rounded-lg shadow-sm/4">
        <InfoIcon
          aria-hidden="true"
          className="text-primary-foreground size-3"
        />
      </div>
    </div>
  </ThumbCard>
);
