import { CheckIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const EditableThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center gap-2">
      <div className="flex h-8 flex-1 items-center rounded-lg border border-input bg-muted px-3 shadow-sm/4">
        <div className="h-2 w-2/3 rounded-full bg-muted-foreground/24" />
      </div>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary shadow-sm/4">
        <CheckIcon
          aria-hidden="true"
          className="size-3 text-primary-foreground"
        />
      </div>
    </div>
  </ThumbCard>
);
