import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const KbdThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex justify-center gap-1.5">
      <div className="border-input bg-primary flex size-12 items-center justify-center rounded-lg border shadow-sm/4">
        <span
          aria-hidden="true"
          className="text-primary-foreground text-base font-medium"
        >
          ⌘
        </span>
      </div>
      <div className="border-input bg-muted flex size-12 items-center justify-center rounded-lg border shadow-sm/4">
        <span
          aria-hidden="true"
          className="text-muted-foreground text-base font-medium"
        >
          K
        </span>
      </div>
    </div>
  </ThumbCard>
);
