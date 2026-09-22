"use client";

import {
  BotIcon,
  CalendarDaysIcon,
  FolderKanbanIcon,
  HouseIcon,
  InboxIcon,
  SearchIcon,
  Settings2Icon,
  WavesHorizontalIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/registry/react/components/sidebar";

const primaryNavigation = [
  { icon: SearchIcon, label: "Search" },
  { icon: BotIcon, label: "Ask AI" },
  { icon: HouseIcon, label: "Home" },
  { icon: InboxIcon, label: "Inbox" },
];

const workspaces = ["Design system", "Marketing site", "Mobile app"];

export function SidebarLeft() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="font-semibold"
              size="lg"
              tooltip="Onda"
            >
              <WavesHorizontalIcon aria-hidden />
              <span>Onda</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarMenu>
            {primaryNavigation.map((item, index) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  isActive={index === 2}
                  tooltip={item.label}
                >
                  <a href="#">
                    <item.icon aria-hidden />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {workspaces.map((workspace) => (
              <SidebarMenuItem key={workspace}>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <FolderKanbanIcon aria-hidden />
                    <span>{workspace}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Calendar">
              <a href="#">
                <CalendarDaysIcon aria-hidden />
                <span>Calendar</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <a href="#">
                <Settings2Icon aria-hidden />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
