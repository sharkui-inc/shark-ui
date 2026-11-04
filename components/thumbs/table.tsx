import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const TableThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex flex-col gap-2 rounded-lg border p-3 shadow-sm/4">
      <div className="border-input flex items-center gap-2 border-b pb-2">
        <div className="bg-muted-foreground/24 size-2.5 shrink-0 rounded-lg" />
        <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
      </div>
      <div className="border-input flex items-center gap-2 border-b pb-2">
        <div className="bg-primary size-2.5 shrink-0 rounded-lg" />
        <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-muted-foreground/24 size-2.5 shrink-0 rounded-lg" />
        <div className="bg-muted-foreground/24 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
        <div className="bg-muted-foreground/16 h-2 w-full rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
