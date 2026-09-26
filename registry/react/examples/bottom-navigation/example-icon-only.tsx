import { HouseIcon, LibraryIcon, SearchIcon, UserIcon } from "lucide-react";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
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
      <BottomNavigation className="shrink-0" defaultValue="home">
        <BottomNavigationList className="static">
          <BottomNavigationItem aria-label="Home" value="home">
            <BottomNavigationItemIcon>
              <HouseIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
          <BottomNavigationItem aria-label="Search" value="search">
            <BottomNavigationItemIcon>
              <SearchIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
          <BottomNavigationItem aria-label="Library" value="library">
            <BottomNavigationItemIcon>
              <LibraryIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
          <BottomNavigationItem aria-label="You" value="you">
            <BottomNavigationItemIcon>
              <UserIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
        </BottomNavigationList>
      </BottomNavigation>
    </DemoPhoneShell>
  </div>
);

export default Example;
