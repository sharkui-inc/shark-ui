"use client";

import {
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  Crown,
  Folder,
  Forward,
  Frame,
  LogOut,
  Map as MapIcon,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  SquareTerminal,
  Trash2,
  WavesHorizontalIcon,
} from "lucide-react";
import React from "react";
import { SharkIcon } from "@/components/icons/shark";
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
        {
          title: "السجل",
          url: "#",
        },
        {
          title: "المميزة بنجمة",
          url: "#",
        },
        {
          title: "الإعدادات",
          url: "#",
        },
      ],
      title: "الملعب",
      url: "#",
    },
    {
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
      title: "النماذج",
      url: "#",
    },
    {
      icon: BookOpen,
      items: [
        {
          title: "مقدمة",
          url: "#",
        },
        {
          title: "ابدأ الآن",
          url: "#",
        },
        {
          title: "الدروس التعليمية",
          url: "#",
        },
        {
          title: "سجل التغييرات",
          url: "#",
        },
      ],
      title: "التوثيق",
      url: "#",
    },
    {
      icon: Settings2,
      items: [
        {
          title: "عام",
          url: "#",
        },
        {
          title: "الفريق",
          url: "#",
        },
        {
          title: "الفوترة",
          url: "#",
        },
        {
          title: "الحدود",
          url: "#",
        },
      ],
      title: "الإعدادات",
      url: "#",
    },
  ],
  projects: [
    {
      icon: Frame,
      name: "الهندسة التصميمية",
      url: "#",
    },
    {
      icon: PieChart,
      name: "المبيعات والتسويق",
      url: "#",
    },
    {
      icon: MapIcon,
      name: "السفر",
      url: "#",
    },
  ],
  teams: [
    {
      logo: WavesHorizontalIcon,
      name: "Onda Inc.",
      plan: "مؤسسية",
    },
    {
      logo: SharkIcon,
      name: "Shark Corp.",
      plan: "ناشئة",
    },
  ],
  user: {
    avatar: "https://github.com/vinihvc.png",
    email: "m@example.com",
    name: "vini",
  },
};

interface TeamSwitcherProps {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}

const TeamSwitcher = ({ teams }: TeamSwitcherProps) => {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu
          positioning={{
            placement: "right-start",
          }}
        >
          <MenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <IconTile aria-hidden size="lg">
                <activeTeam.logo className="size-4" />
              </IconTile>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ms-auto size-4" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className="min-w-56">
            <MenuGroup>
              <MenuGroupLabel className="text-muted-foreground text-xs">
                الفرق
              </MenuGroupLabel>
              {teams.map((team, index) => (
                <MenuItem
                  className="gap-2"
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  value={team.name}
                >
                  <IconTile aria-hidden size="xs" variant="secondary">
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
                <IconTile aria-hidden size="xs">
                  <Plus className="size-4" />
                </IconTile>
                <div className="font-medium text-muted-foreground">
                  إضافة فريق
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
    icon?: React.ElementType;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

const NavMain = ({ items }: NavMainProps) => (
  <SidebarGroup>
    <SidebarGroupLabel>المنصة</SidebarGroupLabel>
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
                {item.icon ? <item.icon /> : null}
                <span>{item.title}</span>
                <ChevronRight className="ms-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
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
    icon: React.ElementType;
  }[];
}

const NavProjects = ({ projects }: NavProjectsProps) => (
  <SidebarGroup className="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel>المشاريع</SidebarGroupLabel>
    <SidebarMenu>
      {projects.map((item) => (
        <SidebarMenuItem key={item.name}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.name}</span>
            </a>
          </SidebarMenuButton>
          <Menu
            positioning={{
              placement: "right-start",
            }}
          >
            <MenuTrigger asChild>
              <SidebarMenuAction showOnHover>
                <MoreHorizontal />
                <span className="sr-only">المزيد</span>
              </SidebarMenuAction>
            </MenuTrigger>
            <MenuContent className="w-48">
              <MenuGroup>
                <MenuItem value={`${item.name}-view`}>
                  <Folder />
                  عرض المشروع
                </MenuItem>
                <MenuItem value={`${item.name}-share`}>
                  <Forward />
                  مشاركة المشروع
                </MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuGroup>
                <MenuItem value={`${item.name}-delete`} variant="destructive">
                  <Trash2 />
                  حذف المشروع
                </MenuItem>
              </MenuGroup>
            </MenuContent>
          </Menu>
        </SidebarMenuItem>
      ))}
      <SidebarMenuItem>
        <SidebarMenuButton className="text-sidebar-foreground">
          <MoreHorizontal className="text-sidebar-foreground" />
          <span>المزيد</span>
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
              <ChevronsUpDown className="ms-auto size-4" />
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
                <Crown />
                الترقية إلى النسخة الاحترافية
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="account">
                <BadgeCheck />
                الحساب
              </MenuItem>
              <MenuItem value="billing">
                <CreditCard />
                الفوترة
              </MenuItem>
              <MenuItem value="notifications">
                <Bell />
                الإشعارات
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem value="logout">
                <LogOut />
                تسجيل الخروج
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = () => (
  <SidebarProvider dir="rtl" lang="ar">
    <Sidebar collapsible="icon" placement="right">
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

export default AppSidebar;
