import { CheckIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ListboxThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-48 flex-col gap-1 rounded-lg border p-2 shadow-sm/4">
      <div className="flex h-6 items-center gap-2 rounded-md px-2 py-1.5">
        <div className="bg-muted-foreground/24 h-1.5 w-1/2 rounded-full" />
      </div>
      <div className="bg-primary flex h-6 items-center justify-between gap-2 rounded-md px-2 py-1.5">
        <div className="bg-primary-foreground h-1.5 w-1/2 rounded-full" />
        <CheckIcon
          aria-hidden="true"
          className="text-primary-foreground size-3"
        />
      </div>
      <div className="flex h-6 items-center gap-2 rounded-md px-2 py-1.5">
        <div className="bg-muted-foreground/24 h-1.5 w-1/2 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
