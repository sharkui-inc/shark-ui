"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/registry/react/components/sidebar";

const tableOfContents = [
  { items: ["Installation", "Project structure"], label: "Getting started" },
  {
    items: ["Routing", "Data fetching", "Rendering", "Caching", "Styling"],
    label: "Build your application",
  },
  {
    items: ["Components", "File conventions", "Functions"],
    label: "API reference",
  },
  { items: ["Accessibility", "Fast refresh"], label: "Architecture" },
];

export function AppSidebar() {
  return (
    <Sidebar placement="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Table of contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tableOfContents.map((section) => (
                <SidebarMenuItem key={section.label}>
                  <SidebarMenuButton asChild>
                    <a className="font-medium" href="#">
                      {section.label}
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {section.items.map((item) => (
                      <SidebarMenuSubItem key={item}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={item === "Data fetching"}
                        >
                          <a href="#">{item}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
