"use client";

import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

export const MusicHeader = () => (
  <header className="flex h-12 shrink-0 items-center justify-between gap-2 border-b px-4">
    <div className="flex items-center gap-2">
      <ButtonGroup>
        <Button aria-label="Go back" size="icon-sm" variant="ghost">
          <ChevronLeftIcon aria-hidden="true" />
        </Button>
        <Button aria-label="Go forward" size="icon-sm" variant="ghost">
          <ChevronRightIcon aria-hidden="true" />
        </Button>
      </ButtonGroup>
    </div>
    <div className="flex items-center gap-2">
      <InputGroup className="w-48" size="sm">
        <InputGroupAddon>
          <SearchIcon aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupInput
          aria-label="Search music"
          defaultValue=""
          placeholder="Search"
          type="search"
        />
      </InputGroup>
      <Menu>
        <MenuTrigger asChild>
          <Button
            aria-label="Open profile menu"
            pill
            size="icon-sm"
            variant="ghost"
          >
            <Avatar size="sm">
              <AvatarImage alt="" src="/images/gradients/rose.svg" />
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>
          </Button>
        </MenuTrigger>
        <MenuContent className="w-52">
          <MenuGroup heading="Mira Vale">
            <MenuItem value="profile">Profile</MenuItem>
            <MenuItem value="followers">Friends activity</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem value="settings">Account settings</MenuItem>
          </MenuGroup>
        </MenuContent>
      </Menu>
    </div>
  </header>
);
