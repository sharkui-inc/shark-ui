import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SuggestionThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-wrap justify-center gap-2">
      <div className="flex h-7 w-24 items-center justify-center rounded-full bg-primary shadow-md/5">
        <div className="h-1.5 w-1/2 rounded-full bg-primary-foreground" />
      </div>
      <div className="flex h-7 w-28 items-center justify-center rounded-full border border-input bg-muted shadow-md/5">
        <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/24" />
      </div>
      <div className="flex h-7 w-20 items-center justify-center rounded-full border border-input bg-muted shadow-md/5">
        <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/24" />
      </div>
    </div>
  </ThumbCard>
);
