"use client";

import { ChatThread } from "./components/chat-thread";
import { LAUNCH_PLAN_MESSAGES } from "./demo-messages";

const ThreadDemo = () => (
  <main className="flex min-h-svh flex-col bg-background">
    <ChatThread
      messages={LAUNCH_PLAN_MESSAGES}
      onSuggestion={() => undefined}
    />
  </main>
);

export default ThreadDemo;
