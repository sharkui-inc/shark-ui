"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuList,
  MenuGroup,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => {
  const [checked, setChecked] = React.useState({
    "activity-bar": false,
    panel: false,
    "status-bar": true,
  });

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </MenuTrigger>
      <MenuContent className="min-w-40">
        <MenuList>
          <MenuGroup heading="Appearance">
            <MenuCheckboxItem
              checked={checked["status-bar"]}
              onCheckedChange={(value) =>
                setChecked((prev) => ({ ...prev, "status-bar": value }))
              }
              value="status-bar"
            >
              Status bar
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={checked["activity-bar"]}
              onCheckedChange={(value) =>
                setChecked((prev) => ({ ...prev, "activity-bar": value }))
              }
              value="activity-bar"
            >
              Activity bar
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={checked.panel}
              disabled
              onCheckedChange={(value) =>
                setChecked((prev) => ({ ...prev, panel: value }))
              }
              value="panel"
            >
              Panel
            </MenuCheckboxItem>
          </MenuGroup>

        </MenuList>
      </MenuContent>
    </Menu>
  );
};

export default Example;
