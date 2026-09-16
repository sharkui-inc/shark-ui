"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import { MenuCheckboxItem } from "@/registry/react/components/menu";

const ContextMenuCheckboxes = () => {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [showDeveloperTools, setShowDeveloperTools] = useState(true);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        <span className="pointer-fine:inline-block hidden">
          Right click here
        </span>
        <span className="pointer-coarse:inline-block hidden">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <MenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
            value="show-bookmarks"
          >
            Show Bookmarks Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showFullUrls}
            onCheckedChange={setShowFullUrls}
            value="show-full-urls"
          >
            Show Full URLs
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showDeveloperTools}
            onCheckedChange={setShowDeveloperTools}
            value="show-developer-tools"
          >
            Show Developer Tools
          </MenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuCheckboxes;
