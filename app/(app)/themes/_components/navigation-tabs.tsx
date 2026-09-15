"use client";

import { Tabs, TabsList, TabsTrigger } from "@registry/react/components/tabs";
import { COMPONENTS_SLUG, THEME_TEMPLATES } from "../_lib/theme-templates";
import { useResponsiveTab } from "../_lib/use-optimistic-tab";
import { TemplatePreviewHost } from "./template-preview";

const TABS = [
  { label: "Components", slug: COMPONENTS_SLUG },
  ...THEME_TEMPLATES.map((template) => ({
    label: template.label,
    slug: template.slug,
  })),
] as const;

export const NavigationTabs = () => {
  const { onValueChange, visibleTab } = useResponsiveTab(COMPONENTS_SLUG);

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col gap-4">
      <Tabs
        className="shrink-0 max-lg:hidden"
        onValueChange={onValueChange}
        value={visibleTab}
      >
        <TabsList>
          {TABS.map((item) => (
            <TabsTrigger key={item.slug} value={item.slug}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
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
