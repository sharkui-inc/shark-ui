"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/react/components/sidebar";
import { Status } from "@/registry/react/components/status";
import { LABELS } from "../_data/mail";

export const MailLabelNav = () => (
  <SidebarMenu>
    {LABELS.map((item) => (
      <SidebarMenuItem key={item.label}>
        <SidebarMenuButton type="button">
          <Status variant={item.variant} />
          <span>{item.label}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))}
  </SidebarMenu>
);
