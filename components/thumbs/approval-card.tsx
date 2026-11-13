import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const ApprovalCardThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="border-input bg-muted flex w-full flex-col gap-2 rounded-xl border p-2 shadow-sm/4">
      <div className="bg-muted-foreground/32 h-3 w-2/3 rounded" />
      <div className="bg-muted-foreground/16 h-16 rounded-md" />
      <div className="flex justify-end gap-2">
        <div className="bg-muted-foreground/24 h-6 w-14 rounded-md" />
        <div className="bg-primary h-6 w-16 rounded-md" />
      </div>
    </div>
  </ThumbCard>
);
