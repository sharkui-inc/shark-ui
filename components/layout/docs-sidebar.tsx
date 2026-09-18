"use client";

import { Toc as ArkToc } from "@ark-ui/react/toc";
import { Status } from "@registry/react/components/status";
import { usePathname } from "next/navigation";
import type React from "react";
import { NavLink } from "@/components/nav-link";
import { DOCS_NEW_ITEMS, DOCS_UPDATED_ITEMS } from "@/config/docs-nav";
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

export const DocsSidebar = (props: DocsSidebarProps) => {
  const { tree, className, ...rest } = props;

  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent **:data-[slot=scroll-area-viewport]:scroll-smooth motion-reduce:**:data-[slot=scroll-area-viewport]:scroll-auto lg:flex"
      collapsible="none"
      {...rest}
    >
      <SidebarContent className="px-4 py-2" scrollFade>
        <div className="h-(--top-spacing) shrink-0" />
        {tree.children.map((folder) => {
          const pages =
            folder.type === "folder"
              ? folder.children.filter((page) => page.type === "page")
              : [];
          const items = pages.map((page) => ({
            depth: 1,
            value: page.url,
          }));

          return (
            <ArkToc.Root
              activeIds={[pathname]}
              asChild
              items={items}
              key={folder.$id}
              scrollBehavior="auto"
            >
              <SidebarGroup className="gap-1">
                <ArkToc.Title asChild>
                  <SidebarGroupLabel className="h-7 px-0 text-sidebar-accent-foreground">
                    {folder.name}
                  </SidebarGroupLabel>
                </ArkToc.Title>
                <SidebarGroupContent>
                  <ArkToc.List asChild>
                    <SidebarMenu>
                      {pages.map((page) => {
                        const item = { depth: 1, value: page.url };

                        return (
                          <ArkToc.Item asChild item={item} key={page.url}>
                            <SidebarMenuItem className="scroll-my-10">
                              <SidebarMenuButton
                                asChild
                                className="ps-3.5 text-muted-foreground hover:bg-muted [.active]:bg-muted [.active]:text-foreground"
                                isActive={page.url === pathname}
                              >
                                <NavLink href={page.url}>
                                  {page.name}

                                  {DOCS_UPDATED_ITEMS.includes(page.url) && (
                                    <>
                                      <Status className="ms-auto" size="sm" />
                                      <span className="sr-only">Updated</span>
                                    </>
                                  )}

                                  {DOCS_NEW_ITEMS.includes(page.url) && (
                                    <>
                                      <Status
                                        className="ms-auto"
                                        size="sm"
                                        variant="info"
                                      />
                                      <span className="sr-only">New</span>
                                    </>
                                  )}
                                </NavLink>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </ArkToc.Item>
                        );
                      })}
                    </SidebarMenu>
                  </ArkToc.List>
                </SidebarGroupContent>
              </SidebarGroup>
            </ArkToc.Root>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};
