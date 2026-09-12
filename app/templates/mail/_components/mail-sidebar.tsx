"use client";

import { MailIcon } from "lucide-react";
import { useState } from "react";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import type { Mailbox } from "../_data/mail";
import { MailFolderNav } from "./mail-folder-nav";
import { MailLabelNav } from "./mail-label-nav";

export const MailSidebar = () => {
  const [activeFolder, setActiveFolder] = useState<Mailbox>("Inbox");

  return (
    <SidebarProvider className="h-full min-h-0 w-full">
      <Sidebar className="h-full w-full" collapsible="none">
        <SidebarHeader className="h-14 min-h-14 shrink-0 border-b py-0">
          <div className="flex h-full items-center gap-2">
            <IconTile aria-hidden="true" size="xs">
              <MailIcon aria-hidden="true" />
            </IconTile>
            <p className="truncate font-semibold text-sm">Onda Mail</p>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Mailboxes</SidebarGroupLabel>
            <SidebarGroupContent>
              <MailFolderNav
                activeFolder={activeFolder}
                onFolderChange={setActiveFolder}
              />
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Labels</SidebarGroupLabel>
            <SidebarGroupContent>
              <MailLabelNav />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
