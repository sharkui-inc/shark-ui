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
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { DemoAppContent } from "./demo-app-content";
import { DemoPhoneShell } from "./demo-phone-shell";

const Example = () => {
  const { locale } = usePreviewLocale();
  const labels = navigationLabels[locale];

  return (
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
              <BottomNavigationItemLabel>
                {labels.home}
              </BottomNavigationItemLabel>
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
              <BottomNavigationItemLabel>
                {labels.you}
              </BottomNavigationItemLabel>
            </BottomNavigationItem>
          </BottomNavigationList>
        </BottomNavigation>
      </DemoPhoneShell>
    </div>
  );
};

const navigationLabels = {
  ar: { home: "الرئيسية", library: "المكتبة", search: "بحث", you: "أنت" },
  en: { home: "Home", library: "Library", search: "Search", you: "You" },
  he: { home: "בית", library: "ספרייה", search: "חיפוש", you: "אתה" },
} as const;

export default Example;
