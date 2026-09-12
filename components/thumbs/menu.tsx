import { EllipsisIcon } from "lucide-react";
import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MenuThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 flex-col items-end gap-1.5">
      <div className="flex size-8 items-center justify-center rounded-lg border border-input bg-muted shadow-md/5">
        <EllipsisIcon
          aria-hidden="true"
          className="size-4 text-muted-foreground/64"
        />
      </div>
      <div className="flex w-full flex-col overflow-hidden rounded-lg border border-input border-dashed bg-muted shadow-md/5">
        <div className="flex items-center gap-2 bg-primary p-2">
          <div className="size-4 shrink-0 rounded-md bg-primary-foreground/80" />
          <div className="h-2 w-full rounded-full bg-primary-foreground" />
        </div>
        <div className="flex items-center gap-2 p-2">
          <div className="size-4 shrink-0 rounded-md bg-muted-foreground/16" />
          <div className="h-2 w-full rounded-full bg-muted-foreground/16" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
