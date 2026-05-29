import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const Example = () => (
  <AspectRatio className="w-full max-w-48 rounded-xl border bg-muted sm:[--ratio:16/9] md:[--ratio:1/1]">
    <div className="flex size-full items-center justify-center">
      <span className="select-none text-muted-foreground text-xs">
        16:9 → 1:1
      </span>
    </div>
  </AspectRatio>
);

export default Example;
