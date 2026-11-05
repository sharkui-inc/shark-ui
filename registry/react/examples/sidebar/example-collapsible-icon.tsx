"use client";

import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  CrownIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  LogOutIcon,
  type LucideIcon,
  Settings2Icon,
  WavesHorizontalIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
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
  SidebarRail,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { Skeleton } from "@/registry/react/components/skeleton";

const Example = () => (
  <SidebarProvider className="h-svh" defaultOpen={false} defaultOpenMobile>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Onda">
              <IconTile aria-hidden="true" size="md">
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
                <SidebarMenuButton isActive={link.active} tooltip={link.label}>
                  <link.icon aria-hidden="true" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <div className="flex h-12 shrink-0 items-center px-4">
        <SidebarTrigger />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <Skeleton className="h-8 w-40 animate-none" />
        <Skeleton className="min-h-48 flex-1 animate-none" />
      </div>
    </SidebarInset>
  </SidebarProvider>
);

interface NavUserProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const NavUser = (props: NavUserProps) => {
  const { user: account } = props;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu
          positioning={{
            gutter: 16,
            placement: "right-end",
          }}
        >
          <MenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage alt={account.name} src={account.avatar} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">{account.name}</span>
                <span className="truncate text-xs">{account.email}</span>
              </div>
              <ChevronsUpDownIcon aria-hidden="true" className="ms-auto" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className="w-full sm:w-64">
            <MenuGroup>
              <MenuGroupLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage alt={account.name} src={account.avatar} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-start text-sm leading-tight">
                    <span className="truncate font-medium">{account.name}</span>
                    <span className="truncate text-xs">{account.email}</span>
                  </div>
                </div>
              </MenuGroupLabel>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="upgrade">
                <CrownIcon aria-hidden="true" />
                Upgrade to Pro
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="account">
                <BadgeCheckIcon aria-hidden="true" />
                Account
              </MenuItem>
              <MenuItem value="billing">
                <CreditCardIcon aria-hidden="true" />
                Billing
              </MenuItem>
              <MenuItem value="notifications">
                <BellIcon aria-hidden="true" />
                Notifications
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="logout">
                <LogOutIcon aria-hidden="true" />
                Log out
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const user = {
  avatar: "https://github.com/vinihvc.png",
  email: "m@example.com",
  name: "vini",
};

const links: { active?: boolean; icon: LucideIcon; label: string }[] = [
  { active: true, icon: HomeIcon, label: "Overview" },
  { icon: InboxIcon, label: "Inbox" },
  { icon: FolderIcon, label: "Projects" },
  { icon: Settings2Icon, label: "Settings" },
];

export default Example;
