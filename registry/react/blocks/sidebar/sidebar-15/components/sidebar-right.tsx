import { CalendarPlusIcon, ChevronRightIcon, PlusIcon } from "lucide-react";
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
  SidebarSeparator,
} from "@/registry/react/components/sidebar";

const calendars = [
  { events: 3, name: "Product" },
  { events: 1, name: "Marketing" },
  { events: 2, name: "Personal" },
];

export function SidebarRight() {
  return (
    <Sidebar
      className="hidden h-svh shrink-0 border-s lg:flex"
      collapsible="none"
      placement="right"
    >
      <SidebarHeader className="border-sidebar-border border-b">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <CalendarPlusIcon aria-hidden="true" className="size-4" />
          <div className="min-w-0">
            <p className="truncate font-medium text-sm">September 2026</p>
            <p className="truncate text-sidebar-foreground/65 text-xs">
              3 events today
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Today</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {calendars.map((calendar) => (
                <SidebarMenuItem key={calendar.name}>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <span className="flex-1">{calendar.name}</span>
                      <span className="text-sidebar-foreground/65 text-xs">
                        {calendar.events}
                      </span>
                      <ChevronRightIcon aria-hidden="true" className="size-4" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Upcoming</SidebarGroupLabel>
          <SidebarGroupContent>
            <p className="px-2 text-sidebar-foreground/65 text-sm">
              Design review at 10:30 AM
            </p>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <PlusIcon aria-hidden="true" />
              <span>New calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
