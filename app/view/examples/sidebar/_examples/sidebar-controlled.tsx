"use client";

import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";

const projects = [
  { icon: FrameIcon, name: "Design Engineering", url: "#" },
  { icon: PieChartIcon, name: "Sales & Marketing", url: "#" },
  { icon: MapIcon, name: "Travel", url: "#" },
  { icon: LifeBuoyIcon, name: "Support", url: "#" },
  { icon: SendIcon, name: "Feedback", url: "#" },
];

const SidebarControlled = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider
      onOpenChange={({ open: nextOpen }) => setOpen(nextOpen)}
      open={open}
    >
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                      <a href={project.url}>
                        <project.icon aria-hidden="true" />
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <Button
            onClick={() => setOpen((prev) => !prev)}
            size="sm"
            variant="ghost"
          >
            {open ? (
              <PanelLeftCloseIcon data-icon="inline-start" />
            ) : (
              <PanelLeftOpenIcon data-icon="inline-start" />
            )}
            <span>{open ? "Close" : "Open"} Sidebar</span>
          </Button>
        </header>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SidebarControlled;
