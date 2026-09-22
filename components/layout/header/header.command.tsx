"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRightIcon,
  BlocksIcon,
  CheckIcon,
  CircleDashed,
  CircleDotDashed,
  CornerDownLeftIcon,
  FileTextIcon,
  SquarePenIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { DOCS_NEW_ITEMS, DOCS_UPDATED_ITEMS } from "@/config/docs-nav";
import type { NavItem } from "@/config/navigation";
import type { CommandCompositionItem } from "@/lib/composition-catalog";
import type { source } from "@/lib/fumadocs";
import {
  createShadcnAddCommand,
  formatShadcnCommandDisplay,
} from "@/lib/installation-command";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/react/components/command";
import {
  useFormatHotkey,
  useHotkey,
} from "@/registry/react/components/hotkeys";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import { Status } from "@/registry/react/components/status";
import { useCopyToClipboard } from "@/registry/react/hooks/use-copy-to-clipboard";
import { useConfig } from "@/store/config";

interface PageItem {
  group: string;
  installName?: string;
  isComponent: boolean;
  keywords?: string;
  label: string;
  url: string;
  value: string;
}

const GROUP_ICON_MAP: Record<string, LucideIcon> = {
  "ai components": CircleDashed,
  blocks: BlocksIcon,
  components: CircleDashed,
  forms: SquarePenIcon,
  helpers: CircleDotDashed,
  hooks: CircleDotDashed,
  migration: ArrowLeftRightIcon,
  pages: FileTextIcon,
  utilities: CircleDotDashed,
};

const COMPONENT_PAGE_PATHS = [
  "/components/",
  "/ai-components/",
  "/helpers/",
  "/utilities/",
  "/hooks/",
];

const isComponentPage = (url: string) =>
  COMPONENT_PAGE_PATHS.some((path) => url.includes(path));

