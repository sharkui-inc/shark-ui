import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SuggestionThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full flex-wrap justify-center gap-2">
      <div className="bg-primary flex h-7 w-24 items-center justify-center rounded-full shadow-sm/4">
        <div className="bg-primary-foreground h-1.5 w-1/2 rounded-full" />
      </div>
      <div className="border-input bg-muted flex h-7 w-28 items-center justify-center rounded-full border shadow-sm/4">
        <div className="bg-muted-foreground/32 h-1.5 w-3/5 rounded-full" />
      </div>
      <div className="border-input bg-muted flex h-7 w-20 items-center justify-center rounded-full border shadow-sm/4">
        <div className="bg-muted-foreground/32 h-1.5 w-1/2 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
