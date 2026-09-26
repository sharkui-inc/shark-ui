"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import { NavLink } from "@/components/nav-link";
import { getActiveNavHref } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

interface MainNavProps extends React.ComponentProps<"nav"> {
  items: {
    href: string;
    label: string;
  }[];
}

export const MainNav = (props: MainNavProps) => {
  const { items, className, ...rest } = props;

  const pathname = usePathname();
  const activeHref = getActiveNavHref(pathname, items);

  return (
    <nav className={cn("items-center", className)} {...rest}>
      {items.map((item) => (
        <Button asChild key={item.href} variant="ghost">
          <NavLink
            active={item.href === activeHref}
            className={cn(
              "px-2",
              "text-muted-foreground",
              "hover:text-foreground",
              "[&.active]:text-foreground"
            )}
            href={item.href}
          >
            {item.label}
          </NavLink>
        </Button>
      ))}
    </nav>
  );
};
