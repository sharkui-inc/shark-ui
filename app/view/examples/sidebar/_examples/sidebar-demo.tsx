"use client";

import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map as MapIcon,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from "lucide-react";
import { type ElementType, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
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
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/registry/react/components/sidebar";

const data = {
  navMain: [
    {
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
      title: "Playground",
      url: "#",
    },
    {
      icon: Bot,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
      title: "Models",
      url: "#",
    },
    {
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
      title: "Documentation",
      url: "#",
    },
    {
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
      title: "Settings",
      url: "#",
    },
  ],
  projects: [
    { icon: Frame, name: "Design Engineering", url: "#" },
    { icon: PieChart, name: "Sales & Marketing", url: "#" },
    { icon: MapIcon, name: "Travel", url: "#" },
  ],
  teams: [
    { logo: GalleryVerticalEnd, name: "Acme Inc", plan: "Enterprise" },
    { logo: AudioWaveform, name: "Acme Corp.", plan: "Startup" },
    { logo: Command, name: "Evil Corp.", plan: "Free" },
  ],
  user: {
    avatar: "https://github.com/shadcn.png",
    email: "m@example.com",
    name: "shadcn",
  },
};

interface TeamSwitcherProps {
  teams: {
    name: string;
    logo: ElementType;
    plan: string;
  }[];
}

const TeamSwitcher = ({ teams }: TeamSwitcherProps) => {
  const [activeTeam, setActiveTeam] = useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu positioning={{ placement: "right-start" }}>
          <MenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <IconTile aria-hidden="true" size="lg">
                <activeTeam.logo className="size-4" />
              </IconTile>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown aria-hidden="true" className="ms-auto size-4" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className="w-(--reference-width) min-w-56">
            <MenuGroup>
              <MenuGroupLabel className="text-muted-foreground text-xs">
                Teams
              </MenuGroupLabel>
              {teams.map((team, index) => (
                <MenuItem
                  className="gap-2"
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  value={team.name}
                >
                  <IconTile
                    aria-hidden="true"
                    className="rounded-md border-input bg-transparent shadow-none"
                    size="xs"
                  >
                    <team.logo className="size-3.5 shrink-0" />
                  </IconTile>
                  {team.name}
                  <MenuShortcut>⌘{index + 1}</MenuShortcut>
                </MenuItem>
              ))}
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem className="gap-2" value="add-team">
                <IconTile aria-hidden="true" size="xs">
                  <Plus className="size-4" />
                </IconTile>
                <div className="font-medium text-muted-foreground">
                  Add team
                </div>
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

interface NavMainProps {
  items: {
    title: string;
    url: string;
    icon?: ElementType;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

const NavMain = ({ items }: NavMainProps) => (
  <SidebarGroup>
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
      {items.map((item) => (
        <Collapsible
          asChild
          className="group/collapsible"
          defaultOpen={item.isActive}
          key={item.title}
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon ? <item.icon aria-hidden="true" /> : null}
                <span>{item.title}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="ms-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={subItem.url}>
                        <span>{subItem.title}</span>
                      </a>
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
);

interface NavProjectsProps {
  projects: {
    name: string;
    url: string;
    icon: ElementType;
  }[];
}

const NavProjects = ({ projects }: NavProjectsProps) => (
  <SidebarGroup className="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel>Projects</SidebarGroupLabel>
    <SidebarMenu>
      {projects.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon aria-hidden="true" />
              <span>{item.name}</span>
            </a>
          </SidebarMenuButton>
          <Menu positioning={{ placement: "right-start" }}>
            <MenuTrigger asChild>
              <SidebarMenuAction showOnHover>
                <MoreHorizontal aria-hidden="true" />
                <span className="sr-only">More</span>
              </SidebarMenuAction>
            </MenuTrigger>
            <MenuContent className="w-48">
              <MenuGroup>
                <MenuItem value={`${item.name}-view`}>
                  <Folder aria-hidden="true" />
                  View Project
                </MenuItem>
                <MenuItem value={`${item.name}-share`}>
                  <Forward aria-hidden="true" />
                  Share Project
                </MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuGroup>
                <MenuItem value={`${item.name}-delete`} variant="destructive">
                  <Trash2 aria-hidden="true" />
                  Delete Project
                </MenuItem>
              </MenuGroup>
            </MenuContent>
          </Menu>
        </SidebarMenuItem>
      ))}
      <SidebarMenuItem>
        <SidebarMenuButton className="text-sidebar-foreground">
          <MoreHorizontal
            aria-hidden="true"
            className="text-sidebar-foreground"
          />
          <span>More</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
);

interface NavUserProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const NavUser = ({ user }: NavUserProps) => {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu
          positioning={{
            placement: isMobile ? "bottom-end" : "right-end",
          }}
        >
          <MenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage alt={user.name} src={user.avatar} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown aria-hidden="true" className="ms-auto size-4" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className="w-full sm:w-64">
            <MenuGroup>
              <MenuGroupLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage alt={user.name} src={user.avatar} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-start text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                </div>
              </MenuGroupLabel>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="upgrade">
                <Sparkles aria-hidden="true" />
                Upgrade to Pro
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="account">
                <BadgeCheck aria-hidden="true" />
                Account
              </MenuItem>
              <MenuItem value="billing">
                <CreditCard aria-hidden="true" />
                Billing
              </MenuItem>
              <MenuItem value="notifications">
                <Bell aria-hidden="true" />
                Notifications
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="logout">
                <LogOut aria-hidden="true" />
                Log out
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const SidebarDemo = () => (
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 motion-reduce:transition-none">
        <SidebarTrigger className="-ms-1" />
      </header>
    </SidebarInset>
  </SidebarProvider>
);

export default SidebarDemo;
