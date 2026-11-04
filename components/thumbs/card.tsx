import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CardThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-40 flex-col gap-3 rounded-lg border p-3 shadow-sm/4">
      <div className="flex flex-col justify-start gap-1">
        <div className="bg-muted-foreground/24 h-2 w-2/5 rounded-full" />
        <div className="bg-muted-foreground/24 h-2 w-3/5 rounded-full" />
      </div>
      <div className="flex flex-col justify-start gap-1">
        <div className="bg-muted-foreground/16 h-2 w-full rounded-lg" />
        <div className="bg-muted-foreground/16 h-2 w-2/3 rounded-lg" />
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <div className="bg-primary h-4 w-12 rounded-lg" />
      </div>
    </div>
  </ThumbCard>
);
