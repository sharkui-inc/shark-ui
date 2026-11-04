import { MinusIcon, PlusIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const NumberInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-40 overflow-hidden rounded-lg border shadow-sm/4">
      <div className="border-border border-input flex size-8 shrink-0 items-center justify-center border-e">
        <MinusIcon aria-hidden className="text-muted-foreground/64 size-3" />
      </div>
      <div className="flex h-8 flex-1 items-center justify-center px-2">
        <div className="bg-muted-foreground/24 h-2 w-8 rounded-full" />
      </div>
      <div className="border-border border-input flex size-8 shrink-0 items-center justify-center border-s">
        <PlusIcon aria-hidden className="text-muted-foreground/64 size-3" />
      </div>
    </div>
  </ThumbCard>
);
