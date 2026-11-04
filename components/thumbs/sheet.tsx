import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SheetThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-28 w-full items-stretch gap-2 rounded-lg">
      <div className="border-input bg-muted flex w-full items-center justify-center rounded-lg border shadow-sm/4" />
      <div className="border-input bg-muted flex w-1/3 min-w-14 flex-col gap-2 rounded-lg border border-dashed p-2 shadow-sm/4">
        <div className="flex">
          <div className="bg-muted-foreground/32 h-1.5 w-6 rounded-full" />
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="bg-muted-foreground/24 h-1.5 w-full rounded-full" />
          <div className="bg-muted-foreground/16 h-1.5 w-2/3 rounded-full" />
        </div>
        <div className="flex flex-1" />
        <div className="flex justify-end">
          <div className="bg-primary h-2.5 w-1/2 rounded-md" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
