"use client";

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const ButtonGroupDropdownMenuExample = () => (
  <ButtonGroup>
    <Button variant="outline">Follow</Button>
    <Menu positioning={{ placement: "bottom-end" }}>
      <MenuTrigger render={<Button className="pl-2" variant="outline" />}>
        <ChevronDownIcon />
      </MenuTrigger>
      <MenuContent className="w-44" positioning={{ placement: "bottom-end" }}>
        <MenuGroup>
          <MenuItem value="mute-conversation">
            <VolumeOffIcon />
            Mute Conversation
          </MenuItem>
          <MenuItem value="mark-as-read">
            <CheckIcon />
            Mark as Read
          </MenuItem>
          <MenuItem value="report-conversation">
            <AlertTriangleIcon />
            Report Conversation
          </MenuItem>
          <MenuItem value="block-user">
            <UserRoundXIcon />
            Block User
          </MenuItem>
          <MenuItem value="share-conversation">
            <ShareIcon />
            Share Conversation
          </MenuItem>
          <MenuItem value="copy-conversation">
            <CopyIcon />
            Copy Conversation
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem value="delete-conversation" variant="destructive">
            <TrashIcon />
            Delete Conversation
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  </ButtonGroup>
);

export default ButtonGroupDropdownMenuExample;
