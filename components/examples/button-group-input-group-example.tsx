"use client";

import { AudioLinesIcon, ImageIcon, PlusIcon, VideoIcon } from "lucide-react";
import React from "react";
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
import { Toggle } from "@/registry/react/components/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const ButtonGroupInputGroupExample = () => {
  const [voice, setVoice] = React.useState(false);

  return (
    <InputGroup className="max-w-64">
      <InputGroupAddon align="inline-start">
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              aria-label="Voice mode"
              className="size-6 min-w-0 px-0"
              onPressedChange={(pressed) => {
                setVoice(pressed);
              }}
              pressed={voice}
              size="sm"
            >
              <AudioLinesIcon aria-hidden />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Voice Mode</TooltipContent>
        </Tooltip>
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Ask anything"
        placeholder="Ask anything..."
      />
      <Menu>
        <InputGroupAddon align="inline-end">
          <MenuTrigger asChild>
            <InputGroupButton
              aria-label="Add attachment"
              size="icon-xs"
              variant="ghost"
            >
              <PlusIcon aria-hidden />
            </InputGroupButton>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="add-new-item">
              <PlusIcon />
              Upload file
            </MenuItem>
            <MenuItem value="upload-image">
              <ImageIcon />
              Upload image
            </MenuItem>
            <MenuItem value="upload-video">
              <VideoIcon />
              Upload video
            </MenuItem>
            <MenuItem value="upload-audio">
              <AudioLinesIcon />
              Upload audio
            </MenuItem>
          </MenuContent>
        </InputGroupAddon>
      </Menu>
    </InputGroup>
  );
};
