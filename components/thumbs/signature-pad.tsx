import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SignaturePadThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted relative flex h-24 w-full flex-col rounded-lg border shadow-sm/4">
      <div className="border-input bg-muted-foreground/24 absolute inset-e-2 top-2 flex size-4 items-center justify-center rounded-xl border" />

      <div className="border-input border-muted-foreground/24 absolute inset-x-4 bottom-4 border-b-2" />
    </div>
  </ThumbCard>
);
