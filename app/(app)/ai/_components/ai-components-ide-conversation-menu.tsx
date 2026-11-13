"use client";

import {
  ArchiveIcon,
  CopyIcon,
  EyeIcon,
  GitForkIcon,
  PencilIcon,
  PinIcon,
  ShareIcon,
  Trash2Icon,
} from "lucide-react";
import type React from "react";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

interface AiComponentsIdeConversationMenuProps {
  id: string;
  onRename?: () => void;
  positioning?: React.ComponentProps<typeof Menu>["positioning"];
  trigger: React.ReactElement;
}

export const AiComponentsIdeConversationMenu = (
  props: AiComponentsIdeConversationMenuProps
) => {
  const {
    id,
    onRename,
    positioning = { placement: "bottom-end" },
    trigger,
  } = props;

  return (
    <Menu positioning={positioning}>
      <MenuTrigger asChild>{trigger}</MenuTrigger>
      <MenuContent className="min-w-56">
        <MenuList>
          <MenuGroup>
            <MenuItem onSelect={onRename} value={`${id}-rename`}>
              <PencilIcon aria-hidden="true" />
              Rename
              <MenuShortcut>R</MenuShortcut>
            </MenuItem>
            <MenuItem value={`${id}-pin`}>
              <PinIcon aria-hidden="true" />
              Pin
              <MenuShortcut>P</MenuShortcut>
            </MenuItem>
            <MenuItem value={`${id}-unread`}>
              <EyeIcon aria-hidden="true" />
              Mark as unread
              <MenuShortcut>U</MenuShortcut>
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuSub>
              <MenuSubTrigger>
                <GitForkIcon aria-hidden="true" />
                Fork
              </MenuSubTrigger>
              <MenuSubContent>
                <MenuList>
                  <MenuItem value={`${id}-fork-thread`}>Fork thread</MenuItem>
                  <MenuItem value={`${id}-fork-branch`}>
                    Fork as branch
                  </MenuItem>
                </MenuList>
              </MenuSubContent>
            </MenuSub>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem value={`${id}-share`}>
              <ShareIcon aria-hidden="true" />
              Share
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger>
                <CopyIcon aria-hidden="true" />
                Copy
              </MenuSubTrigger>
              <MenuSubContent>
                <MenuList>
                  <MenuItem value={`${id}-copy-link`}>Copy link</MenuItem>
                  <MenuItem value={`${id}-copy-id`}>Copy session id</MenuItem>
                  <MenuItem value={`${id}-copy-title`}>Copy title</MenuItem>
                </MenuList>
              </MenuSubContent>
            </MenuSub>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem value={`${id}-archive`}>
              <ArchiveIcon aria-hidden="true" />
              Archive
              <MenuShortcut>A</MenuShortcut>
            </MenuItem>
            <MenuItem value={`${id}-delete`} variant="destructive">
              <Trash2Icon aria-hidden="true" />
              Permanently delete
              <MenuShortcut>D</MenuShortcut>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
