"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { CopyIcon, EllipsisIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  DataTableColumnHeader,
  type DataTableFeatures,
} from "@/registry/react/components/data-table";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { Status } from "@/registry/react/components/status";
import {
  ASSIGNEES,
  priorityIconClassMap,
  priorityIconMap,
  statusIndicatorVariantMap,
  type Task,
  type TaskPriority,
  type TaskStatus,
} from "../_data/tasks";

const columnHelper = createColumnHelper<DataTableFeatures, Task>();

export const columnWidthClasses: Record<string, string> = {
  actions: "w-12",
  assigned: "w-40",
  id: "w-28",
  priority: "w-24",
  status: "w-32",
  title: "w-64 min-w-0",
};

export interface TaskTableActions {
  onDelete: (task: Task) => void;
  onDuplicate: (task: Task) => void;
  onEdit: (task: Task) => void;
}

export const TaskStatusBadge = ({ status }: { status: TaskStatus }) => (
  <Badge className="gap-1.5" size="sm" variant="outline">
    <Status size="sm" variant={statusIndicatorVariantMap[status]} />
    {status}
  </Badge>
);

export const TaskPriorityLabel = ({ priority }: { priority: TaskPriority }) => {
  const PriorityIcon = priorityIconMap[priority];

  return (
    <span className="inline-flex items-center gap-1.5 font-medium text-sm">
      <PriorityIcon
        aria-hidden="true"
        className={cn("size-3.5", priorityIconClassMap[priority])}
      />
      {priority}
    </span>
  );
};

export const TaskRowMenu = ({
  onDelete,
  onDuplicate,
  onEdit,
  task,
}: TaskTableActions & { task: Task }) => (
  <Menu>
    <MenuTrigger asChild>
      <Button
        aria-label={`Open actions for ${task.id}`}
        size="icon-sm"
        variant="ghost"
      >
        <EllipsisIcon aria-hidden="true" />
      </Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem onClick={() => onEdit(task)} value={`edit-${task.id}`}>
        <PencilIcon aria-hidden="true" />
        Edit task
      </MenuItem>
      <MenuItem
        onClick={() => onDuplicate(task)}
        value={`duplicate-${task.id}`}
      >
        <CopyIcon aria-hidden="true" />
        Duplicate task
      </MenuItem>
      <MenuItem
        onClick={() => onDelete(task)}
        value={`delete-${task.id}`}
        variant="destructive"
      >
        <Trash2Icon aria-hidden="true" />
        Delete task
      </MenuItem>
    </MenuContent>
  </Menu>
);

export const createTaskColumns = (actions: TaskTableActions) => {
  const { onDelete, onDuplicate, onEdit } = actions;

  return columnHelper.columns([
    columnHelper.accessor("id", {
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Checkbox
            aria-label={`Select ${row.original.id}`}
            checked={row.getIsSelected()}
            onCheckedChange={({ checked }) => row.toggleSelected(!!checked)}
          />
          <span className="font-mono text-xs tabular-nums">
            {row.original.id}
          </span>
        </div>
      ),
      header: ({ column, table }) => (
        <div className="flex items-center gap-2">
          <Checkbox
            aria-label="Select all tasks on this page"
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={({ checked }) =>
              table.toggleAllPageRowsSelected(!!checked)
            }
          />
          <DataTableColumnHeader column={column} title="Task" />
        </div>
      ),
    }),
    columnHelper.accessor("title", {
      cell: ({ row }) => (
        <span className="block truncate font-medium" title={row.original.title}>
          {row.original.title}
        </span>
      ),
      filterFn: (row, _columnId, value) =>
        `${row.original.id} ${row.original.title}`
          .toLowerCase()
          .includes(String(value).toLowerCase()),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
    }),
    columnHelper.accessor((task) => ASSIGNEES[task.assigneeId].name, {
      cell: ({ row }) => {
        const assignee = ASSIGNEES[row.original.assigneeId];

        return (
          <div className="flex min-w-0 items-center gap-2">
            <Avatar size="sm">
              <AvatarImage alt={assignee.name} src={assignee.avatar} />
              <AvatarFallback>{assignee.initials}</AvatarFallback>
            </Avatar>
            <span className="truncate font-medium">{assignee.name}</span>
          </div>
        );
      },
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Assigned" />
      ),
      id: "assigned",
    }),
    columnHelper.accessor("status", {
      cell: ({ row }) => <TaskStatusBadge status={row.original.status} />,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
    }),
    columnHelper.accessor("priority", {
      cell: ({ row }) => <TaskPriorityLabel priority={row.original.priority} />,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Priority" />
      ),
    }),
    columnHelper.display({
      cell: ({ row }) => (
        <TaskRowMenu
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onEdit={onEdit}
          task={row.original}
        />
      ),
      enableHiding: false,
      enableSorting: false,
      id: "actions",
    }),
  ]);
};
