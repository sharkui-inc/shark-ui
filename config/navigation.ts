export const NAV_ITEMS = [
  {
    href: "/docs",
    label: "Docs",
    showOnHeader: true,
  },
  {
    href: "/docs/components",
    label: "Components",
    showOnHeader: true,
  },
  {
    href: "/themes",
    label: "Themes",
    showOnHeader: true,
  },
];

export type NavItem = (typeof NAV_ITEMS)[number];

export function getActiveNavHref(
  pathname: string,
  items: { href: string }[]
): string | undefined {
  return items
    .map((item) => item.href)
    .filter((href) => pathname === href || pathname.startsWith(`${href}/`))
    .sort((a, b) => b.length - a.length)[0];
}
