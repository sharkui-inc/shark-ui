import { HouseIcon, LibraryIcon, SearchIcon, UserIcon } from "lucide-react";
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
    <DemoPhoneShell>
      <ScrollArea className="h-full **:data-[slot=scroll-area-scrollbar]:hidden">
        <DemoAppContent className="pb-28" />
      </ScrollArea>
      <BottomNavigation
        className="pointer-events-none absolute inset-0 min-h-0"
        defaultValue="home"
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
);

export default Example;
