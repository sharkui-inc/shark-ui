import { Separator } from "@/registry/react/components/separator";

const SeparatorDemo = () => (
  <div className="flex max-w-sm flex-col gap-4 text-sm">
    <div className="flex flex-col gap-1.5">
      <div className="leading-none font-medium">Onda</div>
      <div className="text-muted-foreground">
        A set of primitive components for building UI.
      </div>
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
