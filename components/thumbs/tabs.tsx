import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TabsThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-52 flex-col gap-4">
      <div className="bg-muted flex items-center gap-0.5 rounded-lg p-0.5">
        <div className="bg-background dark:bg-input flex flex-1 items-center justify-center rounded-md px-2 py-1.5 shadow-sm/4">
          <div className="bg-foreground h-1.5 w-8 rounded-full" />
        </div>
        <div className="flex flex-1 items-center justify-center px-2 py-1.5">
          <div className="bg-muted-foreground/48 h-1.5 w-8 rounded-full" />
        </div>
        <div className="flex flex-1 items-center justify-center px-2 py-1.5">
          <div className="bg-muted-foreground/48 h-1.5 w-8 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 px-1">
        <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-4/5 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
