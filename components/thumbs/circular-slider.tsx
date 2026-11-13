import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CircularSliderThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="relative flex size-20 flex-col items-center gap-2 rounded-full shadow-sm/4">
        <div className="border-input absolute inset-0 rounded-full border-8" />
        <div
          className="border-primary absolute inset-0 rounded-full border-8"
          style={{
            clipPath:
              "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%)",
          }}
        />
        <div className="bg-primary ring-muted absolute inset-s-0 top-12 size-4 rounded-full ring-4" />
      </div>
    </div>
  </ThumbCard>
);
