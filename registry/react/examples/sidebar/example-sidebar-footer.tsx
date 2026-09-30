import {
  FolderIcon,
  HomeIcon,
  InboxIcon,
  type LucideIcon,
  UserRoundIcon,
  WavesHorizontalIcon,
} from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
  <SidebarProvider className="h-svh">
    <Sidebar collapsible="none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconTile aria-hidden size="lg">
                <WavesHorizontalIcon />
              </IconTile>
              <span>Onda</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconTile aria-hidden size="sm" variant="secondary">
                <UserRoundIcon />
              </IconTile>
              <span>
                <span>Mina Alves</span>
                <span>mina@onda.dev</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="grid grid-cols-3 gap-3">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
        <Skeleton className="min-h-40 flex-1" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const links: { active?: boolean; icon: LucideIcon; label: string }[] = [
  { active: true, icon: HomeIcon, label: "Home" },
  { icon: InboxIcon, label: "Inbox" },
  { icon: FolderIcon, label: "Projects" },
];

export default Example;
