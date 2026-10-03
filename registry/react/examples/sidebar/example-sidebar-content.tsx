import { WavesHorizontalIcon } from "lucide-react";
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
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconTile aria-hidden size="xs">
                <WavesHorizontalIcon />
              </IconTile>
              <span>Onda</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent overscrollContain={false}>
        {sections.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton>{item}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Skeleton className="h-9 animate-none" />
        <Skeleton className="h-9 animate-none" />
        <Skeleton className="h-9 animate-none" />
        <Skeleton className="h-9 animate-none" />
        <Skeleton className="h-9 animate-none" />
        <Skeleton className="min-h-16 flex-1 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const sections = [
  {
    items: ["Overview", "Roadmap", "Releases", "Changelog"],
    label: "Projects",
  },
  {
    items: ["Components", "Tokens", "Icons", "Motion"],
    label: "Favorites",
  },
  {
    items: ["Inbox", "Drafts", "Archive", "Spam"],
    label: "Recent",
  },
];

export default Example;
