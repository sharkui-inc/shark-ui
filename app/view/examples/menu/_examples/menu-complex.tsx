"use client";

import {
  BellIcon,
  CreditCardIcon,
  DownloadIcon,
  EyeIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderSearchIcon,
  HelpCircleIcon,
  KeyboardIcon,
  LanguagesIcon,
  LayoutIcon,
  LogOutIcon,
  MailIcon,
  MonitorIcon,
  MoonIcon,
  MoreHorizontalIcon,
  PaletteIcon,
  SaveIcon,
  SettingsIcon,
  ShieldIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuComplex = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });
  const [theme, setTheme] = useState("light");

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Complex Menu</Button>
      </MenuTrigger>
      <MenuContent className="w-44">
        <MenuGroup heading="File">
          <MenuItem value="new-file">
            <FileIcon />
            New File
            <MenuShortcut>⌘N</MenuShortcut>
          </MenuItem>
          <MenuItem value="new-folder">
            <FolderIcon />
            New Folder
            <MenuShortcut>⇧⌘N</MenuShortcut>
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger>
              <FolderOpenIcon />
              Open Recent
            </MenuSubTrigger>
            <MenuSubContent>
              <MenuGroup heading="Recent Projects">
                <MenuItem value="project-alpha">
                  <FileCodeIcon />
                  Project Alpha
                </MenuItem>
                <MenuItem value="project-beta">
                  <FileCodeIcon />
                  Project Beta
                </MenuItem>
                <MenuSub>
                  <MenuSubTrigger>
                    <MoreHorizontalIcon />
                    More Projects
                  </MenuSubTrigger>
                  <MenuSubContent>
                    <MenuItem value="project-gamma">
                      <FileCodeIcon />
                      Project Gamma
                    </MenuItem>
                    <MenuItem value="project-delta">
                      <FileCodeIcon />
                      Project Delta
                    </MenuItem>
                  </MenuSubContent>
                </MenuSub>
              </MenuGroup>
              <MenuSeparator />
              <MenuItem value="browse">
                <FolderSearchIcon />
                Browse...
              </MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator />
          <MenuItem value="save">
            <SaveIcon />
            Save
            <MenuShortcut>⌘S</MenuShortcut>
          </MenuItem>
          <MenuItem value="export">
            <DownloadIcon />
            Export
            <MenuShortcut>⇧⌘E</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup heading="View">
          <MenuCheckboxItem
            checked={notifications.email}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, email: checked })
            }
            value="show-sidebar"
          >
            <EyeIcon />
            Show Sidebar
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={notifications.sms}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, sms: checked })
            }
            value="show-status-bar"
          >
            <LayoutIcon />
            Show Status Bar
          </MenuCheckboxItem>
          <MenuSub>
            <MenuSubTrigger>
              <PaletteIcon />
              Theme
            </MenuSubTrigger>
            <MenuSubContent>
              <MenuGroup heading="Appearance">
                <MenuRadioGroup
                  onValueChange={({ value }) => setTheme(value)}
                  value={theme}
                >
                  <MenuRadioItem value="light">
                    <SunIcon />
                    Light
                  </MenuRadioItem>
                  <MenuRadioItem value="dark">
                    <MoonIcon />
                    Dark
                  </MenuRadioItem>
                  <MenuRadioItem value="system">
                    <MonitorIcon />
                    System
                  </MenuRadioItem>
                </MenuRadioGroup>
              </MenuGroup>
            </MenuSubContent>
          </MenuSub>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup heading="Account">
          <MenuItem value="profile">
            <UserIcon />
            Profile
            <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem value="billing">
            <CreditCardIcon />
            Billing
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger>
              <SettingsIcon />
              Settings
            </MenuSubTrigger>
            <MenuSubContent>
              <MenuGroup heading="Preferences">
                <MenuItem value="keyboard-shortcuts">
                  <KeyboardIcon />
                  Keyboard Shortcuts
                </MenuItem>
                <MenuItem value="language">
                  <LanguagesIcon />
                  Language
                </MenuItem>
                <MenuSub>
                  <MenuSubTrigger>
                    <BellIcon />
                    Notifications
                  </MenuSubTrigger>
                  <MenuSubContent>
                    <MenuGroup heading="Notification Types">
                      <MenuCheckboxItem
                        checked={notifications.push}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, push: checked })
                        }
                        value="push"
                      >
                        <BellIcon />
                        Push Notifications
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        checked={notifications.email}
                        onCheckedChange={(checked) =>
                          setNotifications({ ...notifications, email: checked })
                        }
                        value="email"
                      >
                        <MailIcon />
                        Email Notifications
                      </MenuCheckboxItem>
                    </MenuGroup>
                  </MenuSubContent>
                </MenuSub>
              </MenuGroup>
              <MenuSeparator />
              <MenuItem value="privacy">
                <ShieldIcon />
                Privacy & Security
              </MenuItem>
            </MenuSubContent>
          </MenuSub>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem value="help">
            <HelpCircleIcon />
            Help & Support
          </MenuItem>
          <MenuItem value="documentation">
            <FileTextIcon />
            Documentation
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem value="sign-out" variant="destructive">
          <LogOutIcon />
          Sign Out
          <MenuShortcut>⇧⌘Q</MenuShortcut>
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};

export default MenuComplex;
