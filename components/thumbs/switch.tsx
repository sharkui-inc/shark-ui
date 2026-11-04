import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SwitchThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="bg-primary flex h-5 w-10 items-center rounded-full p-0.5">
      <div className="bg-background ms-auto h-4 w-5.5 rounded-full shadow-xs/4" />
    </div>
  </ThumbCard>
);
