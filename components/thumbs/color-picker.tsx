import { PipetteIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ColorPickerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="border-input bg-muted flex w-24 items-center justify-center gap-2 rounded-lg border border-dashed p-3 shadow-sm/4">
        <div className="bg-muted-foreground/24 h-2 w-3/4 rounded-full" />
      </div>
      <div className="bg-primary flex size-8 shrink-0 items-center justify-center rounded-lg shadow-sm/4">
        <PipetteIcon className="text-primary-foreground size-4" />
      </div>
    </div>
  </ThumbCard>
);
