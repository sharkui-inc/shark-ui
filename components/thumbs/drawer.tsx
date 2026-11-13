import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DrawerThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex h-full w-full max-w-32 flex-col overflow-hidden rounded-xl border border-dashed shadow-sm/4">
      <div className="flex justify-center pt-1.5 pb-0.5">
        <div className="bg-muted-foreground/32 h-0.5 w-8 rounded-full" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 flex-col gap-1.5 p-2">
          <div className="bg-muted-foreground/24 h-1.5 w-3/5 rounded-full" />
          <div className="bg-muted-foreground/16 h-1.5 w-full rounded-full" />
          <div className="bg-muted-foreground/16 h-1.5 w-2/5 rounded-full" />
          <div className="bg-muted-foreground/16 h-1.5 w-4/5 rounded-full" />
          <div className="flex-1" />
          <div className="flex justify-center">
            <div className="bg-primary h-3 w-2/3 rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-1">
        <div className="bg-muted-foreground/32 h-0.5 w-8 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
