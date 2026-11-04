import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DialogThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col gap-2 rounded-lg border border-dashed p-3 shadow-sm/4">
      <div className="bg-muted-foreground/24 h-2.5 w-full rounded-full" />
      <div className="bg-muted-foreground/16 h-2 w-3/4 rounded-full" />
      <div className="mt-2 flex justify-end gap-2">
        <div className="bg-muted-foreground/24 h-4 w-12 rounded-md" />
        <div className="bg-primary h-4 w-12 rounded-md" />
      </div>
    </div>
  </ThumbCard>
);
