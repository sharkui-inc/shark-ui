import {
  FolderIcon,
  FrameIcon,
  type LucideIcon,
  MapIcon,
  PlusIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
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
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project.name}>
                <SidebarMenuButton asChild>
                  <a href={project.url}>
                    <project.icon aria-hidden="true" />
                    <span>{project.name}</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuAction
                  aria-label={`Add to ${project.name}`}
                  showOnHover
                >
                  <PlusIcon />
                </SidebarMenuAction>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="grid flex-1 grid-cols-2 gap-3 p-4">
        <Skeleton className="min-h-28 animate-none" />
        <Skeleton className="min-h-28 animate-none" />
        <Skeleton className="col-span-2 min-h-32 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const projects: { icon: LucideIcon; name: string; url: string }[] = [
  { icon: FrameIcon, name: "Design", url: "#" },
  { icon: MapIcon, name: "Travel", url: "#" },
  { icon: FolderIcon, name: "Marketing", url: "#" },
];

export default Example;
