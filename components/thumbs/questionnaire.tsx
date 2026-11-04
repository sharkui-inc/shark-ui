import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const QuestionnaireThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full flex-col gap-2 rounded-xl border p-3 shadow-sm/4">
      <div className="bg-muted-foreground/32 h-1.5 w-8 rounded" />
      <div className="bg-muted-foreground/24 h-2.5 w-3/4 rounded" />
      <div className="border-primary flex items-center gap-2 rounded-md border p-2">
        <div className="bg-primary size-2.5 rounded-full" />
        <div className="bg-muted-foreground/24 h-1.5 w-2/3 rounded" />
      </div>
      <div className="flex items-center gap-2 rounded-md border p-2">
        <div className="border-muted-foreground/24 size-2.5 rounded-full border" />
        <div className="bg-muted-foreground/32 h-1.5 w-1/2 rounded" />
      </div>
      <div className="bg-primary ms-auto h-5 w-12 rounded" />
    </div>
  </ThumbCard>
);
