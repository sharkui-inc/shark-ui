import {
  CalendarIcon,
  LayoutDashboardIcon,
  type LucideIcon,
  MessageSquareIcon,
  PlusIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { Skeleton } from "@/registry/react/components/skeleton";

const Example = () => (
  <SidebarProvider className="h-svh">
    <Sidebar collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupAction aria-label="Add project">
            <PlusIcon />
          </SidebarGroupAction>
          <SidebarGroupContent>
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
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="grid flex-1 grid-cols-2 gap-3 p-4">
        <Skeleton className="min-h-24 animate-none" />
        <Skeleton className="min-h-24 animate-none" />
        <Skeleton className="min-h-24 animate-none" />
        <Skeleton className="min-h-24 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const links: { active?: boolean; icon: LucideIcon; label: string }[] = [
  { active: true, icon: LayoutDashboardIcon, label: "Dashboard" },
  { icon: CalendarIcon, label: "Calendar" },
  { icon: MessageSquareIcon, label: "Messages" },
];

export default Example;
