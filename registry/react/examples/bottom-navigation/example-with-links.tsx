"use client";

import { HouseIcon, LibraryIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
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

const Example = () => (
  <div className="grid h-svh place-items-center p-6">
    <DemoPhoneShell className="flex flex-col">
      <ScrollArea className="min-h-0 flex-1 **:data-[slot=scroll-area-scrollbar]:hidden">
        <DemoAppContent />
      </ScrollArea>
      <BottomNavigation className="shrink-0" value="/search">
        <BottomNavigationList aria-label="Music navigation" className="static">
          <BottomNavigationItem asChild value="/">
            <Link href="#">
              <BottomNavigationItemIcon>
                <HouseIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>Home</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem asChild value="/search">
            <Link href="#">
              <BottomNavigationItemIcon>
                <SearchIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>Search</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem asChild value="/library">
            <Link href="#">
              <BottomNavigationItemIcon>
                <LibraryIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>Library</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem asChild value="/you">
            <Link href="#">
              <BottomNavigationItemIcon>
                <UserIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>You</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
        </BottomNavigationList>
      </BottomNavigation>
    </DemoPhoneShell>
  </div>
);

export default Example;
