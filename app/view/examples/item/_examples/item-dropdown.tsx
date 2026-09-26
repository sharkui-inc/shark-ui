"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const people = [
  {
    avatar: "https://github.com/vinihvc.png",
    email: "vinihvc@vercel.com",
    username: "vinihvc",
  },
  {
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
    username: "shadcn",
  },
  {
    avatar: "https://github.com/segunadebayo.png",
    email: "segunadebayo@vercel.com",
    username: "segunadebayo",
  },
];

const ItemDropdown = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">
        Select
        <ChevronDownIcon data-icon="inline-end" />
      </Button>
    </MenuTrigger>
    <MenuContent className="w-72">
      <MenuGroup>
        {people.map((person) => (
          <MenuItem key={person.username} value={person.username}>
            <Item className="w-full p-2 [--space:--spacing(2)]">
              <ItemMedia>
                <Avatar className="size-6.5">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-0">
                <ItemTitle>{person.username}</ItemTitle>
                <ItemDescription className="leading-none">
                  {person.email}
                </ItemDescription>
              </ItemContent>
            </Item>
          </MenuItem>
        ))}
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default ItemDropdown;
