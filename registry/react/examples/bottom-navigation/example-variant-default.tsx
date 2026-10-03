import { HouseIcon, LibraryIcon, SearchIcon, UserIcon } from "lucide-react";
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
      defaultValue="home"
    >
      <BottomNavigationList className="absolute" variant="default">
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

export default Example;
