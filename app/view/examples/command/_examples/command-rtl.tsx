"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
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

const CommandRtl = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      className="w-full max-w-md"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <CommandInput placeholder="اكتب أمرًا أو ابحث..." />
      <CommandContent>
        <CommandEmpty>لم يتم العثور على نتائج.</CommandEmpty>
        <CommandList>
          {collection.group().map(([group, items]) => (
            <React.Fragment key={group}>
              <CommandGroup heading={group}>
                {items.map((item) => (
                  <CommandItem item={item} key={item.value}>
                    {item.icon}
                    <span>{item.label}</span>
                    {item.shortcut ? (
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
              {group === "اقتراحات" && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandContent>
    </Command>
  );
};

const initialItems = [
  {
    group: "اقتراحات",
    icon: <CalendarIcon aria-hidden />,
    label: "التقويم",
    value: "calendar",
  },
  {
    group: "اقتراحات",
    icon: <SmileIcon aria-hidden />,
    label: "البحث عن الرموز التعبيرية",
    value: "search-emoji",
  },
  {
    disabled: true,
    group: "اقتراحات",
    icon: <CalculatorIcon aria-hidden />,
    label: "الآلة الحاسبة",
    value: "calculator",
  },
  {
    group: "الإعدادات",
    icon: <UserIcon aria-hidden />,
    label: "الملف الشخصي",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "الإعدادات",
    icon: <CreditCardIcon aria-hidden />,
    label: "الفوترة",
    shortcut: "⌘B",
    value: "billing",
  },
  {
    group: "الإعدادات",
    icon: <SettingsIcon aria-hidden />,
    label: "الإعدادات",
    shortcut: "⌘S",
    value: "settings",
  },
];

export default CommandRtl;
