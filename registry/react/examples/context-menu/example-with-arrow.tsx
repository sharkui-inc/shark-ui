import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
      <span className="pointer-fine:inline-block hidden">Right click here</span>
      <span className="pointer-coarse:inline-block hidden">
        Long press here
      </span>
    </ContextMenuTrigger>
    <ContextMenuContent className="w-40" showArrow>
      <ContextMenuItem value="edit">Edit</ContextMenuItem>
      <ContextMenuItem value="copy">Copy</ContextMenuItem>
      <ContextMenuItem value="share">Share</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
