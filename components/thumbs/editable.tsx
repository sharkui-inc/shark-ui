import { CheckIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const EditableThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center gap-2">
      <div className="border-input bg-muted flex h-8 flex-1 items-center rounded-lg border px-3 shadow-sm/4">
        <div className="bg-muted-foreground/24 h-2 w-2/3 rounded-full" />
      </div>
      <div className="bg-primary flex size-8 shrink-0 items-center justify-center rounded-lg shadow-sm/4">
        <CheckIcon aria-hidden className="text-primary-foreground size-3" />
      </div>
    </div>
  </ThumbCard>
);
