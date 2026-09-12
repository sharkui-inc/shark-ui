"use client";

import React from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import {
  ChatSidebar,
  type ConversationSummary,
} from "./components/chat-sidebar";

const DEMO_CONVERSATIONS: readonly ConversationSummary[] = [
  { group: "Recents", id: "launch-plan", title: "Launch plan" },
  {
    group: "Recents",
    id: "research-notes",
    title: "User research analysis",
  },
  { group: "Yesterday", id: "release-checklist", title: "Release checklist" },
];

const SidebarDemo = () => {
  const [activeConversationId, setActiveConversationId] = React.useState<
    string | null
  >("launch-plan");
  const [activeView, setActiveView] = React.useState<"chat" | "projects">(
    "chat"
  );

  return (
    <SidebarProvider className="min-h-svh">
      <ChatSidebar
        activeConversationId={activeConversationId}
        activeView={activeView}
        conversations={DEMO_CONVERSATIONS}
        onConversationSelect={setActiveConversationId}
        onNewChat={() => setActiveConversationId(null)}
        onProjectsSelect={() => setActiveView("projects")}
        onViewChange={setActiveView}
      />
      <SidebarInset className="hidden lg:block" />
    </SidebarProvider>
  );
};

export default SidebarDemo;
