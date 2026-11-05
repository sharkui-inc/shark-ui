"use client";

import { ChevronUpIcon } from "lucide-react";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";

const SidebarFooterDemo = () => (
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Menu positioning={{ placement: "top-start" }}>
              <MenuTrigger asChild>
                <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  Username
                  <ChevronUpIcon aria-hidden="true" className="ms-auto" />
                </SidebarMenuButton>
              </MenuTrigger>
              <MenuContent className="w-(--reference-width)">
                <MenuItem value="account">
                  <span>Account</span>
                </MenuItem>
                <MenuItem value="billing">
                  <span>Billing</span>
                </MenuItem>
                <MenuItem value="sign-out">
                  <span>Sign out</span>
                </MenuItem>
              </MenuContent>
            </Menu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    <SidebarInset>
      <header className="flex h-12 items-center justify-between px-4">
        <SidebarTrigger />
      </header>
    </SidebarInset>
  </SidebarProvider>
);

export default SidebarFooterDemo;
