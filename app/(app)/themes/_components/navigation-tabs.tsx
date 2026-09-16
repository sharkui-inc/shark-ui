"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Tabs, TabsList, TabsTrigger } from "@registry/react/components/tabs";
import { ChevronsUpDownIcon } from "lucide-react";
import React from "react";
import type { ComponentPreviewItem } from "@/lib/component-previews";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/react/components/command";
import { COMPONENTS_SLUG, THEME_TEMPLATES } from "../_lib/theme-templates";
import { useResponsiveTab } from "../_lib/use-optimistic-tab";
import { TemplatePreviewHost } from "./template-preview";

const PREVIEW_SLUG = "preview";

const TABS = [
  { label: "Components", slug: COMPONENTS_SLUG },
  ...THEME_TEMPLATES.map((template) => ({
    label: template.label,
    slug: template.slug,
  })),
  { label: "Preview", slug: PREVIEW_SLUG },
] as const;

interface NavigationTabsProps {
  componentPreviews: ComponentPreviewItem[];
}

export const NavigationTabs = (props: NavigationTabsProps) => {
  const { componentPreviews } = props;
  const { onValueChange, visibleTab } = useResponsiveTab(COMPONENTS_SLUG);
  const [isCommandOpen, setIsCommandOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] =
    React.useState<ComponentPreviewItem | null>(null);
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: (
      _itemText: string,
      inputValue: string,
      item: ComponentPreviewItem
    ) => contains([item.label, item.slug].join(" "), inputValue),
    initialItems: componentPreviews,
  });

  const handleTabValueChange = (details: { value: string }) => {
    onValueChange(details);

    if (details.value === PREVIEW_SLUG && !selectedComponent) {
      setIsCommandOpen(true);
    }
  };

  const handleComponentValueChange = (details: { value: string[] }) => {
    const [value] = details.value;
    const component = componentPreviews.find((item) => item.value === value);

    if (!component) {
      return;
    }

    React.startTransition(() => {
      setSelectedComponent(component);
      onValueChange({ value: PREVIEW_SLUG });
    });
    setIsCommandOpen(false);
  };

  return (
    <CommandDialog
      onOpenChange={({ open }) => setIsCommandOpen(open)}
      open={isCommandOpen}
    >
      <div className="flex h-full min-h-0 flex-1 flex-col gap-4">
        <Tabs
          className="shrink-0 max-lg:hidden"
          onValueChange={handleTabValueChange}
          value={visibleTab}
        >
          <TabsList>
            {TABS.map((item) => {
              if (item.slug === PREVIEW_SLUG && selectedComponent) {
                return (
                  <ButtonGroup key={item.slug}>
                    <TabsTrigger value={item.slug}>
                      {selectedComponent.title}
                    </TabsTrigger>
                    <Button
                      aria-label="Change component"
                      onClick={() => setIsCommandOpen(true)}
                      size="icon-sm"
                      variant="ghost"
                    >
                      <ChevronsUpDownIcon aria-hidden="true" />
                    </Button>
                  </ButtonGroup>
                );
              }

              return (
                <TabsTrigger key={item.slug} value={item.slug}>
                  {item.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
        <div className="relative min-h-0 flex-1">
          <TemplatePreviewHost
            activeSlug={visibleTab}
            className="absolute inset-0"
            selectedComponent={selectedComponent}
          />
        </div>
        <CommandDialogContent
          description="Choose a component to preview."
          title="Preview component"
        >
          <Command
            collection={collection}
            onInputValueChange={({ inputValue }) => filter(inputValue)}
            onValueChange={handleComponentValueChange}
          >
            <CommandInput placeholder="Search components..." />
            <CommandContent>
              <CommandEmpty>No components found.</CommandEmpty>
              <CommandList className="max-h-none flex-none">
                <CommandGroup heading="Components">
                  {collection.items.map((item) => (
                    <CommandItem item={item} key={item.value}>
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </CommandContent>
          </Command>
        </CommandDialogContent>
      </div>
    </CommandDialog>
  );
};
