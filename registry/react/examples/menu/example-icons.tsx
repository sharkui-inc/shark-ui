import { CopyIcon, PencilIcon, ShareIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
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
        <MenuItem value="copy">
          <CopyIcon />
          Copy
        </MenuItem>
        <MenuItem value="share">
          <ShareIcon />
          Share
        </MenuItem>
      </MenuList>
    </MenuContent>
  </Menu>
);

export default Example;
