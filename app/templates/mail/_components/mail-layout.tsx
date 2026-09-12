"use client";

import type { ReactNode } from "react";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

export const MailLayout = ({
  content,
  list,
  sidebar,
}: {
  content: ReactNode;
  list: ReactNode;
  sidebar: ReactNode;
}) => (
  <div className="flex h-full min-h-0 flex-col overflow-hidden bg-muted/12">
    <Resizable
      className="min-h-0 flex-1"
      defaultSize={[16, 84]}
      panels={[
        { id: "mailboxes", minSize: 16 },
        { id: "main", minSize: 50 },
      ]}
    >
      <ResizablePanel
        className="flex min-h-0 min-w-0 flex-col overflow-hidden"
        id="mailboxes"
      >
        {sidebar}
      </ResizablePanel>
      <ResizableResizeTrigger id="mailboxes:main" />
      <ResizablePanel className="min-h-0 min-w-0" id="main">
        <Resizable
          defaultSize={[36, 64]}
          panels={[
            { id: "list", minSize: 24 },
            { id: "content", minSize: 38 },
          ]}
        >
          <ResizablePanel
            className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-background"
            id="list"
          >
            {list}
          </ResizablePanel>
          <ResizableResizeTrigger id="list:content" />
          <ResizablePanel
            className="flex flex-col overflow-hidden bg-muted/16"
            id="content"
          >
            {content}
          </ResizablePanel>
        </Resizable>
      </ResizablePanel>
    </Resizable>
  </div>
);
