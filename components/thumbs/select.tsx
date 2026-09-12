import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SelectThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-8 w-48 items-center rounded-lg border border-input bg-muted px-2 shadow-md/5">
      <div className="h-2 w-2/4 rounded-full bg-muted-foreground/16" />
      <ChevronDownIcon
        aria-hidden="true"
        className="ms-auto size-3 shrink-0 text-muted-foreground/64"
      />
    </div>
  </ThumbCard>
);
