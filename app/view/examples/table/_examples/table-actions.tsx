import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
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

const TableActions = () => (
  <Table className="mx-auto w-full max-w-xl">
    <TableHeader>
      <TableRow>
        <TableHead>Product</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell className="font-medium">{product.name}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell className="text-right">
            <Menu>
              <MenuTrigger asChild>
                <Button aria-label="Open menu" size="icon-md" variant="ghost">
                  <MoreHorizontalIcon aria-hidden />
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="edit">Edit</MenuItem>
                <MenuItem value="duplicate">Duplicate</MenuItem>
                <MenuSeparator />
                <MenuItem value="delete" variant="destructive">
                  Delete
                </MenuItem>
              </MenuContent>
            </Menu>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const products = [
  { id: "1", name: "Wireless Mouse", price: "$29.99" },
  { id: "2", name: "Mechanical Keyboard", price: "$129.99" },
  { id: "3", name: "USB-C Hub", price: "$49.99" },
];

export default TableActions;
