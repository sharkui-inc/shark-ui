"use client";

import { BlocksIcon, BookOpenIcon, HouseIcon, PaletteIcon } from "lucide-react";
import Link from "next/link";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <div className="flex h-72 w-full max-w-xs flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/4">
    <ScrollArea>
      <div className="h-96" />
      <BottomNavigation value="/docs">
        <BottomNavigationList
          aria-label="Example navigation"
          className="absolute"
        >
          <BottomNavigationItem asChild value="/">
            <Link href="#">
              <BottomNavigationItemIcon>
                <HouseIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>Home</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem asChild value="/docs">
            <Link href="#">
              <BottomNavigationItemIcon>
                <BookOpenIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>Docs</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem asChild value="/docs/components">
            <Link href="#">
              <BottomNavigationItemIcon>
                <BlocksIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>Components</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
          <BottomNavigationItem asChild value="/themes">
            <Link href="#">
              <BottomNavigationItemIcon>
                <PaletteIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>Themes</BottomNavigationItemLabel>
            </Link>
          </BottomNavigationItem>
        </BottomNavigationList>
      </BottomNavigation>
    </ScrollArea>
  </div>
);

export default Example;
