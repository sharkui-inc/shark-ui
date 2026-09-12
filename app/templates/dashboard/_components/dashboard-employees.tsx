"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { MoreHorizontalIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  DataTable,
  DataTableColumnHeader,
  type DataTableFeatures,
} from "@/registry/react/components/data-table";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { type Employee, employeeAvatars, employees } from "../_data/dashboard";
import { getInitials } from "../_utils/get-initials";

const employeeColumnHelper = createColumnHelper<DataTableFeatures, Employee>();

const employeeColumns = employeeColumnHelper.columns([
  employeeColumnHelper.accessor("name", {
    cell: ({ getValue, row }) => {
      const name = getValue();

      return (
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarImage alt={name} src={employeeAvatars[row.original.id]} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{name}</span>
        </div>
      );
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Member" />
    ),
  }),
  employeeColumnHelper.accessor("role", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
  }),
  employeeColumnHelper.display({
    cell: () => (
      <Badge size="sm" variant="secondary">
        Employee
      </Badge>
    ),
    header: "Type",
    id: "type",
  }),
  employeeColumnHelper.display({
    cell: ({ row }) => <EmployeeActions employee={row.original} />,
    header: "",
    id: "actions",
  }),
]);

export const DashboardEmployees = () => {
  const [query, setQuery] = useState("");
  const visibleEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.role}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <Card className="[--space:--spacing(4)]">
      <CardHeader description="32 team members" title="All employees">
        <CardAction className="max-sm:col-span-2 max-sm:w-full">
          <InputGroup className="sm:w-56">
            <InputGroupInput
              aria-label="Search employees"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              type="search"
              value={query}
            />
            <InputGroupAddon>
              <SearchIcon aria-hidden="true" />
            </InputGroupAddon>
          </InputGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <DataTable
          caption="Employees"
          className="rounded-none border-0"
          columns={employeeColumns}
          data={visibleEmployees}
          emptyMessage="No team members match your search."
          tableOptions={{ getRowId: (row) => row.id }}
        />
      </CardContent>
    </Card>
  );
};

const EmployeeActions = ({ employee }: { employee: Employee }) => (
  <Menu>
    <MenuTrigger asChild>
      <Button
        aria-label={`Actions for ${employee.name}`}
        size="icon-xs"
        variant="ghost"
      >
        <MoreHorizontalIcon aria-hidden="true" />
      </Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem value="view-profile">View profile</MenuItem>
      <MenuItem value="message">Send message</MenuItem>
    </MenuContent>
  </Menu>
);
