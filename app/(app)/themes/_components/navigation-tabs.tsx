"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { COMPONENTS_SLUG, THEME_TEMPLATES } from "../_lib/theme-templates";
import { useResponsiveTab } from "../_lib/use-optimistic-tab";
import { TemplatePreviewHost } from "./template-preview";

const TABS = [
  { label: "Preview", slug: COMPONENTS_SLUG },
  ...THEME_TEMPLATES.map((template) => ({
    label: template.label,
    slug: template.slug,
  })),
] as const;

export const NavigationTabs = () => {
  const { onValueChange, visibleTab } = useResponsiveTab(COMPONENTS_SLUG);

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col gap-4">
      <fieldset className="hidden w-fit shrink-0 items-center gap-x-0.5 text-muted-foreground lg:flex">
        <legend className="sr-only">Preview template</legend>
        {TABS.map((item) => {
          const selected = visibleTab === item.slug;

          return (
            <Button
              aria-pressed={selected}
              className={cn(
                "h-8 shrink-0 grow border border-transparent px-3",
                selected && "bg-accent text-foreground"
              )}
              key={item.slug}
              onClick={() => onValueChange({ value: item.slug })}
              size="sm"
              variant="ghost"
            >
              {item.label}
            </Button>
          );
        })}
      </fieldset>
      <div className="relative min-h-0 flex-1">
        <TemplatePreviewHost
          activeSlug={visibleTab}
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};
