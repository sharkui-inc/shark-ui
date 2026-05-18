import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DrawerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-full w-full max-w-32 flex-col overflow-hidden rounded-xl border border-input border-dashed bg-muted shadow-md/5">
      <div className="flex justify-center pt-1.5 pb-0.5">
        <div className="h-0.5 w-8 rounded-full bg-muted-foreground/24" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-2">
          <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/16" />
          <div className="h-1.5 w-full rounded-full bg-muted-foreground/8" />
          <div className="h-1.5 w-2/5 rounded-full bg-muted-foreground/8" />
          <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/8" />
          <div className="flex-1" />
          <div className="flex justify-center">
            <div className="h-3 w-2/3 rounded-full bg-primary" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-1">
        <div className="h-0.5 w-8 rounded-full bg-muted-foreground/20" />
      </div>
    </div>
  </ThumbCard>
);
