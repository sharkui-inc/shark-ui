"use client";

import {
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/react/components/sidebar";
import { FOLDERS, getFolderCount, type Mailbox } from "../_data/mail";

export const MailFolderNav = ({
  activeFolder,
  onFolderChange,
}: {
  activeFolder: Mailbox;
  onFolderChange: (folder: Mailbox) => void;
}) => (
  <SidebarMenu>
    {FOLDERS.map(({ label, icon: Icon }) => {
      const count = getFolderCount(label);

      return (
        <SidebarMenuItem key={label}>
          <SidebarMenuButton
            isActive={activeFolder === label}
            onClick={() => onFolderChange(label)}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </SidebarMenuButton>
          {count > 0 ? <SidebarMenuBadge>{count}</SidebarMenuBadge> : null}
        </SidebarMenuItem>
      );
    })}
  </SidebarMenu>
);
