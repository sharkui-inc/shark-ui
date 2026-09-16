"use client";

import { ChevronDownIcon, EllipsisIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const InputGroupDropdown = () => (
  <div className="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="Enter file name" />
      <InputGroupAddon align="inline-end">
        <Menu positioning={{ placement: "bottom-end" }}>
          <MenuTrigger asChild>
            <InputGroupButton aria-label="More" size="icon-xs" variant="ghost">
              <EllipsisIcon aria-hidden />
            </InputGroupButton>
          </MenuTrigger>
          <MenuContent className="w-40">
            <MenuGroup>
              <MenuItem value="settings">Settings</MenuItem>
              <MenuItem value="copy-path">Copy path</MenuItem>
              <MenuItem value="open-location">Open location</MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup>
      <InputGroupInput placeholder="Enter search query" />
      <InputGroupAddon align="inline-end">
        <Menu positioning={{ placement: "bottom-end" }}>
          <MenuTrigger asChild>
            <InputGroupButton className="pr-1.5 text-xs" variant="ghost">
              Search In...
              <ChevronDownIcon aria-hidden className="size-3" />
            </InputGroupButton>
          </MenuTrigger>
          <MenuContent className="w-40">
            <MenuGroup>
              <MenuItem value="documentation">Documentation</MenuItem>
              <MenuItem value="blog-posts">Blog Posts</MenuItem>
              <MenuItem value="changelog">Changelog</MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroupDropdown;
