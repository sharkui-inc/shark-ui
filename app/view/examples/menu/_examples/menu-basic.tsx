import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuBasic = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuGroup heading="My Account">
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="billing">Billing</MenuItem>
        <MenuItem value="settings">Settings</MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuItem value="github">GitHub</MenuItem>
      <MenuItem value="support">Support</MenuItem>
      <MenuItem disabled value="api">
        API
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default MenuBasic;
