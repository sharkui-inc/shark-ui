import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuIcons = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuList>
        <MenuItem value="profile">
          <UserIcon />
          Profile
        </MenuItem>
        <MenuItem value="billing">
          <CreditCardIcon />
          Billing
        </MenuItem>
        <MenuItem value="settings">
          <SettingsIcon />
          Settings
        </MenuItem>
        <MenuSeparator />
        <MenuItem value="logout" variant="destructive">
          <LogOutIcon />
          Log out
        </MenuItem>
      </MenuList>
    </MenuContent>
  </Menu>
);

export default MenuIcons;
