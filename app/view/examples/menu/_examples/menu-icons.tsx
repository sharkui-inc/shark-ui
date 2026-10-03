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
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuIcons = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent>
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
    </MenuContent>
  </Menu>
);

export default MenuIcons;
