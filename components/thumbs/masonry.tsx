import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const MasonryThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted grid w-48 grid-cols-3 items-start gap-2 rounded-lg border p-2 shadow-sm/4">
      <div className="flex flex-col gap-2">
        <div className="bg-muted-foreground/24 h-12 rounded-md" />
        <div className="bg-muted-foreground/16 h-7 rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-primary h-8 rounded-md" />
        <div className="bg-muted-foreground/24 h-14 rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-muted-foreground/16 h-16 rounded-md" />
        <div className="bg-muted-foreground/24 h-6 rounded-md" />
      </div>
    </div>
  </ThumbCard>
);
