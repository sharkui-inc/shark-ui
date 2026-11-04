import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const PromptInputThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full flex-col gap-2 rounded-2xl border p-2 shadow-sm/4">
      <div className="bg-muted-foreground/24 h-8 rounded-md" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="bg-muted-foreground/24 size-5 rounded-full" />
          <div className="bg-muted-foreground/24 h-4 w-14 rounded-sm" />
        </div>
        <div className="bg-primary size-6 rounded-full" />
      </div>
    </div>
  </ThumbCard>
);
