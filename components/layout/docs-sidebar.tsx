"use client";

import { Badge } from "@registry/react/components/badge";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/nav-link";
import type { source } from "@/lib/fumadocs";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/react/components/sidebar";

interface DocsSidebarProps extends React.ComponentProps<typeof Sidebar> {
  /**
   * The tree of pages to display in the sidebar
   *
   * @default source.pageTree
   */
  tree: typeof source.pageTree;
}

const NEW_ITEMS = [
  "/docs/skills",
  "/docs/changelog",
  "/docs/hooks/use-is-mobile",
];

const UPDATED_ITEMS = [
  "/docs/forms",
  "/docs/components/badge",
  "/docs/components/calendar",
  "/docs/components/card",
  "/docs/components/drawer",
  "/docs/components/table",
  "/docs/components/dialog",
  "/docs/components/field",
  "/docs/components/action-bar",
  "/docs/components/context-menu",
  "/docs/components/number-input",
  "/docs/components/timer",
  "/docs/components/marquee",
  "/docs/utilities/json-tree-view",
];

export const DocsSidebar = (props: DocsSidebarProps) => {
  const { tree, className, ...rest } = props;

  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      collapsible="none"
      {...rest}
    >
      <SidebarContent className="px-4 py-2" scrollFade>
        <div className="h-(--top-spacing) shrink-0" />
        {tree.children.map((item) => (
          <SidebarGroup className="gap-1" key={item.$id}>
            <SidebarGroupLabel className="h-7 px-0 text-sidebar-accent-foreground">
              {item.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {item.type === "folder" && (
                <SidebarMenu className="gap-1">
                  {item.children.map(
                    (item) =>
                      item.type === "page" && (
                        <SidebarMenuItem key={item.url}>
                          <SidebarMenuButton
                            asChild
                            className="ps-3.5 text-muted-foreground hover:bg-muted [.active]:bg-muted [.active]:text-foreground"
                            isActive={item.url === pathname}
                          >
                            <NavLink href={item.url}>
                              {item.name}

                              {UPDATED_ITEMS.includes(item.url) && (
                                <Badge variant="outline">Updated</Badge>
                              )}

                              {NEW_ITEMS.includes(item.url) && (
                                <Badge variant="info">New</Badge>
                              )}
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                  )}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
