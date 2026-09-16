"use client";

import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuRadioGroupDemo = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </MenuTrigger>
      <MenuContent className="w-32">
        <MenuGroup heading="Panel Position">
          <MenuRadioGroup
            onValueChange={({ value }) => setPosition(value)}
            value={position}
          >
            <MenuRadioItem value="top">Top</MenuRadioItem>
            <MenuRadioItem value="bottom">Bottom</MenuRadioItem>
            <MenuRadioItem value="right">Right</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

export default MenuRadioGroupDemo;
