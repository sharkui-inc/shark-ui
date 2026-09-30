"use client";

import { HouseIcon, LibraryIcon, SearchIcon, UserIcon } from "lucide-react";
import React from "react";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { PreviewFrame } from "./preview-frame";

const Example = () => {
  const [value, setValue] = React.useState("home");

  const handleValueChange = (details: { value: string }) => {
    setValue(details.value);
  };

  return (
    <PreviewFrame scrollable={false}>
      <BottomNavigation
        className="absolute inset-x-0 bottom-0 min-h-0"
        onValueChange={handleValueChange}
        value={value}
      >
        <BottomNavigationList className="absolute">
          <BottomNavigationItem value="home">
            <BottomNavigationItemIcon>
              <HouseIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>Home</BottomNavigationItemLabel>
          </BottomNavigationItem>
          <BottomNavigationItem value="search">
            <BottomNavigationItemIcon>
              <SearchIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>Search</BottomNavigationItemLabel>
          </BottomNavigationItem>
          <BottomNavigationItem value="library">
            <BottomNavigationItemIcon>
              <LibraryIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>Library</BottomNavigationItemLabel>
          </BottomNavigationItem>
          <BottomNavigationItem value="you">
            <BottomNavigationItemIcon>
              <UserIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>You</BottomNavigationItemLabel>
          </BottomNavigationItem>
        </BottomNavigationList>
      </BottomNavigation>
    </PreviewFrame>
  );
};

export default Example;
