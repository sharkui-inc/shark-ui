import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const AvatarMenu = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button pill size="icon-lg" variant="ghost">
        <Avatar size="lg">
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Button>
    </MenuTrigger>
    <MenuContent className="min-w-40">
      <MenuList>
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="settings">Settings</MenuItem>
        <MenuSeparator />
        <MenuItem value="signout" variant="destructive">
          Sign out
        </MenuItem>
      </MenuList>
    </MenuContent>
  </Menu>
);

export default AvatarMenu;
