"use client";

import { Tabs, TabsList, TabsTrigger } from "@registry/react/components/tabs";
import { CheckIcon, PaletteIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { TemplatePreviewHost } from "@/app/(app)/themes/_components/template-preview";
import {
  COMPONENTS_SLUG,
  THEME_TEMPLATES,
} from "@/app/(app)/themes/_lib/theme-templates";
import { useResponsiveTab } from "@/app/(app)/themes/_lib/use-optimistic-tab";
import { getActiveThemePreset, THEME_PRESETS } from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const HomeShowcase = (props: React.PropsWithChildren) => {
  const { children } = props;

  const { onValueChange, visibleTab } = useResponsiveTab(COMPONENTS_SLUG);
  const template = THEME_TEMPLATES.find((item) => item.slug === visibleTab);
  const gallery = template ? null : children;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          className="min-w-0 max-lg:hidden"
          onValueChange={onValueChange}
          value={visibleTab}
        >
          <TabsList>
            <TabsTrigger value={COMPONENTS_SLUG}>Preview</TabsTrigger>
            {THEME_TEMPLATES.map((item) => (
              <TabsTrigger key={item.slug} value={item.slug}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex shrink-0 items-center gap-2 self-center sm:self-auto">
          <HomeThemePicker />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild pill size="icon-sm" variant="outline">
                <Link aria-label="Open theme builder" href="/themes">
                  <PaletteIcon aria-hidden />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>View more themes</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className={cn("relative", template && "min-h-[40rem]")}>
        <TemplatePreviewHost
          activeSlug={template?.slug ?? null}
          className={template ? "absolute inset-0" : undefined}
        />
        {gallery}
        {gallery ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-linear-to-t from-background via-background/80 to-transparent lg:h-64"
          />
        ) : null}
      </div>
    </div>
  );
};

const HomeThemePicker = () => {
  const { applyPreset, config } = useThemeCustomization();
  const activePreset = getActiveThemePreset(config);

  return (
    <fieldset className="min-w-0 border-0 p-0">
      <legend className="sr-only">Theme</legend>
      <div className="flex flex-nowrap items-center gap-2">
        {THEME_PRESETS.map((preset) => {
          const selected = activePreset === preset;

          return (
            <Tooltip key={preset.label}>
              <TooltipTrigger asChild>
                <button
                  aria-label={`Apply ${preset.label} theme`}
                  aria-pressed={selected}
                  className={cn(
                    "relative size-6 shrink-0 rounded-full border border-transparent",
                    "cursor-pointer outline-hidden",
                    "transition-shadow duration-100 ease-out",
                    "motion-reduce:transition-none!",
                    "focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
                    selected && "ring-2 ring-primary"
                  )}
                  onClick={() => {
                    applyPreset(preset);
                  }}
                  type="button"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-0 rounded-full",
                      preset.swatchClass
                    )}
                  />
                  {selected ? (
                    <CheckIcon
                      aria-hidden
                      className="absolute inset-0 m-auto size-3 text-primary-foreground"
                    />
                  ) : null}
                </button>
              </TooltipTrigger>
              <TooltipContent>{preset.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </fieldset>
  );
};
