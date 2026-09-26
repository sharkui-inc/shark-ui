"use client";

import type { Root } from "fumadocs-core/page-tree";
import { usePathname } from "next/navigation";
import type React from "react";
import { NavLink } from "@/components/nav-link";
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
    <Popover {...rest} positioning={{ overflowPadding: 0 }}>
      <PopoverTrigger asChild>
        <Button
          aria-label="Toggle Menu"
          className={cn("group", "hitbox-2", "pe-0", className)}
          size="icon-md"
          variant="ghost"
        >
          <div className="relative size-4">
            <span
              className={cn(
                "absolute inset-s-0 block h-0.5 w-4 bg-foreground transition-[top,rotate] duration-150 ease-out motion-reduce:transition-none",
                "top-1 group-data-[state=open]:top-[0.4rem] group-data-[state=open]:-rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute inset-s-0 block h-0.5 w-4 bg-foreground transition-[top,rotate] duration-150 ease-out motion-reduce:transition-none",
                "top-2.5 group-data-[state=open]:top-[0.4rem] group-data-[state=open]:rotate-45"
              )}
            />
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          "h-(--available-height) max-h-(--available-height) min-h-0 w-dvw min-w-0 max-w-dvw",
          "flex flex-col",
          "overflow-hidden",
          "bg-background/80 backdrop-blur",
          "rounded-none border-none shadow-none",
          "duration-100",
          "**:data-[slot=scroll-area-viewport]:overflow-x-hidden!",
          "**:data-[slot=scroll-area-content]:min-w-0!"
        )}
      >
        <PopoverBody className="flex flex-col gap-6">
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
                        active: undefined,
                        href: item.url,
                        key: item.url,
                        label: item.name,
                      },
                    ]
                  : []
              ),
            ];

            return (
              <div className="flex flex-col gap-4" key={String(group.name)}>
                <div className="font-medium text-muted-foreground text-sm">
                  {isPages ? "Pages" : group.name}
                </div>
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <PopoverClose asChild key={link.key}>
                      <NavLink
                        active={link.active}
                        className={cn(
                          "flex items-center gap-2",
                          "-mx-1 px-1",
                          "hitbox-y-2",
                          "font-medium text-2xl",
                          "rounded-md border border-transparent",
                          "no-underline underline-offset-4",
                          "outline-hidden",
                          "focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24"
                        )}
                        href={link.href}
                      >
                        {link.label}
                      </NavLink>
                    </PopoverClose>
                  ))}
                </div>
              </div>
            );
          })}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
