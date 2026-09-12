"use client";

import { ArrowUpRightIcon, AudioWaveformIcon } from "lucide-react";
import { useState } from "react";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
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
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { NAV_ITEMS, type NavigationItem, TRACKS } from "../_data/music";

export const MusicSidebar = () => {
  const [activeNavigation, setActiveNavigation] =
    useState<NavigationItem>("Home");

  return (
    <Sidebar className="absolute h-full" collapsible="icon">
      <SidebarHeader className="h-12 min-h-12 shrink-0 flex-row items-center justify-between border-b py-0 group-data-[collapsible=icon]:justify-center">
        <div className="flex h-full items-center gap-2 group-data-[collapsible=icon]:hidden">
          <IconTile aria-hidden="true" size="xs">
            <AudioWaveformIcon aria-hidden="true" />
          </IconTile>
          <p className="truncate font-semibold text-sm">Ondafy</p>
        </div>
        <SidebarTrigger
          aria-label="Collapse sidebar"
          className="group-data-[collapsible=icon]:hidden"
        />
        <div className="group/brand-toggle hidden size-6 group-data-[collapsible=icon]:grid">
          <IconTile
            aria-hidden="true"
            className="col-start-1 row-start-1 transition-opacity group-focus-within/brand-toggle:opacity-0 group-hover/brand-toggle:opacity-0"
            size="xs"
          >
            <AudioWaveformIcon aria-hidden="true" />
          </IconTile>
          <SidebarTrigger
            aria-label="Expand sidebar"
            className="col-start-1 row-start-1 size-6 opacity-0 transition-opacity group-focus-within/brand-toggle:opacity-100 group-hover/brand-toggle:opacity-100 [&_svg]:mx-0"
            size="icon-xs"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {(["Browse", "Collection"] as const).map((group) => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel>{group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_ITEMS.filter((item) => item.group === group).map(
                  ({ label, icon: Icon }) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton
                        isActive={activeNavigation === label}
                        onClick={() => setActiveNavigation(label)}
                        tooltip={label}
                      >
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <Item asChild className="hover:bg-muted" variant="muted">
          <button onClick={() => setActiveNavigation("Home")} type="button">
            <ItemMedia variant="image">
              <img
                alt=""
                height={44}
                src="/images/gradients/amber.svg"
                width={44}
              />
            </ItemMedia>
            <ItemContent>
              <ItemDescription>Fresh this week</ItemDescription>
              <ItemTitle>{TRACKS.length} new tracks for you</ItemTitle>
            </ItemContent>
            <ItemActions className="text-primary">
              <ArrowUpRightIcon aria-hidden="true" />
            </ItemActions>
          </button>
        </Item>
      </SidebarFooter>
    </Sidebar>
  );
};
