"use client";

import {
  BadgeCheckIcon,
  BellIcon,
  BoxIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  EllipsisIcon,
  FolderIcon,
  LogOutIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
  SlidersHorizontalIcon,
  WavesHorizontalIcon,
} from "lucide-react";
import React from "react";
import { SharkIcon } from "@/components/icons/shark";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuList,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/react/components/sidebar";
import { AiComponentsIdeConversationMenu } from "./ai-components-ide-conversation-menu";

interface ConversationItem {
  id: string;
  title: string;
}

interface AiComponentsIdeSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

interface Team {
  logo: React.ElementType;
  name: string;
}

const TEAMS: Team[] = [
  {
    logo: SharkIcon,
    name: "Onda Inc.",
  },
  {
    logo: WavesHorizontalIcon,
    name: "Onda Labs",
  },
];

const PINNED: ConversationItem[] = [
  { id: "dark-mode", title: "Add a dark mode toggle to settings" },
];

const SCHEDULED: ConversationItem[] = [
  { id: "deps", title: "Weekly dependency audit" },
];

const RECENTS: ConversationItem[] = [
  { id: "double-charge", title: "Fix the double-charge bug in checkout" },
  { id: "email", title: "Add email format validation" },
  { id: "onboarding", title: "Rewrite onboarding empty states" },
  { id: "rate-limit", title: "Tighten API rate limits" },
];

const GROUPS = [
  { items: PINNED, label: "Pinned" },
  { items: SCHEDULED, label: "Scheduled" },
  { items: RECENTS, label: "Recents" },
] as const;

const TeamSwitcher = () => {
  const [activeTeam, setActiveTeam] = React.useState(TEAMS[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu className="min-w-0 flex-1">
      <SidebarMenuItem>
        <Menu
          positioning={{
            gutter: 8,
            placement: "bottom-start",
            sameWidth: true,
          }}
        >
          <MenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              tooltip={activeTeam.name}
            >
              <IconTile aria-hidden="true" size="xs">
                <activeTeam.logo className="size-3.5" />
              </IconTile>
              <span className="truncate font-medium">{activeTeam.name}</span>
              <ChevronsUpDownIcon aria-hidden="true" className="ms-auto" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className="w-(--reference-width) min-w-56">
            <MenuList>
              <MenuGroup>
                <MenuGroupLabel className="text-muted-foreground text-xs">
                  Teams
                </MenuGroupLabel>
                {TEAMS.map((team, index) => (
                  <MenuItem
                    className="gap-2"
                    key={team.name}
                    onClick={() => setActiveTeam(team)}
                    value={team.name}
                  >
                    <IconTile aria-hidden="true" size="xs" variant="secondary">
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
                    <PlusIcon aria-hidden="true" className="size-4" />
                  </IconTile>
                  <span className="text-muted-foreground font-medium">
                    Add team
                  </span>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export const AiComponentsIdeSidebar = (props: AiComponentsIdeSidebarProps) => {
  const { activeId, onSelect } = props;

  return (
    <Sidebar collapsible="offcanvas" variant="inset">
      <SidebarHeader className="gap-4">
        <div className="flex items-center gap-1">
          <TeamSwitcher />
          <Button
            aria-label="Search"
            size="icon-xs"
            type="button"
            variant="ghost"
          >
            <SearchIcon aria-hidden="true" />
          </Button>
          <Button
            aria-label="New conversation"
            size="icon-xs"
            type="button"
            variant="ghost"
          >
            <PlusIcon aria-hidden="true" />
          </Button>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Projects">
              <FolderIcon aria-hidden="true" />
              <span>Projects</span>
            </SidebarMenuButton>
            <SidebarMenuBadge>New</SidebarMenuBadge>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Artifacts">
              <BoxIcon aria-hidden="true" />
              <span>Artifacts</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Customize">
              <SlidersHorizontalIcon aria-hidden="true" />
              <span>Customize</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="More">
              <MoreHorizontalIcon aria-hidden="true" />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {GROUPS.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activeId === item.id}
                      onClick={() => onSelect(item.id)}
                      tooltip={item.title}
                    >
                      <span className="truncate">{item.title}</span>
                    </SidebarMenuButton>
                    <AiComponentsIdeConversationMenu
                      id={item.id}
                      positioning={{ placement: "right-start" }}
                      trigger={
                        <SidebarMenuAction
                          aria-label={`More options for ${item.title}`}
                          showOnHover
                        >
                          <EllipsisIcon aria-hidden="true" />
                        </SidebarMenuAction>
                      }
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Menu
              positioning={{
                gutter: 8,
                placement: "top",
                sameWidth: true,
              }}
            >
              <MenuTrigger asChild>
                <SidebarMenuButton
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  size="lg"
                >
                  <Avatar className="rounded-lg">
                    <AvatarImage
                      alt="Susan Sample"
                      src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&seed=Susan+Sample&waveColor=2b6cb0"
                    />
                    <AvatarFallback className="rounded-lg">SS</AvatarFallback>
                  </Avatar>
                  <span className="truncate font-medium">Susan Sample</span>
                  <ChevronsUpDownIcon aria-hidden="true" className="ms-auto" />
                </SidebarMenuButton>
              </MenuTrigger>
              <MenuContent className="w-(--reference-width)">
                <MenuList>
                  <MenuGroup>
                    <MenuGroupLabel className="p-0 font-normal">
                      <div className="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
                        <Avatar className="rounded-lg">
                          <AvatarImage
                            alt="Susan Sample"
                            src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&seed=Susan+Sample&waveColor=2b6cb0"
                          />
                          <AvatarFallback className="rounded-lg">
                            SS
                          </AvatarFallback>
                        </Avatar>
                        <span className="truncate font-medium">
                          Susan Sample
                        </span>
                      </div>
                    </MenuGroupLabel>
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
                    <MenuItem value="settings">
                      <Settings2Icon aria-hidden="true" />
                      Settings
                    </MenuItem>
                  </MenuGroup>
                  <MenuSeparator />
                  <MenuGroup>
                    <MenuItem value="logout">
                      <LogOutIcon aria-hidden="true" />
                      Log out
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </MenuContent>
            </Menu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
