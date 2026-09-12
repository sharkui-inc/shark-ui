"use client";

import {
  CircleHelpIcon,
  KeyboardIcon,
  LogOutIcon,
  SearchIcon,
  SettingsIcon,
  UserRoundIcon,
  WavesHorizontalIcon,
} from "lucide-react";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/react/components/sidebar";
import { dashboardNavigation, owner } from "../_data/dashboard";
import { getInitials } from "../_utils/get-initials";
import { DashboardSettings } from "./dashboard-settings";

export const DashboardSidebar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <Sidebar className="absolute h-full" collapsible="offcanvas">
        <SidebarHeader className="h-14 min-h-14 shrink-0 flex-row items-center justify-between border-b py-0">
          <div className="flex h-full items-center gap-2">
            <IconTile aria-hidden="true" size="xs">
              <WavesHorizontalIcon aria-hidden="true" />
            </IconTile>
            <p className="truncate font-semibold text-sm">Onda</p>
          </div>

          <Button size="icon-xs" variant="ghost">
            <SearchIcon aria-hidden="true" />
          </Button>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {dashboardNavigation.map(({ icon: Icon, label }) => (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton isActive={label === "Dashboard"}>
                      <Icon aria-hidden="true" />
                      <span>{label}</span>
                      {label === "Customers" ? (
                        <Badge
                          className="ms-auto"
                          size="sm"
                          variant="secondary"
                        >
                          New
                        </Badge>
                      ) : null}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t">
          <SidebarMenu>
            <SidebarMenuItem>
              <Menu>
                <MenuTrigger asChild>
                  <SidebarMenuButton size="lg">
                    <Avatar size="sm">
                      <AvatarImage alt={owner.name} src={owner.avatar} />
                      <AvatarFallback>{getInitials(owner.name)}</AvatarFallback>
                    </Avatar>
                    <span className="truncate font-medium">{owner.name}</span>
                  </SidebarMenuButton>
                </MenuTrigger>
                <MenuContent className="w-(--reference-width)">
                  <MenuItem value="profile">
                    <UserRoundIcon aria-hidden="true" />
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => setSettingsOpen(true)}
                    value="settings"
                  >
                    <SettingsIcon aria-hidden="true" />
                    Settings
                  </MenuItem>
                  <MenuItem value="keyboard-shortcuts">
                    <KeyboardIcon aria-hidden="true" />
                    Keyboard shortcuts
                    <MenuShortcut>⌘/</MenuShortcut>
                  </MenuItem>
                  <MenuItem value="help-center">
                    <CircleHelpIcon aria-hidden="true" />
                    Help center
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem value="sign-out" variant="destructive">
                    <LogOutIcon aria-hidden="true" />
                    Sign out
                  </MenuItem>
                </MenuContent>
              </Menu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <DashboardSettings onOpenChange={setSettingsOpen} open={settingsOpen} />
    </>
  );
};
