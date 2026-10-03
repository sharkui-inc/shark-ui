import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuBasic = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
      <span className="pointer-fine:inline-block hidden">Right click here</span>
      <span className="pointer-coarse:inline-block hidden">
        Long press here
      </span>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuItem value="back">Back</ContextMenuItem>
        <ContextMenuItem disabled value="forward">
          Forward
        </ContextMenuItem>
        <ContextMenuItem value="reload">Reload</ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
);

export default ContextMenuBasic;