const isFormFieldFocused = () => {
  const target = document.activeElement;

  return (
    (target instanceof HTMLElement && target.isContentEditable) ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
};

interface HeaderCommandProps
  extends React.ComponentProps<typeof CommandDialog> {
  /**
   * Blocks indexed for search
   */
  compositionItems: CommandCompositionItem[];
  /**
   * The navigation items to display in the command menu
   */
  navItems: NavItem[];
  /**
   * The tree of pages to display in the command menu
   *
   * @default source.pageTree
   */
  tree: typeof source.pageTree;
}

const getCommandItems = ({
  compositionItems,
  navItems,
  tree,
}: Pick<
  HeaderCommandProps,
  "compositionItems" | "navItems" | "tree"
>): PageItem[] => [
  ...navItems.map((item) => ({
    group: "Pages",
    isComponent: false,
    label: item.label,
    url: item.href,
    value: item.href,
  })),
  ...tree.children.flatMap((group) => {
    if (group.type !== "folder") {
      return [];
    }

    return group.children.flatMap((item) => {
      if (item.type !== "page") {
        return [];
      }

      return {
        group: String(group.name),
        isComponent: isComponentPage(item.url),
        label: item.name?.toString() || "",
        url: item.url,
        value: item.url,
      };
    });
  }),
  ...compositionItems,
];

export const HeaderCommand = (props: HeaderCommandProps) => {
  const { compositionItems, navItems, tree, ...rest } = props;

  const router = useRouter();

  const formatHotkey = useFormatHotkey();
  const { packageManager } = useConfig();
  const clipboard = useCopyToClipboard({ timeout: 400 });

  const [isOpen, setIsOpen] = React.useState(false);

  const { contains } = useFilter({ sensitivity: "base" });

  React.useEffect(() => {
    if (!isOpen) {
      clipboard.setValue("");
    }
  }, [clipboard.setValue, isOpen]);

  const groupedItems = React.useMemo(
    () => getCommandItems({ compositionItems, navItems, tree }),
    [compositionItems, navItems, tree]
  );

  const filterItems = React.useCallback(
    (_itemText: string, inputValue: string, item: PageItem) =>
      contains(
        [item.label, item.keywords ?? "", item.url].join(" "),
        inputValue
      ),
    [contains]
  );

  const { collection, filter } = useListCollection({
    filter: filterItems,
    groupBy: (item) => item.group,
    initialItems: groupedItems,
  });

  const toggleOpen = React.useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  useHotkey({
    action: toggleOpen,
    enabled: () => !isFormFieldFocused(),
    hotkey: "mod+K",
    options: { preventDefault: true },
  });

  useHotkey({
    action: toggleOpen,
    hotkey: "/",
    options: { preventDefault: true },
  });

  useHotkey({
    action: () => clipboard.copy(),
    enabled: () => isOpen && Boolean(clipboard.value),
    hotkey: "mod+C",
    options: { preventDefault: true },
  });

  return (
    <CommandDialog
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
      {...rest}
    >
      <CommandDialogTrigger asChild>
        <Button
          className={cn(
            "justify-between",
            "bg-white dark:bg-input/32",
            "w-full md:w-48 lg:w-40"
          )}
          variant="outline"
        >
          <span className="inline-flex">Search...</span>
          <KbdGroup>
            <Kbd variant="outline">{formatHotkey("mod")}</Kbd>
            <Kbd variant="outline">{formatHotkey("K")}</Kbd>
          </KbdGroup>
        </Button>
      </CommandDialogTrigger>
      <CommandDialogContent>
        <Command
          collection={collection}
          onHighlightChange={(details) => {
            if (!details.highlightedValue) {
              clipboard.setValue("");
              return;
            }
            const item = groupedItems.find(
              (i) => i.url === details.highlightedValue
            );
            if (!item?.isComponent) {
              clipboard.setValue("");
              return;
            }
            const componentName =
              item.installName ??
              item.url.split("/").at(-1)?.split("?")[0] ??
              "";
            const addCmd = createShadcnAddCommand(packageManager);
            clipboard.setValue(`${addCmd} @shark/${componentName}`);
          }}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={(e) => {
            router.push(e.items[0].url);
            requestAnimationFrame(() => {
              setIsOpen(false);
            });
          }}
          placeholder="Search docs…"
        >
          <CommandInput />
          <CommandContent>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {collection.group().map(([group, items]) => (
                <CommandGroup heading={group} key={group}>
                  {items.map((item) => {
                    const ItemIcon =
                      GROUP_ICON_MAP[item.group.toLowerCase()] ?? FileTextIcon;
                    return (
                      <CommandItem item={item} key={item.value}>
                        <ItemIcon aria-hidden className="size-3.5" />
                        {item.label}
                        {DOCS_UPDATED_ITEMS.includes(item.url) && (
                          <>
                            <Status className="ms-auto" size="sm" />
                            <span className="sr-only">Updated</span>
                          </>
                        )}
                        {DOCS_NEW_ITEMS.includes(item.url) && (
                          <>
                            <Status
                              className="ms-auto"
                              size="sm"
                              variant="info"
                            />
                            <span className="sr-only">New</span>
                          </>
                        )}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandContent>
          <CommandFooter>
            <div className="flex items-center gap-2">
              <Kbd variant="outline">
                <CornerDownLeftIcon className="size-3" />
              </Kbd>
              <span className="whitespace-nowrap">Go to Page</span>
            </div>
            {Boolean(clipboard.value) &&
              (clipboard.copied ? (
                <div className="flex items-center gap-2">
                  <CheckIcon className="size-3" />
                  <span className="whitespace-nowrap">Copied to clipboard</span>
                </div>
              ) : (
                <div className="flex min-w-0 items-center gap-2">
                  <span className="truncate font-mono">
                    {formatShadcnCommandDisplay(clipboard.value)}
                  </span>
                  <Kbd variant="outline">{formatHotkey("mod+C")}</Kbd>
                </div>
              ))}
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};
