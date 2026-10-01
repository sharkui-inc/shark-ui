import {
  FolderIcon,
  FrameIcon,
  type LucideIcon,
  MapIcon,
  PieChartIcon,
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
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project.name}>
                <SidebarMenuButton asChild isActive={project.active}>
                  <a href={project.url}>
                    <project.icon aria-hidden="true" />
                    <span>{project.name}</span>
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
        <Skeleton className="h-28 animate-none" />
        <div className="grid flex-1 grid-cols-2 gap-3">
          <Skeleton className="animate-none" />
          <Skeleton className="animate-none" />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const projects: {
  active?: boolean;
  icon: LucideIcon;
  name: string;
  url: string;
}[] = [
  { active: true, icon: FrameIcon, name: "Design Engineering", url: "#" },
  { icon: PieChartIcon, name: "Sales", url: "#" },
  { icon: MapIcon, name: "Travel", url: "#" },
  { icon: FolderIcon, name: "Marketing", url: "#" },
];

export default Example;
