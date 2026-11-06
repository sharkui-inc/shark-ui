import { EllipsisIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ContextMenuThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-end gap-1.5">
      <div className="border-input bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg border shadow-sm/4">
        <EllipsisIcon
          aria-hidden="true"
          className="text-muted-foreground/64 size-4"
        />
      </div>
      <div className="border-input bg-muted flex w-full flex-col overflow-hidden rounded-lg border border-dashed shadow-sm/4">
        <div className="bg-primary flex items-center gap-2 p-2">
          <div className="bg-primary-foreground/80 size-4 shrink-0 rounded-md" />
          <div className="bg-primary-foreground h-2 w-full rounded-full" />
        </div>
        <div className="flex items-center gap-2 p-2">
          <div className="bg-muted-foreground/24 size-4 shrink-0 rounded-md" />
          <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
