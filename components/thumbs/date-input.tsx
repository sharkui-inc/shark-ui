import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const DateInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex w-full max-w-44 items-center gap-0.5 rounded-lg border border-input bg-muted px-3 py-2 shadow-md/5">
      {["mm", "/", "dd", "/", "yyyy"].map((part) =>
        part === "/" ? (
          <span className="text-[10px] text-muted-foreground/48" key={part}>
            {part}
          </span>
        ) : (
          <div
            className="flex h-4 min-w-5 items-center justify-center rounded-sm bg-muted-foreground/12"
            key={part}
          >
            <div className="h-1.5 w-3 rounded-full bg-muted-foreground/20" />
          </div>
        )
      )}
    </div>
  </ThumbCard>
);
