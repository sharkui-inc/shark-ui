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

const Example = () => (
  <Table className="mx-auto w-full max-w-xl">
    <TableCaption className="sr-only">
      Order summary with footer totals.
    </TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Item</TableHead>
        <TableHead className="text-end">Qty</TableHead>
        <TableHead className="text-end">Unit price</TableHead>
        <TableHead className="text-end">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.item}</TableCell>
          <TableCell className="text-end">{row.qty}</TableCell>
          <TableCell className="text-end">
            {`$${row.unitPrice.toFixed(2)}`}
          </TableCell>
          <TableCell className="text-end">
            {`$${(row.qty * row.unitPrice).toFixed(2)}`}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-end">$379.47</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

const items = [
  { id: "1", item: "Wireless mouse", qty: 2, unitPrice: 29.99 },
  { id: "2", item: "Mechanical keyboard", qty: 1, unitPrice: 149.99 },
  { id: "3", item: "USB-C hub", qty: 3, unitPrice: 45.0 },
];

export default Example;
