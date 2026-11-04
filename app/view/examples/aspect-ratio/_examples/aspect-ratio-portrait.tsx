import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const AspectRatioPortrait = () => (
  <AspectRatio className="bg-muted w-full max-w-48 rounded-xl border [--ratio:9/16]">
    <div className="flex size-full items-center justify-center">
      <span className="text-muted-foreground text-xs select-none">9:16</span>
    </div>
  </AspectRatio>
);

export default AspectRatioPortrait;
