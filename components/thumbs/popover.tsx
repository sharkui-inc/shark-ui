import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PopoverThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-48 flex-col items-center gap-2">
      <div className="border-input bg-muted flex w-full flex-col gap-2 rounded-lg border border-dashed p-2 shadow-sm/4">
        <div className="bg-muted-foreground/24 h-2 w-2/4 rounded-full" />
        <div className="flex flex-col gap-1">
          <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
          <div className="bg-muted-foreground/16 h-2 w-2/3 rounded-full" />
        </div>
      </div>
      <div className="bg-primary flex h-8 w-20 items-center justify-center gap-2 rounded-lg shadow-sm/4">
        <div className="bg-primary-foreground h-1.5 w-1/2 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
