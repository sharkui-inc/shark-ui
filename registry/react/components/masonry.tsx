"use client";

import { ark } from "@ark-ui/react/factory";
import React from "react";
import { cn } from "@/lib/utils";

interface MasonryMetrics {
  columnCount: number;
  gap: number;
  itemWidth: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingTop: number;
  rightToLeft: boolean;
}

const getItems = (masonry: HTMLElement) =>
  Array.from(
    masonry.querySelectorAll(":scope > [data-slot=masonry-item]")
  ).filter((item): item is HTMLElement => item instanceof HTMLElement);

const getPixelValue = (value: string) => Number.parseFloat(value) || 0;

const getMetrics = (masonry: HTMLElement): MasonryMetrics | null => {
  const styles = getComputedStyle(masonry);
  const paddingLeft = getPixelValue(styles.paddingLeft);
  const paddingRight = getPixelValue(styles.paddingRight);
  const columnCount = Math.max(1, Number.parseInt(styles.columnCount, 10) || 1);
  const gap = getPixelValue(styles.columnGap);
  const contentWidth = masonry.clientWidth - paddingLeft - paddingRight;
  const itemWidth = (contentWidth - gap * (columnCount - 1)) / columnCount;

  if (itemWidth <= 0) {
    return null;
  }

  return {
    columnCount,
    gap,
    itemWidth,
    paddingBottom: getPixelValue(styles.paddingBottom),
    paddingLeft,
    paddingTop: getPixelValue(styles.paddingTop),
    rightToLeft: styles.direction === "rtl",
  };
};

const getHorizontalOffset = (column: number, metrics: MasonryMetrics) => {
  const offset = column * (metrics.itemWidth + metrics.gap);

  return metrics.rightToLeft
    ? metrics.paddingLeft +
        (metrics.columnCount - 1) * (metrics.itemWidth + metrics.gap) -
        offset
    : metrics.paddingLeft + offset;
};

const removeStaleColumns = (
  columns: Map<HTMLElement, number>,
  items: HTMLElement[]
) => {
  for (const item of columns.keys()) {
    if (!items.includes(item)) {
      columns.delete(item);
    }
  }
};

const positionItems = (
  items: HTMLElement[],
  columns: Map<HTMLElement, number>,
  metrics: MasonryMetrics,
  animate: boolean
) => {
  const columnHeights = Array.from(
    { length: metrics.columnCount },
    () => metrics.paddingTop
  );

  for (const item of items) {
    let column = columns.get(item);

    if (column === undefined) {
      column = columnHeights.indexOf(Math.min(...columnHeights));
      columns.set(item, column);
    }

    item.dataset.masonryLayout = "ready";
    item.style.setProperty("--masonry-item-width", `${metrics.itemWidth}px`);
    item.style.setProperty(
      "--masonry-item-x",
      `${getHorizontalOffset(column, metrics)}px`
    );
    item.style.setProperty("--masonry-item-y", `${columnHeights[column]}px`);

    if (animate) {
      item.dataset.masonryAnimate = "true";
    }

    columnHeights[column] += item.getBoundingClientRect().height + metrics.gap;
  }

  return (
    Math.max(metrics.paddingTop, ...columnHeights) -
    metrics.gap +
    metrics.paddingBottom
  );
};

export const Masonry = (props: React.ComponentProps<typeof ark.ul>) => {
  const { className, ...rest } = props;
  const masonryRef = React.useRef<HTMLUListElement>(null);

  React.useLayoutEffect(() => {
    const masonry = masonryRef.current;
    const columns = new Map<HTMLElement, number>();
    const previousHeight = masonry.style.height;
    let animationFrame: number | undefined;
    let columnCount = 0;
    let hasLaidOut = false;

    const layout = () => {
      const metrics = getMetrics(masonry);

      if (!metrics) {
        return;
      }

      const { columnCount: nextColumnCount } = metrics;

      if (columnCount !== nextColumnCount) {
        columns.clear();
        columnCount = nextColumnCount;
      }

      const items = getItems(masonry);
      removeStaleColumns(columns, items);
      masonry.style.height = `${positionItems(
        items,
        columns,
        metrics,
        hasLaidOut
      )}px`;

      hasLaidOut = true;
    };

    const scheduleLayout = () => {
      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        animationFrame = undefined;
        layout();
      });
    };

    const resizeObserver = new ResizeObserver(scheduleLayout);
    const observeItems = () => {
      for (const item of getItems(masonry)) {
        resizeObserver.observe(item);
      }
    };
    const mutationObserver = new MutationObserver(() => {
      observeItems();
      scheduleLayout();
    });

    resizeObserver.observe(masonry);
    observeItems();
    mutationObserver.observe(masonry, { childList: true, subtree: true });
    scheduleLayout();

    return () => {
      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }

      mutationObserver.disconnect();
      resizeObserver.disconnect();
      masonry.style.height = previousHeight;

      for (const item of getItems(masonry)) {
        delete item.dataset.masonryAnimate;
        delete item.dataset.masonryLayout;
        item.style.removeProperty("--masonry-item-width");
        item.style.removeProperty("--masonry-item-x");
        item.style.removeProperty("--masonry-item-y");
      }
    };
  }, []);

  return (
    <ark.ul
      className={cn(
        "[--gap:--spacing(4)]",
        "relative columns-1 gap-(--gap)",
        "m-0 list-none p-0",
        className
      )}
      data-slot="masonry"
      ref={masonryRef}
      {...rest}
    />
  );
};

export const MasonryItem = (props: React.ComponentProps<typeof ark.li>) => {
  const { className, ...rest } = props;

  return (
    <ark.li
      className={cn(
        "mb-(--gap) break-inside-avoid",
        "data-[masonry-layout=ready]:absolute data-[masonry-layout=ready]:mb-0 data-[masonry-layout=ready]:w-(--masonry-item-width)",
        "data-[masonry-layout=ready]:translate-x-(--masonry-item-x) data-[masonry-layout=ready]:translate-y-(--masonry-item-y)",
        "data-[masonry-layout=ready]:will-change-transform",
        "data-[masonry-animate]:transition-transform data-[masonry-animate]:duration-150 data-[masonry-animate]:ease-out",
        "motion-reduce:data-[masonry-animate]:transition-none",
        className
      )}
      data-slot="masonry-item"
      {...rest}
    />
  );
};
