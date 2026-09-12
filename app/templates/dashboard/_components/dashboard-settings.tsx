"use client";

import { CheckIcon } from "lucide-react";
import { type CSSProperties, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/registry/react/components/dialog";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { settingsNavigation } from "../_data/dashboard";
import { SettingsAppearancePage } from "./settings/settings-appearance";
import { SettingsBillingPage } from "./settings/settings-billing";
import { SettingsGeneralPage } from "./settings/settings-general";
import { SettingsMembersPage } from "./settings/settings-members";
import { SettingsNotificationsPage } from "./settings/settings-notifications";

type SettingsPage = (typeof settingsNavigation)[number]["value"];

export const DashboardSettings = ({
  onOpenChange,
  open,
}: {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}) => {
  const [page, setPage] = useState<SettingsPage>("general");
  const [lastSaved, setLastSaved] = useState("All changes saved");
  const saveSettings = () => setLastSaved("Saved just now");

  const renderPage = () => {
    switch (page) {
      case "general":
        return <SettingsGeneralPage onSave={saveSettings} />;
      case "notifications":
        return <SettingsNotificationsPage onSave={saveSettings} />;
      case "appearance":
        return <SettingsAppearancePage onSave={saveSettings} />;
      case "members":
        return <SettingsMembersPage onSave={saveSettings} />;
      case "billing":
        return <SettingsBillingPage onSave={saveSettings} />;
      default: {
        const exhaustive: never = page;
        return exhaustive;
      }
    }
  };

  return (
    <Dialog
      onOpenChange={({ open: nextOpen }) => onOpenChange(nextOpen)}
      open={open}
    >
      <DialogContent
        className="h-[min(36rem,calc(100svh-2rem))] p-0"
        size="2xl"
      >
        <DialogHeader
          className="sr-only"
          description="Manage workspace preferences without leaving the dashboard."
          title="Workspace settings"
        />
        <SidebarProvider
          className="min-h-0 min-w-0 flex-1"
          style={{ "--sidebar-width": "13rem" } as CSSProperties}
        >
          <Sidebar className="border-e bg-transparent" collapsible="none">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {settingsNavigation.map(({ icon: Icon, label, value }) => (
                      <SidebarMenuItem key={value}>
                        <SidebarMenuButton
                          isActive={page === value}
                          onClick={() => setPage(value)}
                        >
                          <Icon aria-hidden="true" />
                          <span>{label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="min-h-0 overflow-hidden bg-transparent">
            <ScrollArea>
              <div className="p-(--space)">{renderPage()}</div>
            </ScrollArea>
          </SidebarInset>
        </SidebarProvider>
        <DialogFooter className="sm:justify-start">
          <CheckIcon aria-hidden="true" className="h-lh w-3.5 text-primary" />
          <span className="text-muted-foreground text-sm">{lastSaved}</span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
