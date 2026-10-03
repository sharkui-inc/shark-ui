import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuSubmenu = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
      <span className="pointer-fine:inline-block hidden">Right click here</span>
      <span className="pointer-coarse:inline-block hidden">
        Long press here
      </span>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuItem value="copy">
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem value="cut">
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuGroup>
      <ContextMenuSub>
        <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuGroup>
            <ContextMenuItem value="save-page">Save Page...</ContextMenuItem>
            <ContextMenuItem value="create-shortcut">
              Create Shortcut...
            </ContextMenuItem>
            <ContextMenuItem value="name-window">
              Name Window...
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem value="developer-tools">
              Developer Tools
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem value="delete" variant="destructive">
              Delete
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
  </ContextMenu>
);

export default ContextMenuSubmenu;
