"use client";

import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import {
  MenuRadioGroup,
  MenuRadioItem,
} from "@/registry/react/components/menu";

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
          <MenuRadioGroup
            onValueChange={({ value }) => setUser(value)}
            value={user}
          >
            <MenuRadioItem value="pedro">Pedro Duarte</MenuRadioItem>
            <MenuRadioItem value="colm">Colm Tuite</MenuRadioItem>
          </MenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup heading="Theme">
          <MenuRadioGroup
            onValueChange={({ value }) => setTheme(value)}
            value={theme}
          >
            <MenuRadioItem value="light">Light</MenuRadioItem>
            <MenuRadioItem value="dark">Dark</MenuRadioItem>
            <MenuRadioItem value="system">System</MenuRadioItem>
          </MenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuRadio;
