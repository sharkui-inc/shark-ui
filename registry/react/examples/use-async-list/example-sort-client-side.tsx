"use client";

import { useCollator } from "@ark-ui/react/locale";
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/registry/react/components/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { Spinner } from "@/registry/react/components/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/react/components/table";
import { useAsyncList } from "@/registry/react/hooks/use-async-list";

interface User {
  email: string;
  id: number;
  name: string;
  username: string;
}

const UseAsyncListDemo = () => {
  const collator = useCollator();
  const list = useAsyncList<User>({
    autoReload: true,
    async load({ signal }) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=4",
        { signal }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const items: User[] = await response.json();
      return { items };
    },
    sort({ items, descriptor }) {
      return {
        items: items.toSorted((a, b) => {
          const comparison = collator.compare(
            String(a[descriptor.column]),
            String(b[descriptor.column])
          );
          return descriptor.direction === "descending"
            ? -comparison
            : comparison;
        }),
      };
    },
  });
  const handleSort = (column: keyof User) => {
    const direction =
      list.sortDescriptor?.column === column &&
      list.sortDescriptor.direction === "ascending"
        ? "descending"
        : "ascending";
    list.sort({ column, direction });
  };

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      {!!list.loading && (
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Spinner /> Loading
        </div>
      )}
      {!!list.error && (
        <Alert role="alert" variant="destructive">
          <AlertDescription>{list.error.message}</AlertDescription>
        </Alert>
      )}
      <output className="text-muted-foreground text-sm">
        Sorted by:{" "}
        {list.sortDescriptor
          ? `${list.sortDescriptor.column} (${list.sortDescriptor.direction})`
          : "none"}
      </output>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(({ key, label }) => {
              const direction =
                list.sortDescriptor?.column === key
                  ? list.sortDescriptor.direction
                  : "none";
              const Icon = sortIcons[direction];
              const handleColumnSort = () => handleSort(key);
              return (
                <TableHead aria-sort={direction} key={key}>
                  <Button
                    disabled={list.loading || list.sorting}
                    onClick={handleColumnSort}
                    size="sm"
                    variant="ghost"
                  >
                    {label}
                    <Icon
                      aria-hidden
                      className="size-3.5"
                      data-icon="inline-end"
                    />
                  </Button>
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.items.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <AvatarImage
                      alt={user.name}
                      src={`https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=${encodeURIComponent(user.username)}&waveColor=ca8a04`}
                    />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {user.name}
                </div>
              </TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!(list.loading || list.error) && !!list.empty && (
        <p className="text-muted-foreground text-sm">No results found.</p>
      )}
    </div>
  );
};

const sortIcons = {
  ascending: ArrowUpIcon,
  descending: ArrowDownIcon,
  none: ArrowUpDownIcon,
};

const columns: { key: keyof User; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
];

export default UseAsyncListDemo;
