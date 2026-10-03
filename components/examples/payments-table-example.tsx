"use client";

import {
  type ColumnFiltersState,
  type ColumnVisibilityState,
  createColumnHelper,
  type RowSelectionState,
  type SortingState,
} from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  DataTable,
  DataTableColumnHeader,
  type DataTableFeatures,
} from "@/registry/react/components/data-table";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

interface Payment {
  email: string;
  id: string;
  status: "pending" | "processing" | "success" | "failed";
}

const columnHelper = createColumnHelper<DataTableFeatures, Payment>();

const statusVariant = {
  failed: "destructive",
  pending: "warning",
  processing: "info",
  success: "success",
} as const;

const data: Payment[] = [
  {
    email: "alex.rivera@techflow.io",
    id: "m5gr84i9",
    status: "success",
  },
  {
    email: "maya.chen@designstudio.com",
    id: "3u1reuv4",
    status: "success",
  },
  {
    email: "james.mitchell@cloudworks.net",
    id: "derv1ws0",
    status: "processing",
  },
  {
    email: "sophia.anderson@digitalhub.co",
    id: "bhqecj4p",
    status: "failed",
  },
  {
    email: "david.kim@innovate.space",
    id: "k9f2m3n4",
    status: "pending",
  },
];

const columns = columnHelper.columns([
  columnHelper.display({
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={({ checked }) => row.toggleSelected(!!checked)}
      />
    ),
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={({ checked }) =>
          table.toggleAllPageRowsSelected(!!checked)
        }
      />
    ),
    id: "select",
  }),
  columnHelper.accessor("status", {
    cell: ({ getValue }) => {
      const status = getValue();

      return (
        <Badge variant={statusVariant[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      );
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  }),
  columnHelper.accessor("email", {
    cell: ({ getValue }) => <div className="lowercase">{getValue()}</div>,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  }),
  columnHelper.display({
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Menu>
          <MenuTrigger asChild>
            <Button aria-label="Open" size="icon-md" variant="ghost">
              <MoreHorizontalIcon aria-hidden />
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuGroup heading="Actions">
              <MenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
                value="copy-payment-id"
              >
                Copy payment ID
              </MenuItem>
              <MenuSeparator />
              <MenuItem value="view-customer">View customer</MenuItem>
              <MenuItem value="view-payment-details">
                View payment details
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      );
    },
    enableHiding: false,
    id: "actions",
  }),
]);

export const PaymentsTableExample = (props: React.ComponentProps<"div">) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  return (
    <DataTable
      caption="Payments"
      columns={columns}
      data={data}
      tableOptions={{
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        state: {
          columnFilters,
          columnVisibility,
          rowSelection,
          sorting,
        },
      }}
      {...props}
    />
  );
};
