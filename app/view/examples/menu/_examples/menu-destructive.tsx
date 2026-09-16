import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuDestructive = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Actions</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuGroup>
        <MenuItem value="edit">
          <PencilIcon />
          Edit
        </MenuItem>
        <MenuItem value="share">
          <ShareIcon />
          Share
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuGroup>
        <MenuItem value="delete" variant="destructive">
          <TrashIcon />
          Delete
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default MenuDestructive;
