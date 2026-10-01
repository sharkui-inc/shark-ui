import type { Metadata } from "next";
import type React from "react";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { ChatAppsPanel } from "./_components/chat-apps-panel";
import { ChatConversation } from "./_components/chat-conversation";
import { ChatSidebar } from "./_components/chat-sidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Chat Preview",
};

const ChatTemplatePage = () => (
  <div className="absolute inset-0 overflow-hidden">
    <SidebarProvider className="h-full min-h-0">
      <ChatSidebar />
      <SidebarInset className="min-w-0 bg-background">
        <h1 className="sr-only">Chat preview</h1>
        <SidebarProvider
          className="h-full min-h-0"
          defaultOpen={false}
          style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
        >
          <SidebarInset asChild className="min-w-0">
            <div>
              <ChatConversation />
            </div>
          </SidebarInset>
          <Sidebar collapsible="offcanvas" placement="right">
            <ChatAppsPanel />
          </Sidebar>
        </SidebarProvider>
      </SidebarInset>
    </SidebarProvider>
  </div>
);

export default ChatTemplatePage;
