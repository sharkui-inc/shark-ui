import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SwitchThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex h-5 w-10 items-center rounded-full bg-primary p-0.5">
      <div className="ms-auto h-4 w-5.5 rounded-full bg-background shadow-xs/5" />
    </div>
  </ThumbCard>
);
