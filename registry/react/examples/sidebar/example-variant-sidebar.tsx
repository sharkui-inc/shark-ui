import {
  FolderIcon,
  HomeIcon,
  InboxIcon,
  type LucideIcon,
  Settings2Icon,
  WavesHorizontalIcon,
} from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { Skeleton } from "@/registry/react/components/skeleton";

const Example = () => (
  <SidebarProvider className="h-svh" defaultOpenMobile>
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconTile aria-hidden="true" size="xs">
                <WavesHorizontalIcon />
              </IconTile>
              <span>Onda</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
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
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <Skeleton className="h-8 w-40 animate-none" />
        <Skeleton className="min-h-48 flex-1 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const links: { active?: boolean; icon: LucideIcon; label: string }[] = [
  { active: true, icon: HomeIcon, label: "Overview" },
  { icon: InboxIcon, label: "Inbox" },
  { icon: FolderIcon, label: "Projects" },
  { icon: Settings2Icon, label: "Settings" },
];

export default Example;
