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
import { PreviewFrame } from "./preview-frame";

const Example = () => (
  <PreviewFrame scrollable={false}>
    <BottomNavigation
      className="absolute inset-x-0 bottom-0 min-h-0"
      value="/search"
    >
      <BottomNavigationList aria-label="Music navigation" className="absolute">
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
  </PreviewFrame>
);

export default Example;
