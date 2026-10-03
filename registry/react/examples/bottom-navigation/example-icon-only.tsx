import { HouseIcon, LibraryIcon, SearchIcon, UserIcon } from "lucide-react";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { PreviewFrame } from "./preview-frame";

const Example = () => (
  <PreviewFrame scrollable={false}>
    <BottomNavigation
      className="absolute inset-x-0 bottom-0 min-h-0"
      defaultValue="home"
    >
      <BottomNavigationList className="absolute">
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
  </PreviewFrame>
);

export default Example;
