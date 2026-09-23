"use client";

import {
  createColumnHelper,
  type PaginationState,
  useTable,
} from "@tanstack/react-table";
import React from "react";
import {
  type DataTableFeatures,
  DataTablePagination,
  DataTablePaginationControls,
  DataTablePaginationNavigation,
  DataTablePaginationPageInfo,
  DataTablePaginationRowsPerPage,
  dataTableFeatures,
} from "@/registry/react/components/data-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const Example = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const pageRows = React.useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize;

    return orders.slice(start, start + pagination.pageSize);
  }, [pagination]);

  const table = useTable({
    columns,
    data: pageRows,
    features: dataTableFeatures,
    getRowId: (row) => row.id,
    manualPagination: true,
    onPaginationChange: setPagination,
    rowCount: orders.length,
    state: { pagination },
  });

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    colSpan={header.colSpan}
                    key={header.id}
                    rowSpan={header.rowSpan}
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
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table}>
        <DataTablePaginationRowsPerPage className="flex-1" />
        <DataTablePaginationControls>
          <DataTablePaginationPageInfo />
          <DataTablePaginationNavigation />
        </DataTablePaginationControls>
      </DataTablePagination>
    </div>
  );
};

interface Order {
  customer: string;
  id: string;
  status: "Paid" | "Pending" | "Refunded";
}

const columnHelper = createColumnHelper<DataTableFeatures, Order>();

const columns = columnHelper.columns([
  columnHelper.accessor("id", { header: "Order" }),
  columnHelper.accessor("customer", { header: "Customer" }),
  columnHelper.accessor("status", { header: "Status" }),
]);

const customers = ["Ava", "Emma", "Liam", "Noah", "Olivia"] as const;

const statuses: Order["status"][] = ["Paid", "Pending", "Refunded"];

const orders: Order[] = Array.from({ length: 23 }, (_, index) => ({
  customer: customers[index % customers.length] ?? "Ava",
  id: `ORD-${String(index + 1).padStart(4, "0")}`,
  status: statuses[index % statuses.length] ?? "Paid",
}));

export default Example;
