"use client";

import React from "react";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

export const MailLayout = (props: {
  content: React.ReactNode;
  list: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  const { content, list, sidebar } = props;
  const isNarrow = React.useSyncExternalStore(
    (callback) => {
      const media = window.matchMedia("(max-width: 639px)");
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () => window.matchMedia("(max-width: 639px)").matches,
    () => false
  );

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-background">
      <Resizable
        className="min-h-0 flex-1"
        defaultSize={isNarrow ? [28, 72] : [16, 84]}
        orientation={isNarrow ? "vertical" : "horizontal"}
        panels={[
          { id: "mailboxes", minSize: isNarrow ? 18 : 16 },
          { id: "main", minSize: isNarrow ? 58 : 50 },
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
            defaultSize={isNarrow ? [48, 52] : [36, 64]}
            orientation={isNarrow ? "vertical" : "horizontal"}
            panels={[
              { id: "list", minSize: isNarrow ? 35 : 24 },
              { id: "content", minSize: isNarrow ? 35 : 38 },
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
              className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-muted/16"
              id="content"
            >
              {content}
            </ResizablePanel>
          </Resizable>
        </ResizablePanel>
      </Resizable>
    </div>
  );
};
