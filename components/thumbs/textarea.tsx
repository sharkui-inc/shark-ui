import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TextareaThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted relative w-52 rounded-lg border shadow-sm/4">
      <div className="flex h-16 p-3">
        <div className="bg-muted-foreground/24 h-1.5 w-2/3 rounded-full" />
      </div>

      <div className="bg-muted-foreground/24 absolute end-1.5 bottom-1 h-2 w-px rotate-45" />
      <div className="bg-muted-foreground/24 absolute end-1 bottom-1 h-1 w-px rotate-45" />
    </div>
  </ThumbCard>
);
