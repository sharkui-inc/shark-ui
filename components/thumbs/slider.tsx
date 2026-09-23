import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const SliderThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="relative flex w-56 items-center">
      <div className="h-2 w-full overflow-hidden rounded-full bg-input/64">
        <div className="h-full w-1/3 bg-primary" />
      </div>
      <div className="absolute inset-s-1/3 h-4.5 w-[calc(--spacing(4.5)*1.375)] -translate-x-1/2 rounded-full border border-input bg-white shadow-xs/4 rtl:translate-x-1/2" />
    </div>
  </ThumbCard>
);
