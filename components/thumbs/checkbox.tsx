import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CheckboxThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-40 flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="bg-muted-foreground/24 size-4 shrink-0 rounded-lg" />
        <div className="bg-muted-foreground/24 h-2 w-16 rounded-lg" />
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-primary flex size-4 shrink-0 items-center justify-center rounded-lg" />
        <div className="bg-muted-foreground/24 h-2 w-20 rounded-lg" />
      </div>
    </div>
  </ThumbCard>
);
