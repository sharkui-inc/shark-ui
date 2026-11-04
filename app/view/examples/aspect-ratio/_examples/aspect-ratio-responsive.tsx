import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const AspectRatioResponsive = () => (
  <AspectRatio className="bg-muted w-full max-w-48 rounded-xl border sm:[--ratio:16/9] md:[--ratio:1/1]">
    <div className="flex size-full items-center justify-center">
      <span className="text-muted-foreground text-xs select-none">
        16:9 → 1:1
      </span>
    </div>
  </AspectRatio>
);

export default AspectRatioResponsive;
