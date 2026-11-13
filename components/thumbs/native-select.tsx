import { ChevronDownIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const NativeSelectThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-8 w-48 items-center rounded-lg border px-2 shadow-sm/4">
      <div className="bg-muted-foreground/24 h-2 w-2/4 rounded-full" />
      <ChevronDownIcon
        aria-hidden="true"
        className="text-muted-foreground/64 ms-auto size-3 shrink-0"
      />
    </div>
  </ThumbCard>
);
