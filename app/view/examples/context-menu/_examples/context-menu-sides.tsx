import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuList,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuSides = () => (
  <div className="grid w-full max-w-sm grid-cols-2 gap-4">
    <ContextMenu positioning={{ placement: "top" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click (top)
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press (top)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuList>
          <ContextMenuGroup>
            <ContextMenuItem value="back">Back</ContextMenuItem>
            <ContextMenuItem value="forward">Forward</ContextMenuItem>
            <ContextMenuItem value="reload">Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuList>
      </ContextMenuContent>
    </ContextMenu>
    <ContextMenu positioning={{ placement: "right" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click (right)
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press (right)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuList>
          <ContextMenuGroup>
            <ContextMenuItem value="back">Back</ContextMenuItem>
            <ContextMenuItem value="forward">Forward</ContextMenuItem>
            <ContextMenuItem value="reload">Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuList>
      </ContextMenuContent>
    </ContextMenu>
    <ContextMenu positioning={{ placement: "bottom" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click (bottom)
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press (bottom)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuList>
          <ContextMenuGroup>
            <ContextMenuItem value="back">Back</ContextMenuItem>
            <ContextMenuItem value="forward">Forward</ContextMenuItem>
            <ContextMenuItem value="reload">Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuList>
      </ContextMenuContent>
    </ContextMenu>
    <ContextMenu positioning={{ placement: "left" }}>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click (left)
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press (left)
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuList>
          <ContextMenuGroup>
            <ContextMenuItem value="back">Back</ContextMenuItem>
            <ContextMenuItem value="forward">Forward</ContextMenuItem>
            <ContextMenuItem value="reload">Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuList>
      </ContextMenuContent>
    </ContextMenu>
  </div>
);

export default ContextMenuSides;
