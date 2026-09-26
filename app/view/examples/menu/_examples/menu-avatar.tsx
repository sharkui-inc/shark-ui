import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuAvatar = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button className="rounded-full" size="icon-md" variant="ghost">
        <Avatar>
          <AvatarImage alt="shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
      </Button>
    </MenuTrigger>
    <MenuContent>
      <MenuGroup>
        <MenuItem value="account">
          <BadgeCheckIcon />
          Account
        </MenuItem>
        <MenuItem value="billing">
          <CreditCardIcon />
          Billing
        </MenuItem>
        <MenuItem value="notifications">
          <BellIcon />
          Notifications
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuItem value="sign-out">
        <LogOutIcon />
        Sign Out
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default MenuAvatar;
