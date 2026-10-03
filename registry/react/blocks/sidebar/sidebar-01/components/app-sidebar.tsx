"use client";

import { Input } from "@registry/react/components/input";
import {
  BookOpenIcon,
  BotIcon,
  Code2Icon,
  LifeBuoyIcon,
  Settings2Icon,
  ShapesIcon,
} from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";
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
  SidebarRail,
} from "@/registry/react/components/sidebar";

const navigation = [
  {
    items: [
      { icon: BookOpenIcon, label: "Introduction" },
      { icon: Code2Icon, label: "Installation" },
      { icon: ShapesIcon, label: "Components" },
    ],
    label: "Documentation",
  },
  {
    items: [
      { icon: BotIcon, label: "AI Components" },
      { icon: Settings2Icon, label: "Configuration" },
    ],
    label: "Build",
  },
];

export const AppSidebar = () => (
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="font-semibold" size="lg">
            <IconTile aria-hidden size="sm">
              S
            </IconTile>
            <span>Onda</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <Input
        aria-label="Search documentation"
        placeholder="Search"
        type="search"
      />
    </SidebarHeader>
    <SidebarContent>
      {navigation.map((section) => (
        <SidebarGroup key={section.label}>
          <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.label === "Introduction"}
                  >
                    <a href="#">
                      <item.icon aria-hidden />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href="#">
              <LifeBuoyIcon aria-hidden />
              <span>Support</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
);
