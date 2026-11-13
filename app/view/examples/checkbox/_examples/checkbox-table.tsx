"use client";

import React from "react";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";

const tableData = [
  {
    email: "sarah.chen@example.com",
    id: "1",
    name: "Sarah Chen",
    role: "Admin",
  },
  {
    email: "marcus.rodriguez@example.com",
    id: "2",
    name: "Marcus Rodriguez",
    role: "User",
  },
  {
    email: "priya.patel@example.com",
    id: "3",
    name: "Priya Patel",
    role: "User",
  },
  {
    email: "david.kim@example.com",
    id: "4",
    name: "David Kim",
    role: "Editor",
  },
];

const CheckboxTable = () => {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set(["1"])
  );

  const selectAll = selectedRows.size === tableData.length;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox
              checked={selectAll}
              onCheckedChange={({ checked }) =>
                handleSelectAll(checked === true)
              }
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow
            data-state={selectedRows.has(row.id) ? "selected" : undefined}
            key={row.id}
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.has(row.id)}
                onCheckedChange={({ checked }) =>
                  handleSelectRow(row.id, checked === true)
                }
              />
            </TableCell>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CheckboxTable;
