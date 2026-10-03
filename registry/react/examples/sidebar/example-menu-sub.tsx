import { ChevronRightIcon, FolderIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { Skeleton } from "@/registry/react/components/skeleton";

const Example = () => (
  <SidebarProvider className="h-svh" defaultOpenMobile>
    <Sidebar>
      <SidebarContent overscrollContain={false}>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {projects.map((project) => (
              <Collapsible defaultOpen={project.open} key={project.name}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <FolderIcon aria-hidden="true" />
                      <span>{project.name}</span>
                      <ChevronRightIcon aria-hidden="true" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {project.items.map((item) => (
                        <SidebarMenuSubItem key={item.label}>
                          <SidebarMenuSubButton href="#" isActive={item.active}>
                            <span>{item.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="grid flex-1 grid-cols-[minmax(0,1fr)_8rem] gap-3 p-4">
        <Skeleton className="animate-none" />
        <div className="flex flex-col gap-3">
          <Skeleton className="h-16 animate-none" />
          <Skeleton className="flex-1 animate-none" />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const projects: {
  items: { active?: boolean; label: string }[];
  name: string;
  open: boolean;
}[] = [
  {
    items: [
      { active: true, label: "Components" },
      { label: "Tokens" },
      { label: "Icons" },
    ],
    name: "Design",
    open: true,
  },
  {
    items: [{ label: "Notes" }, { label: "Interviews" }],
    name: "Research",
    open: false,
  },
];

export default Example;
