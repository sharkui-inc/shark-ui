"use client";

import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuRadio = () => {
  const [user, setUser] = React.useState("pedro");
  const [theme, setTheme] = React.useState("light");

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
        <ContextMenuGroup heading="People">
          <ContextMenuRadioGroup
            onValueChange={({ value }) => setUser(value)}
            value={user}
          >
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup heading="Theme">
          <ContextMenuRadioGroup
            onValueChange={({ value }) => setTheme(value)}
            value={theme}
          >
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuRadio;
