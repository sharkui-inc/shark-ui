"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuCheckboxes = () => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </MenuTrigger>
      <MenuContent className="w-40">
        <MenuGroup heading="Appearance">
          <MenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
            value="status-bar"
          >
            Status Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showActivityBar}
            disabled
            onCheckedChange={setShowActivityBar}
            value="activity-bar"
          >
            Activity Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
            value="panel"
          >
            Panel
          </MenuCheckboxItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

export default MenuCheckboxes;
