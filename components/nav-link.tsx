"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.ComponentProps<typeof Link> {
  /**
   * Controlled active state. When omitted, matches the pathname exactly.
   */
  active?: boolean;
}

export const NavLink = (props: NavLinkProps) => {
  const { href, className, prefetch = false, active, ...rest } = props;

  const pathname = usePathname();

  const isActive = active ?? pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn({ active: isActive }, className)}
      href={href}
      prefetch={prefetch}
      {...rest}
    />
  );
};
