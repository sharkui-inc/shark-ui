import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const KbdThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex justify-center gap-1.5">
      <div className="flex size-12 items-center justify-center rounded-lg border border-input bg-primary shadow-sm/4">
        <span
          aria-hidden
          className="font-medium text-base text-primary-foreground"
        >
          ⌘
        </span>
      </div>
      <div className="flex size-12 items-center justify-center rounded-lg border border-input bg-muted shadow-sm/4">
        <span
          aria-hidden
          className="font-medium text-base text-muted-foreground"
        >
          K
        </span>
      </div>
    </div>
  </ThumbCard>
);
