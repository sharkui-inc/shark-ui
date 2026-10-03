import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
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
  <SidebarProvider className="h-svh" defaultOpenMobile>
    <Sidebar>
      <SidebarContent overscrollContain={false}>
        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help
                <ChevronDownIcon aria-hidden="true" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {links.map((link) => (
                    <SidebarMenuItem key={link}>
                      <SidebarMenuButton>{link}</SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <Skeleton className="h-10 animate-none" />
        <div className="grid grid-cols-3 gap-3">
          <Skeleton className="h-20 animate-none" />
          <Skeleton className="h-20 animate-none" />
          <Skeleton className="h-20 animate-none" />
        </div>
        <Skeleton className="min-h-24 flex-1 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

const links = ["Support", "Documentation", "Contact"];

export default Example;
