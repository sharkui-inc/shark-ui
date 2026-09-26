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
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { DemoAppContent } from "./demo-app-content";
import { DemoPhoneShell } from "./demo-phone-shell";

const Example = () => {
  const [value, setValue] = React.useState("home");

  const handleValueChange = (details: { value: string }) => {
    setValue(details.value);
  };

  return (
    <div className="grid h-svh place-items-center p-6">
      <div className="flex w-full max-w-[20rem] flex-col gap-3">
        <p className="text-muted-foreground text-sm">Selected: {value}</p>
        <DemoPhoneShell>
          <ScrollArea className="h-full **:data-[slot=scroll-area-scrollbar]:hidden">
            <DemoAppContent className="pb-28" />
          </ScrollArea>
          <BottomNavigation
            className="pointer-events-none absolute inset-0 min-h-0"
            onValueChange={handleValueChange}
            value={value}
          >
            <BottomNavigationList
              className="pointer-events-auto absolute"
              variant="inset"
            >
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
        </DemoPhoneShell>
      </div>
    </div>
  );
};

export default Example;
