import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const FieldThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex flex-col gap-2">
      <div className="bg-primary h-2 w-1/4 rounded-full" />
      <div className="border-input bg-muted w-full rounded-lg border p-3 shadow-sm/4">
        <div className="bg-muted-foreground/24 h-2 w-2/3 rounded-full" />
      </div>
      <div className="bg-muted-foreground/16 h-1.5 w-2/4 rounded-full" />
    </div>
  </ThumbCard>
);
