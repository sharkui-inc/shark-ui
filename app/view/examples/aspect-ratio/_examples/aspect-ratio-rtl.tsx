import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const AspectRatioRtl = () => (
  <AspectRatio className="bg-muted w-full max-w-56 rounded-xl border [--ratio:16/9]">
    <div className="flex size-full items-center justify-center">
      <span className="text-muted-foreground text-xs select-none">
        منظر طبيعي جميل
      </span>
    </div>
  </AspectRatio>
);

export default AspectRatioRtl;
