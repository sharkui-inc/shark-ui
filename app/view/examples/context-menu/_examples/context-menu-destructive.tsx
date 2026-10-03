import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuDestructive = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
      <span className="pointer-fine:inline-block hidden">Right click here</span>
      <span className="pointer-coarse:inline-block hidden">
        Long press here
      </span>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuItem value="edit">
          <PencilIcon />
          Edit
        </ContextMenuItem>
        <ContextMenuItem value="share">
          <ShareIcon />
          Share
        </ContextMenuItem>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuGroup>
        <ContextMenuItem value="delete" variant="destructive">
          <TrashIcon />
          Delete
        </ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
);

export default ContextMenuDestructive;
