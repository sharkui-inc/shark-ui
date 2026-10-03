"use client";

import { HouseIcon, LibraryIcon, SearchIcon, UserIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { PreviewFrame } from "./preview-frame";

const Example = () => {
  const { dir, locale } = usePreviewLocale();
  const labels = navigationLabels[locale];

  return (
    <PreviewFrame dir={dir}>
      <BottomNavigation
        className="absolute inset-x-0 bottom-0 min-h-0"
        defaultValue="home"
      >
        <BottomNavigationList className="absolute">
          <BottomNavigationItem value="home">
            <BottomNavigationItemIcon>
              <HouseIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>{labels.home}</BottomNavigationItemLabel>
          </BottomNavigationItem>
          <BottomNavigationItem value="search">
            <BottomNavigationItemIcon>
              <SearchIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>
              {labels.search}
            </BottomNavigationItemLabel>
          </BottomNavigationItem>
          <BottomNavigationItem value="library">
            <BottomNavigationItemIcon>
              <LibraryIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>
              {labels.library}
            </BottomNavigationItemLabel>
          </BottomNavigationItem>
          <BottomNavigationItem value="you">
            <BottomNavigationItemIcon>
              <UserIcon />
            </BottomNavigationItemIcon>
            <BottomNavigationItemLabel>{labels.you}</BottomNavigationItemLabel>
          </BottomNavigationItem>
        </BottomNavigationList>
      </BottomNavigation>
    </PreviewFrame>
  );
};

const navigationLabels = {
  ar: { home: "الرئيسية", library: "المكتبة", search: "بحث", you: "أنت" },
  en: { home: "Home", library: "Library", search: "Search", you: "You" },
  he: { home: "בית", library: "ספרייה", search: "חיפוש", you: "אתה" },
} as const;

export default Example;
