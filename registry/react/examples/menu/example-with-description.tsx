import { PencilIcon, SquarePlusIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-72">
      <MenuGroup heading="Actions">
        <MenuItem value="new-file">
          <SquarePlusIcon aria-hidden="true" />
          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span>New file</span>
            <span className="text-muted-foreground text-xs">
              Create a new file
            </span>
          </span>
          <MenuShortcut>⌘N</MenuShortcut>
        </MenuItem>
        <MenuItem value="edit-file">
          <PencilIcon aria-hidden="true" />
          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span>Edit file</span>
            <span className="text-muted-foreground text-xs">Make changes</span>
          </span>
          <MenuShortcut>⌘E</MenuShortcut>
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuGroup heading="Danger zone">
        <MenuItem value="delete-file" variant="destructive">
          <Trash2Icon aria-hidden="true" />
          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span>Delete file</span>
            <span className="text-muted-foreground text-xs">Move to trash</span>
          </span>
          <MenuShortcut>⌘D</MenuShortcut>
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default Example;
