"use client";

import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const t = {
  amount: "المبلغ",
  bankTransfer: "تحويل بنكي",
  caption: "قائمة بفواتيرك الأخيرة.",
  creditCard: "بطاقة ائتمانية",
  invoice: "الفاتورة",
  method: "الطريقة",
  paid: "مدفوع",
  paypal: "PayPal",
  pending: "قيد الانتظار",
  status: "الحالة",
  total: "المجموع",
  unpaid: "غير مدفوع",
};

const TableRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Table className="mx-auto w-full max-w-xl">
        <TableCaption>{t.caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">{t.invoice}</TableHead>
            <TableHead>{t.status}</TableHead>
            <TableHead>{t.method}</TableHead>
            <TableHead className="text-right">{t.amount}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{t[invoice.paymentStatus]}</TableCell>
              <TableCell>{t[invoice.paymentMethod]}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>{t.total}</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </LocaleProvider>
  </div>
);

const invoices = [
  {
    invoice: "INV001",
    paymentMethod: "creditCard",
    paymentStatus: "paid",
    totalAmount: "$250.00",
  },
  {
    invoice: "INV002",
    paymentMethod: "paypal",
    paymentStatus: "pending",
    totalAmount: "$150.00",
  },
  {
    invoice: "INV003",
    paymentMethod: "bankTransfer",
    paymentStatus: "unpaid",
    totalAmount: "$350.00",
  },
  {
    invoice: "INV004",
    paymentMethod: "creditCard",
    paymentStatus: "paid",
    totalAmount: "$450.00",
  },
  {
    invoice: "INV005",
    paymentMethod: "paypal",
    paymentStatus: "paid",
    totalAmount: "$550.00",
  },
  {
    invoice: "INV006",
    paymentMethod: "bankTransfer",
    paymentStatus: "pending",
    totalAmount: "$200.00",
  },
  {
    invoice: "INV007",
    paymentMethod: "creditCard",
    paymentStatus: "unpaid",
    totalAmount: "$300.00",
  },
] as const;

export default TableRtl;
