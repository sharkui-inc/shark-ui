import {
  HomeIcon,
  InboxIcon,
  type LucideIcon,
  SearchIcon,
  Settings2Icon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
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
          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.label}>
                <SidebarMenuButton asChild isActive={link.active}>
                  <a href={link.href}>
                    <link.icon aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <Skeleton className="h-8 w-40 animate-none" />
        <Skeleton className="h-10 animate-none" />
        <Skeleton className="h-10 animate-none" />
        <Skeleton className="min-h-32 flex-1 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const links: {
  active?: boolean;
  href: string;
  icon: LucideIcon;
  label: string;
}[] = [
  { active: true, href: "#", icon: HomeIcon, label: "Home" },
  { href: "#", icon: InboxIcon, label: "Inbox" },
  { href: "#", icon: SearchIcon, label: "Search" },
  { href: "#", icon: Settings2Icon, label: "Settings" },
];

export default Example;
