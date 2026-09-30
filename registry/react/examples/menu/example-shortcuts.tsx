import { CopyIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
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
    <MenuContent className="min-w-40">
      <MenuItem value="profile">
        <UserIcon />
        Profile
        <MenuShortcut className="hidden sm:inline-flex">⌘P</MenuShortcut>
      </MenuItem>
      <MenuItem value="settings">
        <SettingsIcon />
        Settings
        <MenuShortcut className="hidden sm:inline-flex">⌘S</MenuShortcut>
      </MenuItem>
      <MenuItem value="copy">
        <CopyIcon />
        Copy
        <MenuShortcut className="hidden sm:inline-flex">⌘C</MenuShortcut>
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="logout">
        <LogOutIcon />
        Log out
        <MenuShortcut className="hidden sm:inline-flex">⌘Q</MenuShortcut>
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
