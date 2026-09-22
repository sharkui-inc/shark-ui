"use client";

import {
  type Column,
  type ColumnFiltersState,
  type ColumnVisibilityState,
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  type Row,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  type SortingState,
  sortFn_alphanumeric,
  sortFn_text,
  type Table as TanStackTable,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import { Input } from "@/registry/react/components/input";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const t = {
  actions: "الإجراءات",
  amount: "المبلغ",
  columns: "الأعمدة",
  copyPaymentId: "نسخ معرف الدفع",
  email: "البريد الإلكتروني",
  filterEmails: "تصفية البريد الإلكتروني...",
  next: "التالي",
  noResults: "لا توجد نتائج.",
  of: "من",
  openMenu: "فتح القائمة",
  previous: "السابق",
  rowsSelected: "صف(وف) محدد.",
  selectAll: "تحديد الكل",
  selectRow: "تحديد الصف",
  status: "الحالة",
  statuses: {
    failed: "فشل",
    pending: "قيد الانتظار",
    processing: "قيد المعالجة",
    success: "ناجح",
  },
  viewCustomer: "عرض العميل",
  viewPaymentDetails: "عرض تفاصيل الدفع",
};

const DataTableRtl = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useTable({
    columns,
    data,
    features,
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
  });

  const emailFilterValue = table.getColumn("email")?.getFilterValue();

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <Input
          className="max-w-sm"
          onChange={(event) => {
            table.getColumn("email")?.setFilterValue(event.target.value);
          }}
          placeholder={t.filterEmails}
          value={typeof emailFilterValue === "string" ? emailFilterValue : ""}
        />
        <Menu>
          <MenuTrigger asChild>
            <Button className="ms-auto" variant="outline">
              {t.columns}
              <ChevronDownIcon aria-hidden data-icon="inline-end" />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuGroup>
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <ColumnVisibilityItem column={column} key={column.id} />
                ))}
            </MenuGroup>
          </MenuContent>
        </Menu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  {t.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-2 py-4">
        <div className="flex-1 text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} {t.of}{" "}
          {table.getFilteredRowModel().rows.length} {t.rowsSelected}
        </div>
        <div className="flex gap-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            {t.previous}
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            {t.next}
          </Button>
        </div>
      </div>
    </div>
  );
};

const features = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns: { includesString: filterFn_includesString },
  paginatedRowModel: createPaginatedRowModel(),
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
});

interface Payment {
  amount: number;
  email: string;
  id: string;
  status: "pending" | "processing" | "success" | "failed";
}

const columnHelper = createColumnHelper<typeof features, Payment>();

const data: Payment[] = [
  {
    amount: 316,
    email: "ken99@example.com",
    id: "m5gr84i9",
    status: "success",
  },
  {
    amount: 242,
    email: "Abe45@example.com",
    id: "3u1reuv4",
    status: "success",
  },
  {
    amount: 837,
    email: "Monserrat44@example.com",
    id: "derv1ws0",
    status: "processing",
  },
  {
    amount: 874,
    email: "Silas22@example.com",
    id: "5kma53ae",
    status: "success",
  },
  {
    amount: 721,
    email: "carmella@example.com",
    id: "bhqecj4p",
    status: "failed",
  },
];

const SelectAllCheckbox = ({
  table,
}: {
  table: TanStackTable<typeof features, Payment>;
}) => (
  <Checkbox
    aria-label={t.selectAll}
    checked={
      table.getIsAllPageRowsSelected() ||
      (table.getIsSomePageRowsSelected() && "indeterminate")
    }
    onCheckedChange={({ checked }) => {
      table.toggleAllPageRowsSelected(!!checked);
    }}
  />
);

const SelectRowCheckbox = ({ row }: { row: Row<typeof features, Payment> }) => (
  <Checkbox
    aria-label={t.selectRow}
    checked={row.getIsSelected()}
    onCheckedChange={({ checked }) => {
      row.toggleSelected(!!checked);
    }}
  />
);

const StatusCell = ({ status }: { status: Payment["status"] }) => (
  <div className="capitalize">{t.statuses[status]}</div>
);

const EmailSortHeader = ({
  column,
}: {
  column: Column<typeof features, Payment, string>;
}) => (
  <Button
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    variant="ghost"
  >
    {t.email}
    <ArrowUpDownIcon aria-hidden data-icon="inline-end" />
  </Button>
);

const PaymentActions = ({ payment }: { payment: Payment }) => (
  <Menu>
    <MenuTrigger asChild>
      <Button aria-label={t.openMenu} size="icon-md" variant="ghost">
        <MoreHorizontalIcon aria-hidden />
      </Button>
    </MenuTrigger>
    <MenuContent className="w-44">
      <MenuGroup heading={t.actions}>
        <MenuItem
          onClick={() => navigator.clipboard.writeText(payment.id)}
          value="copy-payment-id"
        >
          {t.copyPaymentId}
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuGroup>
        <MenuItem value="view-customer">{t.viewCustomer}</MenuItem>
        <MenuItem value="view-payment-details">{t.viewPaymentDetails}</MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

const ColumnVisibilityItem = ({
  column,
}: {
  column: Column<typeof features, Payment, unknown>;
}) => (
  <MenuCheckboxItem
    checked={column.getIsVisible()}
    className="capitalize"
    closeOnSelect={false}
    onCheckedChange={(value) => {
      column.toggleVisibility(value);
    }}
    value={column.id}
  >
    {column.id}
  </MenuCheckboxItem>
);

const columns = columnHelper.columns([
  columnHelper.display({
    cell: ({ row }) => <SelectRowCheckbox row={row} />,
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => <SelectAllCheckbox table={table} />,
    id: "select",
  }),
  columnHelper.accessor("status", {
    cell: ({ row }) => (
      <StatusCell status={row.getValue("status") as Payment["status"]} />
    ),
    header: t.status,
  }),
  columnHelper.accessor("email", {
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    header: ({ column }) => <EmailSortHeader column={column} />,
  }),
  columnHelper.accessor("amount", {
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("ar-SA", {
        currency: "USD",
        style: "currency",
      }).format(amount);

      return <div className="text-start font-medium">{formatted}</div>;
    },
    header: () => <div className="text-start">{t.amount}</div>,
  }),
  columnHelper.display({
    cell: ({ row }) => <PaymentActions payment={row.original} />,
    enableHiding: false,
    id: "actions",
  }),
]);

export default DataTableRtl;
