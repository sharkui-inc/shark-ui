"use client";

import { ChevronDownIcon, RocketIcon, SparklesIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <div className="flex min-h-80 w-full justify-center pt-2">
      <NavigationMenu aria-label={values.navigation}>
        <NavigationMenuList>
          <NavigationMenuItem value="overview">
            <NavigationMenuTrigger>
              {values.overview}
              <span className="text-muted-foreground">
                <ChevronDownIcon aria-hidden="true" className="size-3.5" />
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex min-w-56 flex-col gap-1 p-2">
                <NavigationMenuLink
                  className="h-auto items-start"
                  href="#start"
                >
                  <IconTile aria-hidden="true" size="sm">
                    <RocketIcon />
                  </IconTile>
                  <span className="flex flex-col gap-0.5 text-start">
                    <span className="font-medium">{values.quickStart}</span>
                    <span className="text-muted-foreground text-xs">
                      {values.quickStartDescription}
                    </span>
                  </span>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="guides">
            <NavigationMenuTrigger>
              {values.guides}
              <span className="text-muted-foreground">
                <ChevronDownIcon aria-hidden="true" className="size-3.5" />
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex min-w-56 flex-col gap-1 p-2">
                <NavigationMenuLink
                  className="h-auto items-start"
                  href="#updates"
                >
                  <IconTile aria-hidden="true" size="sm">
                    <SparklesIcon />
                  </IconTile>
                  <span className="flex flex-col gap-0.5 text-start">
                    <span className="font-medium">{values.updates}</span>
                    <span className="text-muted-foreground text-xs">
                      {values.updatesDescription}
                    </span>
                  </span>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      guides: "الأدلة",
      navigation: "التنقل الرئيسي",
      overview: "نظرة عامة",
      quickStart: "بداية سريعة",
      quickStartDescription: "ثبّت المكونات وابدأ البناء.",
      updates: "التحديثات",
      updatesDescription: "تعرّف على أحدث ما في Shark UI.",
    },
  },
  en: {
    values: {
      guides: "Guides",
      navigation: "Main navigation",
      overview: "Overview",
      quickStart: "Quick Start",
      quickStartDescription: "Install components and start building.",
      updates: "Updates",
      updatesDescription: "See the latest in Shark UI.",
    },
  },
  he: {
    values: {
      guides: "מדריכים",
      navigation: "ניווט ראשי",
      overview: "סקירה כללית",
      quickStart: "התחלה מהירה",
      quickStartDescription: "התקינו רכיבים והתחילו לבנות.",
      updates: "עדכונים",
      updatesDescription: "גלו מה חדש ב-Shark UI.",
    },
  },
};

export default Example;
