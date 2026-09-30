"use client";

import {
  FolderIcon,
  HomeIcon,
  InboxIcon,
  type LucideIcon,
  PanelLeftIcon,
  WavesHorizontalIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/registry/react/components/sidebar";
import { Skeleton } from "@/registry/react/components/skeleton";

const SidebarState = () => {
  const { state, toggleSidebar } = useSidebar();

  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Button
          aria-label="Toggle sidebar"
          aria-pressed={state === "expanded"}
          onClick={toggleSidebar}
          size="icon-sm"
          variant="ghost"
        >
          <PanelLeftIcon />
        </Button>
        <div className="grid flex-1 grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-3">
          <Skeleton />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-16" />
            <Skeleton className="flex-1" />
          </div>
        </div>
      </div>
    </SidebarInset>
  );
};

const Example = () => (
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconTile aria-hidden size="lg">
                <WavesHorizontalIcon />
              </IconTile>
              <span>Onda</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.label}>
                <SidebarMenuButton isActive={link.active}>
                  <link.icon aria-hidden="true" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarState />
  </SidebarProvider>
);

const links: { active?: boolean; icon: LucideIcon; label: string }[] = [
  { active: true, icon: HomeIcon, label: "Overview" },
  { icon: InboxIcon, label: "Inbox" },
  { icon: FolderIcon, label: "Projects" },
];

export default Example;
