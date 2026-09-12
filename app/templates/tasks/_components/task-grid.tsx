"use client";

import type { ReactTable } from "@tanstack/react-table";
import { Card, CardFooter } from "@/registry/react/components/card";
import {
  type DataTableFeatures,
  DataTablePagination,
} from "@/registry/react/components/data-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";
import type { Task } from "../_data/tasks";
import { columnWidthClasses } from "./task-columns";
import { TaskEmptyState } from "./task-empty-state";

export const TaskGrid = ({
  hasFilters,
  onClearFilters,
  onCreate,
  table,
}: {
  hasFilters: boolean;
  onClearFilters: () => void;
  onCreate: () => void;
  table: ReactTable<DataTableFeatures, Task>;
}) => {
  const hasTasks = table.getFilteredRowModel().rows.length > 0;

  if (!hasTasks) {
    return (
      <TaskEmptyState
        hasFilters={hasFilters}
        onClearFilters={onClearFilters}
        onCreate={onCreate}
      />
    );
  }

  return (
    <Card className="gap-0 py-0 [--space:0]">
      <div className="overflow-x-auto">
        <Table className="w-full min-w-0 table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    className={columnWidthClasses[header.column.id]}
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow className="h-13" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    className={
                      cell.column.id === "title" ? "min-w-0" : undefined
                    }
                    key={cell.id}
                  >
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="px-3 py-3 sm:px-4">
        <DataTablePagination table={table} />
      </CardFooter>
    </Card>
  );
};
