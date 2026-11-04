import { SearchIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const InputGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex overflow-hidden rounded-lg border shadow-sm/4">
      <div className="border-input flex size-8 shrink-0 items-center justify-center border-e">
        <SearchIcon aria-hidden className="text-muted-foreground/64 size-3" />
      </div>
      <div className="flex h-8 flex-1 items-center px-3">
        <div className="bg-muted-foreground/24 h-2 w-1/2 rounded-full" />
      </div>
      <div className="border-input flex size-8 shrink-0 items-center justify-center border-s">
        <div className="bg-primary size-2.5 rounded-lg" />
      </div>
    </div>
  </ThumbCard>
);
