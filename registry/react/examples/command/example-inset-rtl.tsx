"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/react/components/command";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];
  const [open, setOpen] = React.useState(false);
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems: values.items,
  });

  return (
    <CommandDialog onOpenChange={({ open: next }) => setOpen(next)} open={open}>
      <CommandDialogTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </CommandDialogTrigger>
      <CommandDialogContent variant="inset">
        <Command
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={() => setOpen(false)}
        >
          <CommandInput placeholder={values.placeholder} />
          <CommandContent>
            <CommandEmpty>{values.empty}</CommandEmpty>
            <CommandList>
              {collection.group().map(([group, items]) => (
                <CommandGroup heading={group} key={group}>
                  {items.map((item) => (
                    <CommandItem item={item} key={item.value}>
                      {item.label}
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandContent>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};

const translations = {
  ar: {
    values: {
      empty: "لا نتائج",
      items: [
        { group: "ملف", label: "جديد", shortcut: "⌘N", value: "new" },
        { group: "ملف", label: "حفظ", shortcut: "⌘S", value: "save" },
        { group: "تحرير", label: "تراجع", shortcut: "⌘Z", value: "undo" },
      ],
      open: "فتح",
      placeholder: "ابحث عن الأوامر...",
    },
  },
  en: {
    values: {
      empty: "No results found.",
      items: [
        { group: "File", label: "New File", shortcut: "⌘N", value: "new" },
        { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
        { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
      ],
      open: "Open",
      placeholder: "Search commands...",
    },
  },
  he: {
    values: {
      empty: "אין תוצאות",
      items: [
        { group: "קובץ", label: "חדש", shortcut: "⌘N", value: "new" },
        { group: "קובץ", label: "שמור", shortcut: "⌘S", value: "save" },
        { group: "עריכה", label: "בטל", shortcut: "⌘Z", value: "undo" },
      ],
      open: "פתח",
      placeholder: "חפש פקודות...",
    },
  },
};

export default Example;
