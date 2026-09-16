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

const MenuShortcuts = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuGroup heading="My Account">
        <MenuItem value="profile">
          Profile
          <MenuShortcut>⇧⌘P</MenuShortcut>
        </MenuItem>
        <MenuItem value="billing">
          Billing
          <MenuShortcut>⌘B</MenuShortcut>
        </MenuItem>
        <MenuItem value="settings">
          Settings
          <MenuShortcut>⌘S</MenuShortcut>
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuItem value="logout">
        Log out
        <MenuShortcut>⇧⌘Q</MenuShortcut>
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default MenuShortcuts;
