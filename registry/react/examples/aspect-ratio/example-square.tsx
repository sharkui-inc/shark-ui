import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const Example = () => (
  <AspectRatio className="bg-muted w-full max-w-48 rounded-xl border [--ratio:1/1]">
    <div className="flex size-full items-center justify-center">
      <span className="text-muted-foreground text-xs select-none">1:1</span>
    </div>
  </AspectRatio>
);

export default Example;
