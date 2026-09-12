import { Children, isValidElement } from "react";
import { cn } from "@/lib/utils";

const COLUMN_IDS = ["start", "middle", "end"] as const;

type MasonryColumnId = (typeof COLUMN_IDS)[number];

const isMasonryColumnId = (value: unknown): value is MasonryColumnId =>
  value === "start" || value === "middle" || value === "end";

const columnForChild = (
  child: React.ReactNode,
  index: number
): MasonryColumnId => {
  if (isValidElement<{ "data-column"?: string }>(child)) {
    const column = child.props["data-column"];

    if (isMasonryColumnId(column)) {
      return column;
    }
  }

  return COLUMN_IDS[index % COLUMN_IDS.length];
};

interface MasonryColumnsProps extends React.ComponentProps<"div"> {
  columnClassName?: string;
}

export const MasonryColumns = (props: MasonryColumnsProps) => {
  const { children, className, columnClassName, ...rest } = props;

  const items = Children.toArray(children);
  const columns = COLUMN_IDS.map((columnId) => ({
    columnId,
    items: items
      .map((child, index) => ({ child, index }))
      .filter(({ child, index }) => columnForChild(child, index) === columnId),
  }));

  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:grid-cols-2 lg:flex lg:flex-row",
        "sm:grid sm:items-start lg:items-start",
        className
      )}
      {...rest}
    >
      {columns.map(({ columnId, items: columnItems }) => (
        <div
          className={cn(
            "flex flex-col gap-4 max-sm:contents lg:min-w-0 lg:flex-1",
            columnClassName
          )}
          key={columnId}
        >
          {columnItems.map(({ child, index }) => (
            <div
              className="min-w-0"
              key={`item-${index}`}
              style={{ order: index }}
            >
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
