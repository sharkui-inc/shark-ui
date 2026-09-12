"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  CornerDownLeftIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/react/components/command";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

export const CommandExample = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  useEffect(() => {
    let innerId = 0;
    const outerId = requestAnimationFrame(() => {
      innerId = requestAnimationFrame(() => {
        const input = rootRef.current?.querySelector<HTMLInputElement>(
          "[data-slot=command-input]"
        );

        if (document.activeElement === input) {
          input.blur();
        }
      });
    });

    return () => {
      cancelAnimationFrame(outerId);
      cancelAnimationFrame(innerId);
    };
  }, []);

  return (
    <div className={className} ref={rootRef} {...rest}>
      <Command
        autoFocus={false}
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        placeholder="Type a command or search..."
      >
        <CommandInput autoFocus={false} />
        <CommandContent>
          <CommandEmpty />
          <CommandList>
            {collection.group().map(([group, items]) => (
              <CommandGroup heading={group} key={group}>
                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <CommandItem item={item} key={item.value}>
                      <Icon aria-hidden="true" />
                      {item.label}
                      <CommandShortcut>{item.shortcut}</CommandShortcut>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </CommandContent>
        <CommandFooter>
          <div className="flex items-center gap-1.5">
            <Kbd variant="outline">
              <CornerDownLeftIcon />
            </Kbd>
            <span>Select</span>
          </div>
          <div className="flex items-center gap-1.5">
            <KbdGroup>
              <Kbd variant="outline">
                <ArrowUpIcon />
              </Kbd>
              <Kbd variant="outline">
                <ArrowDownIcon />
              </Kbd>
            </KbdGroup>
            <span>Navigate</span>
          </div>
        </CommandFooter>
      </Command>
    </div>
  );
};

const initialItems: {
  group: string;
  icon: LucideIcon;
  label: string;
  shortcut: string;
  value: string;
}[] = [
  {
    group: "Suggestions",
    icon: CalendarIcon,
    label: "Calendar",
    shortcut: "⌘K",
    value: "calendar",
  },
  {
    group: "Suggestions",
    icon: SmileIcon,
    label: "Search emoji",
    shortcut: "⌘E",
    value: "emoji",
  },
  {
    group: "Settings",
    icon: UserIcon,
    label: "Profile",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "Settings",
    icon: CreditCardIcon,
    label: "Billing",
    shortcut: "⌘B",
    value: "billing",
  },
  {
    group: "Settings",
    icon: SettingsIcon,
    label: "Settings",
    shortcut: "⌘,",
    value: "settings",
  },
];
