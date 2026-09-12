"use client";

import { Tabs, TabsList, TabsTrigger } from "@registry/react/components/tabs";
import { useEffect, useState } from "react";
import { COMPONENTS_SLUG, THEME_TEMPLATES } from "../_lib/theme-templates";
import { useOptimisticTab } from "../_lib/use-optimistic-tab";
import { TemplatePreviewHost } from "./template-preview";

const LG_MEDIA = "(min-width: 1024px)";

const TABS = [
  { label: "Components", slug: COMPONENTS_SLUG },
  ...THEME_TEMPLATES.map((template) => ({
    label: template.label,
    slug: template.slug,
  })),
] as const;

const useIsLg = () => {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(LG_MEDIA);
    const onChange = () => {
      setIsLg(mediaQuery.matches);
    };

    onChange();
    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return isLg;
};

export const NavigationTabs = () => {
  const isLg = useIsLg();
  const { onValueChange, optimisticTab } = useOptimisticTab(COMPONENTS_SLUG);
  const visibleTab = isLg ? optimisticTab : COMPONENTS_SLUG;

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col gap-4">
      <Tabs
        className="shrink-0"
        onValueChange={onValueChange}
        value={visibleTab}
      >
        <div className="max-w-full overflow-x-auto">
          <TabsList>
            {TABS.map((item) => (
              <TabsTrigger
                className={
                  item.slug === COMPONENTS_SLUG ? undefined : "max-lg:hidden"
                }
                key={item.slug}
                value={item.slug}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
      <div className="relative min-h-0 flex-1">
        <TemplatePreviewHost
          activeSlug={visibleTab}
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};
