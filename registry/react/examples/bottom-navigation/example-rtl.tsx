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
import {
  DEMO_MUSIC_ART,
  DemoAppContent,
  type DemoAppContentLabels,
} from "./demo-app-content";
import { DemoPhoneShell } from "./demo-phone-shell";

const USER_AVATAR =
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Maya+Chen&waveColor=2b6cb0";

const englishPlaylists = [
  { image: DEMO_MUSIC_ART[4], title: "Reframed" },
  { image: DEMO_MUSIC_ART[5], title: "Radar" },
  { image: DEMO_MUSIC_ART[1], title: "Deep Current" },
  { image: DEMO_MUSIC_ART[2], title: "Soft Circuits" },
  { image: DEMO_MUSIC_ART[0], title: "Afterglow" },
  { image: DEMO_MUSIC_ART[3], title: "Safe Harbor" },
  { image: DEMO_MUSIC_ART[6], title: "Night Bus" },
  { image: DEMO_MUSIC_ART[7], title: "Coast FM" },
] as const;

const englishTracks = [
  { artist: "Mira Vale", image: DEMO_MUSIC_ART[0], title: "Afterglow" },
  { artist: "Northbound", image: DEMO_MUSIC_ART[1], title: "Night Drive" },
  { artist: "Juniper Club", image: DEMO_MUSIC_ART[2], title: "Velvet Static" },
  { artist: "Morrow", image: DEMO_MUSIC_ART[3], title: "Safe Harbor" },
  { artist: "Kite Theory", image: DEMO_MUSIC_ART[4], title: "Paper Planets" },
  { artist: "Lumen", image: DEMO_MUSIC_ART[5], title: "Bloom in Reverse" },
  { artist: "Relay", image: DEMO_MUSIC_ART[6], title: "Last Stop" },
  { artist: "Coast FM", image: DEMO_MUSIC_ART[7], title: "Salt Air" },
  { artist: "Mira Vale", image: DEMO_MUSIC_ART[0], title: "Signal Bloom" },
  { artist: "Northbound", image: DEMO_MUSIC_ART[1], title: "New Frequency" },
] as const;

const Example = () => {
  const { locale } = usePreviewLocale();

  const { content, values } = translations[locale];

  return (
    <div className="grid h-svh place-items-center p-6">
      <DemoPhoneShell>
        <ScrollArea className="h-full **:data-[slot=scroll-area-scrollbar]:hidden">
          <DemoAppContent className="pb-28" labels={content} />
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
            <BottomNavigationItem value="library">
              <BottomNavigationItemIcon>
                <LibraryIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>
                {values.library}
              </BottomNavigationItemLabel>
            </BottomNavigationItem>
            <BottomNavigationItem value="you">
              <BottomNavigationItemIcon>
                <UserIcon />
              </BottomNavigationItemIcon>
              <BottomNavigationItemLabel>
                {values.you}
              </BottomNavigationItemLabel>
            </BottomNavigationItem>
          </BottomNavigationList>
        </BottomNavigation>
      </DemoPhoneShell>
    </div>
  );
};

const translations: Record<
  "ar" | "en" | "he",
  {
    content: DemoAppContentLabels;
    values: {
      home: string;
      library: string;
      search: string;
      you: string;
    };
  }
> = {
  ar: {
    content: {
      avatarSrc: USER_AVATAR,
      greeting: "الرئيسية",
      jumpBackIn: "عد من حيث توقفت",
      name: "مايا تشن",
      playlists: [
        { image: DEMO_MUSIC_ART[4], title: "إعادة التشكيل" },
        { image: DEMO_MUSIC_ART[5], title: "رادار" },
        { image: DEMO_MUSIC_ART[1], title: "تيار عميق" },
        { image: DEMO_MUSIC_ART[2], title: "دوائر ناعمة" },
        { image: DEMO_MUSIC_ART[0], title: "Afterglow" },
        { image: DEMO_MUSIC_ART[3], title: "مرفأ آمن" },
        { image: DEMO_MUSIC_ART[6], title: "حافلة الليل" },
        { image: DEMO_MUSIC_ART[7], title: "ساحل FM" },
      ],
      recentlyPlayed: "شُغّل مؤخراً",
      tracks: englishTracks,
    },
    values: {
      home: "الرئيسية",
      library: "المكتبة",
      search: "بحث",
      you: "أنت",
    },
  },
  en: {
    content: {
      avatarSrc: USER_AVATAR,
      greeting: "Home",
      jumpBackIn: "Jump back in",
      name: "Maya Chen",
      playlists: englishPlaylists,
      recentlyPlayed: "Recently played",
      tracks: englishTracks,
    },
    values: {
      home: "Home",
      library: "Library",
      search: "Search",
      you: "You",
    },
  },
  he: {
    content: {
      avatarSrc: USER_AVATAR,
      greeting: "בית",
      jumpBackIn: "חזרו להאזין",
      name: "מאיה צ׳ן",
      playlists: [
        { image: DEMO_MUSIC_ART[4], title: "ממוסגר מחדש" },
        { image: DEMO_MUSIC_ART[5], title: "מכ״ם" },
        { image: DEMO_MUSIC_ART[1], title: "זרם עמוק" },
        { image: DEMO_MUSIC_ART[2], title: "מעגלים רכים" },
        { image: DEMO_MUSIC_ART[0], title: "Afterglow" },
        { image: DEMO_MUSIC_ART[3], title: "נמל בטוח" },
        { image: DEMO_MUSIC_ART[6], title: "אוטובוס לילה" },
        { image: DEMO_MUSIC_ART[7], title: "קוסט FM" },
      ],
      recentlyPlayed: "נוגנו לאחרונה",
      tracks: englishTracks,
    },
    values: {
      home: "בית",
      library: "ספרייה",
      search: "חיפוש",
      you: "אתה",
    },
  },
};

export default Example;
