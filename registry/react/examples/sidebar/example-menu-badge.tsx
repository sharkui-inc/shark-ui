import { BellIcon, FileIcon, InboxIcon, type LucideIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { Skeleton } from "@/registry/react/components/skeleton";

const Example = () => (
  <SidebarProvider className="h-svh" defaultOpenMobile>
    <Sidebar>
      <SidebarContent overscrollContain={false}>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.label}>
                <SidebarMenuButton isActive={link.active}>
                  <link.icon aria-hidden="true" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>{link.count}</SidebarMenuBadge>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 animate-none rounded-full" />
          <Skeleton className="h-8 flex-1 animate-none" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 animate-none rounded-full" />
          <Skeleton className="h-8 flex-1 animate-none" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 animate-none rounded-full" />
          <Skeleton className="h-8 flex-1 animate-none" />
        </div>
        <Skeleton className="min-h-24 flex-1 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const links: {
  active?: boolean;
  count: string;
  icon: LucideIcon;
  label: string;
}[] = [
  { active: true, count: "24", icon: InboxIcon, label: "Inbox" },
  { count: "3", icon: FileIcon, label: "Drafts" },
  { count: "1", icon: BellIcon, label: "Updates" },
];

export default Example;
