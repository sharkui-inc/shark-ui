"use client";

import type { Root } from "fumadocs-core/page-tree";
import { usePathname } from "next/navigation";
import type React from "react";
import { NavLink } from "@/components/nav-link";
import { DOCS_NEW_ITEMS, DOCS_UPDATED_ITEMS } from "@/config/docs-nav";
import { getActiveNavHref } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { Status } from "@/registry/react/components/status";

interface MobileNavProps extends React.ComponentProps<typeof Button> {
  /**
   * The items to display in the mobile navigation.
   */
  items: { href: string; label: string }[];
  /**
   * The tree of pages to display in the mobile navigation.
   */
  tree: Root;
}

export const MobileNav = (props: MobileNavProps) => {
  const { tree, items, className, ...rest } = props;

  const pathname = usePathname();
  const activeHref = getActiveNavHref(pathname, items);

  return (
    <Popover
      {...rest}
      positioning={{
        getAnchorElement: () =>
          document.querySelector<HTMLElement>('[data-slot="site-header"]'),
        gutter: 0,
        overflowPadding: 0,
        placement: "bottom",
      }}
    >
      <PopoverTrigger asChild>
        <Button
          aria-label="Toggle Menu"
          className={cn("group", "hitbox-2", "pe-0", className)}
          size="icon-sm"
          variant="ghost"
        >
          <div className="relative size-4">
            <span
              className={cn(
                "bg-foreground absolute inset-s-0 block h-0.5 w-4 transition-[top,rotate] duration-150 ease-out motion-reduce:transition-none",
                "top-1 group-data-[state=open]:top-[0.4rem] group-data-[state=open]:-rotate-45"
              )}
            />
            <span
              className={cn(
                "bg-foreground absolute inset-s-0 block h-0.5 w-4 transition-[top,rotate] duration-150 ease-out motion-reduce:transition-none",
                "top-2.5 group-data-[state=open]:top-[0.4rem] group-data-[state=open]:rotate-45"
              )}
            />
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "[--space:--spacing(5)]",
          "h-(--available-height) max-h-(--available-height) min-h-0 w-dvw max-w-dvw min-w-0",
          "flex flex-col",
          "overflow-hidden",
          "bg-background",
          "rounded-none border-none shadow-none ring-0",
          "animate-none data-[state=closed]:animate-none data-[state=open]:animate-none",
          "**:data-[slot=scroll-area-viewport]:overflow-x-hidden!",
          "**:data-[slot=scroll-area-content]:min-w-0!"
        )}
      >
        <PopoverBody
          className={cn(
            "flex flex-col gap-8",
            "pb-[max(--spacing(5),env(safe-area-inset-bottom))]"
          )}
        >
          {tree?.children?.map((group) => {
            if (group.type !== "folder") {
              return null;
            }

            const isPages = String(group.name) === "Sections";
            const links = [
              ...(isPages
                ? items.map((item) => ({
                    active: item.href === activeHref,
                    href: item.href,
                    key: `nav:${item.href}`,
                    label: item.label,
                  }))
                : []),
              ...group.children.flatMap((item) =>
                item.type === "page"
                  ? [
                      {
                        active: pathname === item.url,
                        href: item.url,
                        key: item.url,
                        label: item.name,
                      },
                    ]
                  : []
              ),
            ];

            return (
              <div className="flex flex-col gap-2" key={String(group.name)}>
                <div className="text-muted-foreground px-3 text-sm font-medium">
                  {isPages ? "Pages" : group.name}
                </div>
                <div className="flex flex-col gap-1">
                  {links.map((link) => (
                    <PopoverClose asChild key={link.key}>
                      <NavLink
                        active={link.active}
                        className={cn(
                          "min-h-11 w-full",
                          "flex items-center",
                          "px-3",
                          "text-foreground/80 text-base leading-snug font-medium",
                          "rounded-lg border border-transparent",
                          "touch-manipulation no-underline outline-hidden",
                          "active:bg-muted/80",
                          "focus-visible:border-ring/64 focus-visible:ring-ring/24 focus-visible:ring-2",
                          "aria-[current=page]:bg-muted aria-[current=page]:text-foreground"
                        )}
                        href={link.href}
                      >
                        {link.label}
                        {DOCS_UPDATED_ITEMS.includes(link.href) && (
                          <>
                            <Status className="ms-auto" size="sm" />
                            <span className="sr-only">Updated</span>
                          </>
                        )}
                        {DOCS_NEW_ITEMS.includes(link.href) && (
                          <>
                            <Status
                              className="ms-auto"
                              size="sm"
                              variant="info"
                            />
                            <span className="sr-only">New</span>
                          </>
                        )}
                      </NavLink>
                    </PopoverClose>
                  ))}
                </div>
              </div>
            );
          })}
          <p className="text-muted-foreground mt-2 flex items-center justify-center gap-3 px-3 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <Status size="sm" variant="info" />
              New
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Status size="sm" />
              Updated
            </span>
          </p>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
