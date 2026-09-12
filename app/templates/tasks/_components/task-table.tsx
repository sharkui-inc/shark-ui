"use client";

import {
  type ColumnFiltersState,
  type ColumnVisibilityState,
  type RowSelectionState,
  type SortingState,
  useTable,
} from "@tanstack/react-table";
import { type FormEvent, useState } from "react";
import { dataTableFeatures } from "@/registry/react/components/data-table";
import {
  EMPTY_DRAFT,
  INITIAL_TASKS,
  type Task,
  type TaskDraft,
  type TaskEditorState,
  type TaskStatus,
} from "../_data/tasks";
import { createTaskColumns } from "./task-columns";
import { TaskEditorDialog } from "./task-editor-dialog";
import { TaskFilters } from "./task-filters";
import { TaskGrid } from "./task-grid";
import { TaskSelectionActionBar } from "./task-selection-action-bar";

const INITIAL_ROW_SELECTION: RowSelectionState = {
  "PRD-1042": true,
  "PRD-1061": true,
  "PRD-1075": true,
};

export const TaskTable = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    useState<ColumnVisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    INITIAL_ROW_SELECTION
  );
  const [sorting, setSorting] = useState<SortingState>([]);
  const [nextTaskNumber, setNextTaskNumber] = useState(1110);
  const [editor, setEditor] = useState<TaskEditorState | null>(null);
  const [draft, setDraft] = useState<TaskDraft>(EMPTY_DRAFT);

  const closeEditor = () => {
    setDraft(EMPTY_DRAFT);
    setEditor(null);
  };

  const openCreateEditor = () => {
    setDraft(EMPTY_DRAFT);
    setEditor({ mode: "create" });
  };

  const openEditEditor = (task: Task) => {
    setDraft({
      assigneeId: task.assigneeId,
      priority: task.priority,
      status: task.status,
      title: task.title,
      type: task.type,
    });
    setEditor({ mode: "edit", taskId: task.id });
  };

  const allocateTaskId = () => {
    const id = `PRD-${nextTaskNumber}`;
    setNextTaskNumber((current) => current + 1);
    return id;
  };

  const saveTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = draft.title.trim();
    if (!(title && editor)) {
      return;
    }

    if (editor.mode === "create") {
      const id = allocateTaskId();

      setTasks((currentTasks) => [
        {
          ...draft,
          id,
          title,
        },
        ...currentTasks,
      ]);
    } else if (editor.taskId) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editor.taskId ? { ...task, ...draft, title } : task
        )
      );
    }

    closeEditor();
  };

  const duplicateTask = (task: Task) => {
    const id = allocateTaskId();

    setTasks((currentTasks) => [
      {
        ...task,
        id,
        title: `Copy of ${task.title}`,
      },
      ...currentTasks,
    ]);
  };

  const deleteTask = (task: Task) => {
    setTasks((currentTasks) =>
      currentTasks.filter((item) => item.id !== task.id)
    );
    setRowSelection((currentSelection) => {
      const { [task.id]: _deletedTask, ...remainingSelection } =
        currentSelection;
      return remainingSelection;
    });
  };

  const clearFilters = () => {
    setColumnFilters([]);
  };

  const columns = createTaskColumns({
    onDelete: deleteTask,
    onDuplicate: duplicateTask,
    onEdit: openEditEditor,
  });

  const table = useTable({
    columns,
    data: tasks,
    features: dataTableFeatures,
    getRowId: (task) => task.id,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 6,
      },
    },
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

  const queryFilter = table.getColumn("title")?.getFilterValue();
  const statusFilter = table.getColumn("status")?.getFilterValue();
  const priorityFilter = table.getColumn("priority")?.getFilterValue();
  const query = typeof queryFilter === "string" ? queryFilter : "";
  const status = typeof statusFilter === "string" ? statusFilter : null;
  const priority = typeof priorityFilter === "string" ? priorityFilter : null;
  const hasFilters = columnFilters.length > 0;
  const selectedTasks = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);

  const moveSelectedTasks = (nextStatus: TaskStatus) => {
    const selectedIds = new Set(selectedTasks.map((task) => task.id));

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        selectedIds.has(task.id) ? { ...task, status: nextStatus } : task
      )
    );
    setRowSelection({});
  };

  const duplicateSelectedTasks = () => {
    const duplicates = selectedTasks.map((task, index) => ({
      ...task,
      id: `PRD-${nextTaskNumber + index}`,
      title: `Copy of ${task.title}`,
    }));

    if (duplicates.length === 0) {
      return;
    }

    setTasks((currentTasks) => [...duplicates, ...currentTasks]);
    setNextTaskNumber((current) => current + duplicates.length);
    setRowSelection({});
  };

  const deleteSelectedTasks = () => {
    const selectedIds = new Set(selectedTasks.map((task) => task.id));

    if (selectedIds.size === 0) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.filter((task) => !selectedIds.has(task.id))
    );
    setRowSelection({});
  };

  return (
    <TaskSelectionActionBar
      onClearSelection={() => setRowSelection({})}
      onDelete={deleteSelectedTasks}
      onDuplicate={duplicateSelectedTasks}
      onMove={moveSelectedTasks}
      selectedCount={selectedTasks.length}
    >
      <div className="flex flex-col gap-4">
        <TaskFilters
          hasFilters={hasFilters}
          onClearFilters={clearFilters}
          onPriorityChange={(value) =>
            table.getColumn("priority")?.setFilterValue(value ?? undefined)
          }
          onQueryChange={(value) =>
            table.getColumn("title")?.setFilterValue(value)
          }
          onStatusChange={(value) =>
            table.getColumn("status")?.setFilterValue(value ?? undefined)
          }
          priority={priority as TaskDraft["priority"] | null}
          query={query}
          status={status as TaskDraft["status"] | null}
          table={table}
        />
        <TaskEditorDialog
          draft={draft}
          editor={editor}
          onDraftChange={setDraft}
          onOpenChange={(open) => {
            if (!open) {
              closeEditor();
            }
          }}
          onSubmit={saveTask}
        />
        <TaskGrid
          hasFilters={hasFilters}
          onClearFilters={clearFilters}
          onCreate={openCreateEditor}
          table={table}
        />
      </div>
    </TaskSelectionActionBar>
  );
};
