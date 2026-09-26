"use client";

import { FrameIcon, MapIcon, PieChartIcon, PlusIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { Toaster, toast } from "@/registry/react/components/toast";

const projects = [
  { icon: FrameIcon, name: "Design Engineering", url: "#" },
  { icon: PieChartIcon, name: "Sales & Marketing", url: "#" },
  { icon: MapIcon, name: "Travel", url: "#" },
];

const SidebarGroupActionDemo = () => (
  <SidebarProvider>
    <Toaster />
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction
            onClick={() => {
              toast.create({ title: "You clicked the group action!" });
            }}
            title="Add Project"
          >
            <PlusIcon aria-hidden />
            <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild>
                    <a href={project.url}>
                      <project.icon aria-hidden />
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
  </SidebarProvider>
);

export default SidebarGroupActionDemo;
