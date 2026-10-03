import { Separator } from "@/registry/react/components/separator";

const SeparatorVertical = () => (
  <div className="flex h-5 items-center gap-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
);

export default SeparatorVertical;
