import { XIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ComboboxThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-col gap-2">
      <div className="border-input bg-muted flex h-8 items-center rounded-lg border px-1.5 shadow-sm/4">
        <div className="flex items-center gap-1">
          <div className="border-input bg-background flex h-4.5 items-center gap-1 rounded-lg border px-1.5">
            <div className="bg-muted-foreground/24 h-1.5 w-4 rounded-lg" />
            <XIcon
              aria-hidden="true"
              className="text-muted-foreground size-2"
            />
          </div>
          <div className="border-input bg-background flex h-4.5 items-center gap-1 rounded-lg border px-1.5">
            <div className="bg-muted-foreground/24 h-1.5 w-6 rounded-lg" />
            <XIcon
              aria-hidden="true"
              className="text-muted-foreground size-2"
            />
          </div>
        </div>
      </div>
      <div className="border-input bg-muted flex flex-col gap-1 rounded-lg border border-dashed p-1.5 shadow-sm/4">
        <div className="bg-primary flex items-center gap-2 rounded-md px-2 py-1.5">
          <div className="bg-primary-foreground size-2 rounded-full" />
          <div className="bg-primary-foreground h-2 w-1/3 rounded-full" />
          <div className="bg-primary-foreground/64 ms-auto h-2 w-4 rounded-full" />
        </div>
        <div className="flex w-full items-center gap-2 px-2 py-1.5">
          <div className="bg-muted-foreground/24 size-2 rounded-full" />
          <div className="bg-muted-foreground/24 h-2 w-2/4 rounded-full" />
          <div className="bg-muted-foreground/24 ms-auto h-2 w-4 rounded-full" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
