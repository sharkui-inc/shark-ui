"use client";

import type { ReactTable } from "@tanstack/react-table";
import { SearchIcon, XIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  type DataTableFeatures,
  DataTableViewOptions,
} from "@/registry/react/components/data-table";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/registry/react/components/select";
import {
  FILTER_ALL,
  priorityFilterCollection,
  statusFilterCollection,
  type Task,
  type TaskPriority,
  type TaskStatus,
} from "../_data/tasks";
import {
  TaskAllOption,
  TaskPriorityOption,
  TaskPrioritySelectValue,
  TaskStatusOption,
  TaskStatusSelectValue,
} from "./task-select-options";

export const TaskFilters = ({
  hasFilters,
  onClearFilters,
  onPriorityChange,
  onQueryChange,
  onStatusChange,
  priority,
  query,
  status,
  table,
}: {
  hasFilters: boolean;
  onClearFilters: () => void;
  onPriorityChange: (priority: TaskPriority | null) => void;
  onQueryChange: (query: string) => void;
  onStatusChange: (status: TaskStatus | null) => void;
  priority: TaskPriority | null;
  query: string;
  status: TaskStatus | null;
  table: ReactTable<DataTableFeatures, Task>;
}) => (
  <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
    <InputGroup className="lg:max-w-48">
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" />
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Search tasks"
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search"
        type="search"
        value={query}
      />
    </InputGroup>
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
      <Select
        collection={statusFilterCollection}
        onValueChange={({ value: [next] }) => {
          onStatusChange(
            !next || next === FILTER_ALL ? null : (next as TaskStatus)
          );
        }}
        value={[status ?? FILTER_ALL]}
      >
        <SelectTrigger className="w-full sm:w-35">
          <TaskStatusSelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          {statusFilterCollection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item === FILTER_ALL ? (
                <TaskAllOption />
              ) : (
                <TaskStatusOption status={item} />
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        collection={priorityFilterCollection}
        onValueChange={({ value: [next] }) => {
          onPriorityChange(
            !next || next === FILTER_ALL ? null : (next as TaskPriority)
          );
        }}
        value={[priority ?? FILTER_ALL]}
      >
        <SelectTrigger className="w-full sm:w-35">
          <TaskPrioritySelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          {priorityFilterCollection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item === FILTER_ALL ? (
                <TaskAllOption />
              ) : (
                <TaskPriorityOption priority={item} />
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hasFilters ? (
        <Button
          className="col-span-2 sm:col-auto"
          onClick={onClearFilters}
          size="sm"
          variant="ghost"
        >
          <XIcon aria-hidden="true" />
          Clear
        </Button>
      ) : null}
    </div>
    <DataTableViewOptions
      className="ms-0 hidden w-full sm:w-auto md:inline-flex lg:ms-auto"
      table={table}
      variant="outline"
    />
  </div>
);
