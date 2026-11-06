import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TourThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full items-center gap-2">
      <div className="border-input bg-muted flex w-1/4 justify-center rounded-md border p-2 shadow-sm/4">
        <div className="bg-muted-foreground/24 h-1 w-full rounded-full" />
      </div>
      <div className="border-input bg-muted flex flex-1 flex-col gap-2 rounded-lg border border-dashed p-3 shadow-sm/4">
        <div className="bg-muted-foreground/24 h-2 w-2/4 rounded-lg" />
        <div className="flex flex-col gap-1">
          <div className="bg-muted-foreground/24 h-1 w-full rounded-full" />
          <div className="bg-muted-foreground/16 h-1 w-2/3 rounded-full" />
        </div>
        <div className="flex justify-end gap-2 pt-1">
          <div className="border-input bg-muted h-4 w-12 rounded-md border shadow-sm/4" />
          <div className="bg-primary h-4 w-12 rounded-md" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
