"use client";

import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex h-72 w-full max-w-xs flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/4">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation defaultValue="home">
          <BottomNavigationList className="absolute">
            <BottomNavigationItem value="home">
              <BottomNavigationItemIcon>
                <HomeIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>
                {values.home}
              </BottomNavigationItemLabel>
            </BottomNavigationItem>
            <BottomNavigationItem value="search">
              <BottomNavigationItemIcon>
                <SearchIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>
                {values.search}
              </BottomNavigationItemLabel>
            </BottomNavigationItem>
            <BottomNavigationItem value="news">
              <BottomNavigationItemIcon>
                <BellIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>
                {values.news}
              </BottomNavigationItemLabel>
            </BottomNavigationItem>
            <BottomNavigationItem value="profile">
              <BottomNavigationItemIcon>
                <UserIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>
                {values.profile}
              </BottomNavigationItemLabel>
            </BottomNavigationItem>
          </BottomNavigationList>
        </BottomNavigation>
      </ScrollArea>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      home: "الرئيسية",
      news: "الأخبار",
      profile: "الملف الشخصي",
      search: "بحث",
    },
  },
  en: {
    values: {
      home: "Home",
      news: "News",
      profile: "Profile",
      search: "Search",
    },
  },
  he: {
    values: {
      home: "בית",
      news: "חדשות",
      profile: "פרופיל",
      search: "חיפוש",
    },
  },
};

export default Example;
