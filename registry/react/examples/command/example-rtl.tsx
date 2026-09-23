"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/react/components/command";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems: values.items,
  });

  return (
    <Command
      className="w-full max-w-md"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <CommandInput placeholder={values.placeholder} />
      <CommandContent>
        <CommandEmpty>{values.empty}</CommandEmpty>
        <CommandList>
          {collection.group().map(([group, items], index) => (
            <CommandGroup heading={group} key={group}>
              {items.map((item) => (
                <CommandItem item={item} key={item.value}>
                  {item.label}
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
              {index < collection.group().length - 1 && <CommandSeparator />}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandContent>
    </Command>
  );
};

const translations = {
  ar: {
    values: {
      empty: "لم يتم العثور على أوامر.",
      items: [
        { group: "اقتراحات", label: "لينير", shortcut: "⌘ل", value: "linear" },
        { group: "اقتراحات", label: "فيغما", shortcut: "⌘ف", value: "figma" },
        {
          group: "الإعدادات",
          label: "الإعدادات",
          shortcut: "⌘,",
          value: "settings",
        },
        {
          group: "الإعدادات",
          label: "المساعدة",
          shortcut: "⌘?",
          value: "help",
        },
      ],
      placeholder: "ابحث عن أمر...",
    },
  },
  en: {
    values: {
      empty: "No commands found.",
      items: [
        {
          group: "Suggestions",
          label: "Linear",
          shortcut: "⌘L",
          value: "linear",
        },
        {
          group: "Suggestions",
          label: "Figma",
          shortcut: "⌘F",
          value: "figma",
        },
        {
          group: "Settings",
          label: "Settings",
          shortcut: "⌘,",
          value: "settings",
        },
        { group: "Settings", label: "Help", shortcut: "⌘?", value: "help" },
      ],
      placeholder: "Search commands...",
    },
  },
  he: {
    values: {
      empty: "לא נמצאו פקודות.",
      items: [
        { group: "הצעות", label: "ליניאר", shortcut: "⌘ל", value: "linear" },
        { group: "הצעות", label: "פיגמה", shortcut: "⌘פ", value: "figma" },
        { group: "הגדרות", label: "הגדרות", shortcut: "⌘,", value: "settings" },
        { group: "הגדרות", label: "עזרה", shortcut: "⌘?", value: "help" },
      ],
      placeholder: "חיפוש פקודות...",
    },
  },
};

export default Example;
