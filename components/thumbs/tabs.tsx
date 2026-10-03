import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TabsThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-52 flex-col gap-4">
      <div className="flex items-center gap-0.5 rounded-lg bg-muted p-0.5">
        <div className="flex flex-1 items-center justify-center rounded-md bg-background px-2 py-1.5 shadow-sm/4 dark:bg-input">
          <div className="h-1.5 w-8 rounded-full bg-foreground" />
        </div>
        <div className="flex flex-1 items-center justify-center px-2 py-1.5">
          <div className="h-1.5 w-8 rounded-full bg-muted-foreground/48" />
        </div>
        <div className="flex flex-1 items-center justify-center px-2 py-1.5">
          <div className="h-1.5 w-8 rounded-full bg-muted-foreground/48" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 px-1">
        <div className="h-2 w-full rounded-full bg-muted-foreground/24" />
        <div className="h-2 w-4/5 rounded-full bg-muted-foreground/16" />
      </div>
    </div>
  </ThumbCard>
);
