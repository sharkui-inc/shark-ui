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
import { usePreviewLocale } from "@/hooks/use-preview-locale";
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

const Example = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

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
    <div className="w-full max-w-xl">
      <div className="flex items-center gap-2 py-4">
        <Input
          className="max-w-xs"
          onChange={(event) => {
            table.getColumn("email")?.setFilterValue(event.target.value);
          }}
          placeholder={values.filterPlaceholder}
          value={typeof emailFilterValue === "string" ? emailFilterValue : ""}
        />
        <Menu>
          <MenuTrigger asChild>
            <Button className="ms-auto" variant="outline">
              {values.columns}
              <ChevronDownIcon
                aria-hidden
                className="size-4"
                data-icon="inline-end"
              />
            </Button>
          </MenuTrigger>
          <MenuContent>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <ColumnVisibilityItem column={column} key={column.id} />
              ))}
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
                  {values.noResults}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end gap-2 py-4">
        <div className="flex-1 text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} {values.of}{" "}
          {table.getFilteredRowModel().rows.length} {values.rowsSelected}
        </div>
        <div className="flex gap-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            size="sm"
            variant="outline"
          >
            {values.previous}
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            size="sm"
            variant="outline"
          >
            {values.next}
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

export interface Payment {
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
}) => {
  const { values } = useRtlValues();

  return (
    <Checkbox
      aria-label={values.selectAll}
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={({ checked }) => {
        table.toggleAllPageRowsSelected(!!checked);
      }}
    />
  );
};

const SelectRowCheckbox = ({ row }: { row: Row<typeof features, Payment> }) => {
  const { values } = useRtlValues();

  return (
    <Checkbox
      aria-label={values.selectRow}
      checked={row.getIsSelected()}
      onCheckedChange={({ checked }) => {
        row.toggleSelected(!!checked);
      }}
    />
  );
};

const StatusCell = ({ status }: { status: Payment["status"] }) => {
  const { values } = useRtlValues();

  const label = {
    failed: values.statusFailed,
    pending: values.statusPending,
    processing: values.statusProcessing,
    success: values.statusSuccess,
  }[status];

  return <div className="capitalize">{label}</div>;
};

const StatusHeader = () => {
  const { values } = useRtlValues();

  return values.status;
};

const EmailSortHeader = ({
  column,
}: {
  column: Column<typeof features, Payment, string>;
}) => {
  const { values } = useRtlValues();

  return (
    <Button
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      variant="ghost"
    >
      {values.email}
      <ArrowUpDownIcon aria-hidden className="size-4" data-icon="inline-end" />
    </Button>
  );
};

const AmountHeader = () => {
  const { values } = useRtlValues();

  return <div className="text-end">{values.amount}</div>;
};

const AmountCell = ({ row }: { row: Row<typeof features, Payment> }) => {
  const { values } = useRtlValues();

  return (
    <div className="text-end font-medium">{values.amounts[row.index]}</div>
  );
};

const PaymentActions = ({ payment }: { payment: Payment }) => {
  const { values } = useRtlValues();

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button
          aria-label={values.openMenu}
          className="size-8 p-0"
          variant="ghost"
        >
          <MoreHorizontalIcon aria-hidden className="size-4" />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup heading={values.actions}>
          <MenuItem
            onClick={() => navigator.clipboard.writeText(payment.id)}
            value="copy-payment-id"
          >
            {values.copyPaymentId}
          </MenuItem>
          <MenuSeparator />
          <MenuItem value="view-customer">{values.viewCustomer}</MenuItem>
          <MenuItem value="view-payment-details">
            {values.viewPaymentDetails}
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

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
    header: () => <StatusHeader />,
  }),
  columnHelper.accessor("email", {
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    header: ({ column }) => <EmailSortHeader column={column} />,
  }),
  columnHelper.accessor("amount", {
    cell: ({ row }) => <AmountCell row={row} />,
    header: () => <AmountHeader />,
  }),
  columnHelper.display({
    cell: ({ row }) => <PaymentActions payment={row.original} />,
    enableHiding: false,
    id: "actions",
  }),
]);

const useRtlValues = () => {
  const { locale } = usePreviewLocale();

  return translations[locale];
};

const translations = {
  ar: {
    values: {
      actions: "الإجراءات",
      amount: "المبلغ",
      amounts: ["٣١٦٫٠٠ US$", "٨٣٧٫٠٠ US$", "٨٧٤٫٠٠ US$", "٧٢١٫٠٠ US$"],
      columns: "الأعمدة",
      copyPaymentId: "نسخ معرّف الدفعة",
      email: "البريد الإلكتروني",
      filterPlaceholder: "تصفية الإيميلات...",
      next: "التالي",
      noResults: "لا توجد نتائج.",
      of: "من",
      openMenu: "فتح القائمة",
      previous: "السابق",
      rowsSelected: "صفوف محددة",
      selectAll: "تحديد الكل",
      selectRow: "تحديد صف",
      status: "الحالة",
      statusFailed: "فاشلة",
      statusPending: "قيد الانتظار",
      statusProcessing: "قيد المعالجة",
      statusSuccess: "ناجحة",
      viewCustomer: "عرض العميل",
      viewPaymentDetails: "عرض تفاصيل الدفعة",
    },
  },
  en: {
    values: {
      actions: "Actions",
      amount: "Amount",
      amounts: ["$316.00", "$837.00", "$874.00", "$721.00"],
      columns: "Columns",
      copyPaymentId: "Copy payment ID",
      email: "Email",
      filterPlaceholder: "Filter emails...",
      next: "Next",
      noResults: "No results.",
      of: "of",
      openMenu: "Open menu",
      previous: "Previous",
      rowsSelected: "row(s) selected.",
      selectAll: "Select all",
      selectRow: "Select row",
      status: "Status",
      statusFailed: "failed",
      statusPending: "pending",
      statusProcessing: "processing",
      statusSuccess: "success",
      viewCustomer: "View customer",
      viewPaymentDetails: "View payment details",
    },
  },
  he: {
    values: {
      actions: "פעולות",
      amount: "סכום",
      amounts: ["316.00 $", "837.00 $", "874.00 $", "721.00 $"],
      columns: "עמודות",
      copyPaymentId: "העתק מזהה תשלום",
      email: "אימייל",
      filterPlaceholder: "סנן אימיילים...",
      next: "הבא",
      noResults: "אין תוצאות.",
      of: "מתוך",
      openMenu: "פתיחת תפריט",
      previous: "הקודם",
      rowsSelected: "שורות נבחרו",
      selectAll: "בחירת הכל",
      selectRow: "בחירת שורה",
      status: "סטטוס",
      statusFailed: "נכשל",
      statusPending: "בהמתנה",
      statusProcessing: "בעיבוד",
      statusSuccess: "הצליח",
      viewCustomer: "הצג לקוח",
      viewPaymentDetails: "הצג פרטי תשלום",
    },
  },
};

export default Example;
