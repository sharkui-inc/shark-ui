"use client";

import { CopyIcon, EllipsisIcon, FileIcon, FolderIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <InputGroup className="max-w-64">
    <InputGroupInput aria-label="File" placeholder="Select file..." />
    <InputGroupAddon align="inline-end">
      <Menu>
        <MenuTrigger asChild>
          <InputGroupButton
            aria-label="Open menu"
            size="icon-xs"
            variant="ghost"
          >
            <EllipsisIcon aria-hidden />
          </InputGroupButton>
        </MenuTrigger>
        <MenuContent className="min-w-48">
          <MenuItem value="file">
            <FileIcon />
            Select file
          </MenuItem>
          <MenuItem value="folder">
            <FolderIcon />
            Select folder
          </MenuItem>
          <MenuItem value="copy-path">
            <CopyIcon />
            Copy path
          </MenuItem>
        </MenuContent>
      </Menu>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
