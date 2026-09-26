import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuSides = () => (
  <div className="grid w-full max-w-sm grid-cols-2 gap-4">
    <ContextMenu positioning={{ placement: "top" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="pointer-fine:inline-block hidden">
          Right click (top)
        </span>
        <span className="pointer-coarse:inline-block hidden">
          Long press (top)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem value="back">Back</ContextMenuItem>
          <ContextMenuItem value="forward">Forward</ContextMenuItem>
          <ContextMenuItem value="reload">Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
    <ContextMenu positioning={{ placement: "right" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="pointer-fine:inline-block hidden">
          Right click (right)
        </span>
        <span className="pointer-coarse:inline-block hidden">
          Long press (right)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem value="back">Back</ContextMenuItem>
          <ContextMenuItem value="forward">Forward</ContextMenuItem>
          <ContextMenuItem value="reload">Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
    <ContextMenu positioning={{ placement: "bottom" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="pointer-fine:inline-block hidden">
          Right click (bottom)
        </span>
        <span className="pointer-coarse:inline-block hidden">
          Long press (bottom)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem value="back">Back</ContextMenuItem>
          <ContextMenuItem value="forward">Forward</ContextMenuItem>
          <ContextMenuItem value="reload">Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
    <ContextMenu positioning={{ placement: "left" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="pointer-fine:inline-block hidden">
          Right click (left)
        </span>
        <span className="pointer-coarse:inline-block hidden">
          Long press (left)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem value="back">Back</ContextMenuItem>
          <ContextMenuItem value="forward">Forward</ContextMenuItem>
          <ContextMenuItem value="reload">Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  </div>
);

export default ContextMenuSides;
