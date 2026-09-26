import { InfoIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TooltipThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-32 flex-col items-center gap-2">
      <div className="flex h-8 w-full items-center justify-center rounded-lg border border-input border-dashed bg-muted shadow-sm/4">
        <div className="h-2 w-3/4 rounded-full bg-muted-foreground/24" />
      </div>
      <div className="flex size-6 items-center justify-center rounded-lg bg-primary shadow-sm/4">
        <InfoIcon className="size-3 text-primary-foreground" />
      </div>
    </div>
  </ThumbCard>
);
