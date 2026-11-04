import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ActionBarThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted rounded-lg border border-dashed shadow-sm/4">
      <div className="flex h-8 items-center gap-2 px-2">
        <div className="bg-muted-foreground/24 h-1.5 w-16 rounded-full" />
        <div className="ms-auto flex gap-1.5">
          <div className="bg-muted-foreground/16 size-5 rounded-lg" />
          <div className="bg-muted-foreground/16 size-5 rounded-lg" />
          <div className="bg-primary size-5 rounded-lg" />
        </div>
      </div>
    </div>
  </ThumbCard>
);
