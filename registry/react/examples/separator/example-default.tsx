import { Separator } from "@/registry/react/components/separator";

const SeparatorDemo = () => (
  <div className="flex max-w-sm flex-col gap-4 text-sm">
    <div className="flex flex-col gap-1">
      <p className="leading-none font-medium">Shark UI</p>
      <p className="text-muted-foreground">
        A set of primitive components for building UI.
      </p>
    </div>
    <Separator />
    <div className="flex h-5 items-center gap-4">
      <span>Components</span>
      <Separator orientation="vertical" />
      <span>Blocks</span>
      <Separator orientation="vertical" />
      <span>Themes</span>
    </div>
  </div>
);

export default SeparatorDemo;
