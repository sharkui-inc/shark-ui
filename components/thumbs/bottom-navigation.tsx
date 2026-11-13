import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const BottomNavigationThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full max-w-48 flex-col gap-4">
      <div className="border-input bg-muted flex min-h-8 items-center justify-around rounded-lg border border-dashed p-2 shadow-sm/4">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-primary flex size-4 items-center justify-center rounded-full" />
          <div className="bg-primary h-1 w-6 rounded-full" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-muted-foreground/24 size-4 rounded-full" />
          <div className="bg-muted-foreground/24 h-1 w-6 rounded-full" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="bg-muted-foreground/24 size-4 rounded-full" />
          <div className="bg-muted-foreground/24 h-1 w-6 rounded-full" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
