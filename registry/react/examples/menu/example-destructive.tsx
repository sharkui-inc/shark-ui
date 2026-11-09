import { CopyIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="min-w-40">
      <MenuList>
        <MenuItem value="edit">
          <PencilIcon />
          Edit
        </MenuItem>
        <MenuItem value="duplicate">
          <CopyIcon />
          Duplicate
        </MenuItem>
        <MenuSeparator />
        <MenuItem value="delete" variant="destructive">
          <Trash2Icon />
          Delete
        </MenuItem>
      </MenuList>
    </MenuContent>
  </Menu>
);

export default Example;
