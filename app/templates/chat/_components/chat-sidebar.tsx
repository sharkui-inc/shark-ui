"use client";

import {
  ChevronDownIcon,
  CreditCardIcon,
  LogOutIcon,
  MessageSquareIcon,
  MessageSquarePlusIcon,
  SearchIcon,
  Settings2Icon,
} from "lucide-react";
import React from "react";
import { SharkIcon } from "@/components/icons/shark";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Card, CardContent } from "@/registry/react/components/card";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { Progress } from "@/registry/react/components/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/registry/react/components/sidebar";
import { account, conversations, NEW_CHAT, workspaces } from "../_data/chat";
import { ChatSearchDialog } from "./chat-search-dialog";

export const ChatSidebar = () => {
  const [activeConversation, setActiveConversation] = React.useState(
    conversations[0]
  );
  const [searchOpen, setSearchOpen] = React.useState(false);
  const isNewChat = activeConversation === NEW_CHAT;

  const handleNewChat = () => {
    setActiveConversation(NEW_CHAT);
  };

  return (
    <>
      <Sidebar className="absolute h-full" collapsible="icon">
        <SidebarHeader className="h-12 min-h-12 shrink-0 flex-row items-center justify-between border-b py-0 group-data-[collapsible=icon]:justify-center">
          <div className="flex h-full min-w-0 items-center group-data-[collapsible=icon]:hidden">
            <WorkspaceSwitcher />
          </div>
          <SidebarTrigger
            aria-label="Collapse sidebar"
            className="shrink-0 group-data-[collapsible=icon]:hidden"
          />
          <div className="group/brand-toggle hidden size-6 group-data-[collapsible=icon]:grid">
            <IconTile
              aria-hidden="true"
              className="col-start-1 row-start-1 transition-opacity group-focus-within/brand-toggle:opacity-0 group-hover/brand-toggle:opacity-0"
              size="xs"
            >
              <SharkIcon aria-hidden="true" />
            </IconTile>
            <SidebarTrigger
              aria-label="Expand sidebar"
              className="col-start-1 row-start-1 size-6 md:size-6 opacity-0 transition-opacity group-focus-within/brand-toggle:opacity-100 group-hover/brand-toggle:opacity-100 [&_svg]:mx-0"
              size="icon-xs"
            />
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    isActive={isNewChat}
                    onClick={handleNewChat}
                    tooltip="New chat"
                  >
                    <MessageSquarePlusIcon aria-hidden="true" />
                    <span>New chat</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setSearchOpen(true)}
                    tooltip="Search"
                  >
                    <SearchIcon aria-hidden="true" />
                    <span>Search</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Recent chats</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {conversations.map((conversation) => (
                  <SidebarMenuItem key={conversation}>
                    <SidebarMenuButton
                      isActive={activeConversation === conversation}
                      onClick={() => setActiveConversation(conversation)}
                      tooltip={conversation}
                    >
                      <MessageSquareIcon aria-hidden="true" />
                      <span className="truncate">{conversation}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <Card className="gap-2 [--space:--spacing(3)] group-data-[collapsible=icon]:hidden">
            <CardContent className="flex flex-col gap-2">
              <div className="text-xs text-nowrap">Monthly token usage</div>
              <Progress
                aria-label="Monthly token usage: 620K of 1M tokens used"
                className="flex-nowrap"
                value={62}
              />
              <p className="text-muted-foreground text-xs text-nowrap">
                <span className="text-foreground font-medium tabular-nums">
                  620K
                </span>{" "}
                of 1M tokens used
              </p>
            </CardContent>
          </Card>
          <AccountMenu />
        </SidebarFooter>
      </Sidebar>
      <ChatSearchDialog
        onNewChat={handleNewChat}
        onOpenChange={setSearchOpen}
        onSelectConversation={(conversation) => {
          setActiveConversation(conversation);
          setSearchOpen(false);
        }}
        open={searchOpen}
      />
    </>
  );
};

const WorkspaceSwitcher = () => {
  const [workspaceValue, setWorkspaceValue] = React.useState<string>(
    workspaces[0].value
  );
  const workspace =
    workspaces.find((item) => item.value === workspaceValue) ?? workspaces[0];

  return (
    <SidebarMenu className="w-fit">
      <SidebarMenuItem>
        <Menu positioning={{ placement: "bottom-start" }}>
          <MenuTrigger asChild>
            <SidebarMenuButton
              tooltip={`${workspace.name}: ${workspace.description}`}
              variant="ghost"
            >
              <IconTile aria-hidden="true" size="xs">
                <SharkIcon aria-hidden="true" />
              </IconTile>
              <span className="font-semibold">{workspace.name}</span>
              <ChevronDownIcon aria-hidden="true" />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent>
            <MenuList>
              <MenuRadioGroup
                onValueChange={({ value }) => setWorkspaceValue(value)}
                value={workspaceValue}
              >
                {workspaces.map(({ description, name, value }) => (
                  <MenuRadioItem key={value} value={value}>
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="truncate font-medium">{name}</span>
                      <span className="text-muted-foreground truncate">
                        {description}
                      </span>
                    </span>
                  </MenuRadioItem>
                ))}
              </MenuRadioGroup>
            </MenuList>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AccountMenu = () => {
  const { state } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu positioning={{ placement: "top-end" }}>
          <MenuTrigger asChild>
            <SidebarMenuButton size="lg">
              <Avatar className="size-8 rounded-lg">
                <AvatarImage alt={account.name} src={account.avatar} />
                <AvatarFallback>{account.initials}</AvatarFallback>
              </Avatar>
              <span className="truncate font-medium">{account.name}</span>
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent
            className="w-(--reference-width) data-collapsed:w-56"
            data-collapsed={state === "collapsed" || undefined}
          >
            <MenuList>
              <MenuGroup heading={account.name}>
                <MenuItem value="account">
                  <CreditCardIcon aria-hidden="true" />
                  Account & billing
                </MenuItem>
                <MenuItem value="settings">
                  <Settings2Icon aria-hidden="true" />
                  Settings
                </MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuItem value="sign-out">
                <LogOutIcon aria-hidden="true" />
                Sign out
              </MenuItem>
            </MenuList>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
