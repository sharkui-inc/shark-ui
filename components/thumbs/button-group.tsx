import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ButtonGroupThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-32 overflow-hidden rounded-lg border shadow-sm/4">
      <div className="border-input bg-primary flex flex-1 items-center justify-center border-e p-3">
        <div className="bg-primary-foreground h-2 w-4 rounded-full" />
      </div>
      <div className="border-input flex flex-1 items-center justify-center border-e p-3">
        <div className="bg-muted-foreground/24 h-2 w-4 rounded-full" />
      </div>
      <div className="flex flex-1 items-center justify-center p-3">
        <div className="bg-muted-foreground/24 h-2 w-4 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
