"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { AlignLeftIcon, CircleArrowUpIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Presence } from "@/registry/react/components/presence";
import {
  Toc,
  TocIndicator,
  TocItem,
  TocLink,
  TocList,
  TocNav,
  TocTitle,
} from "@/registry/react/components/toc";

interface DocsTableOfContentsProps
  extends Omit<React.ComponentProps<typeof Toc>, "items"> {
  /**
   * The table of contents data
   */
  data: TOCItemType[];
}

const toTocItems = (data: TOCItemType[]) =>
  data.map((item) => ({
    depth: item.depth,
    href: item.url,
    title: item.title,
    value: item.url.startsWith("#") ? item.url.slice(1) : item.url,
  }));

export const DocsTableOfContents = (props: DocsTableOfContentsProps) => {
  const { data, className, ...rest } = props;

  const items = React.useMemo(() => toTocItems(data), [data]);
  const showScrollToTop = useShowScrollToTop();

  if (!items.length) {
    return null;
  }

  return (
    <Toc
      className={cn(
        "z-10",
        "flex-col gap-1",
        "py-2 ps-6 pe-4",
        "text-sm",
        className
      )}
      items={items}
      {...rest}
    >
      <TocNav className="static w-full">
        <TocTitle className="mb-0 inline-flex h-7 items-center gap-2 text-xs">
          <AlignLeftIcon aria-hidden className="size-3" />
          On This Page
        </TocTitle>
        <TocList>
          <TocIndicator className="bg-primary" />
          {items.map((item) => (
            <TocItem item={item} key={item.value}>
              <TocLink
                className="w-full min-w-0 truncate"
                href={item.href}
                title={item.title}
              >
                {item.title}
              </TocLink>
            </TocItem>
          ))}
        </TocList>
        <Presence
          className={cn(
            "mt-2 ps-3.5",
            "duration-200",
            "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=open]:animate-in"
          )}
          present={showScrollToTop}
        >
          <a
            className={cn(
              "relative",
              "inline-flex items-center gap-2",
              "-mx-1 px-1 py-1",
              "text-muted-foreground",
              "rounded-md border border-transparent",
              "outline-hidden",
              "hover:text-foreground",
              "focus-visible:z-10 focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24"
            )}
            href="#page-title"
          >
            <CircleArrowUpIcon aria-hidden className="size-4" /> Scroll to top
          </a>
        </Presence>
      </TocNav>
    </Toc>
  );
};

const useShowScrollToTop = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const updateVisibility = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const threshold = scrollableHeight * 0.3;
      setShow(window.scrollY >= threshold);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return show;
};
