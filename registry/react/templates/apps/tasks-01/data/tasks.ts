import { createListCollection } from "@ark-ui/react";
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "lucide-react";

export const STATUS_OPTIONS = [
  "Todo",
  "In Progress",
  "Done",
  "Backlog",
  "Canceled",
] as const;

export const PRIORITY_OPTIONS = ["Low", "Medium", "High"] as const;

export const TYPE_OPTIONS = ["Bug", "Documentation", "Feature"] as const;

export type TaskStatus = (typeof STATUS_OPTIONS)[number];

export type TaskPriority = (typeof PRIORITY_OPTIONS)[number];

export type TaskType = (typeof TYPE_OPTIONS)[number];

export type TaskAssigneeId = "arjun" | "elena" | "jules" | "maya";

export interface Task {
  assigneeId: TaskAssigneeId;
  id: string;
  priority: TaskPriority;
  status: TaskStatus;
  title: string;
  type: TaskType;
}

export interface TaskDraft {
  assigneeId: TaskAssigneeId;
  priority: TaskPriority;
  status: TaskStatus;
  title: string;
  type: TaskType;
}

export interface TaskEditorState {
  mode: "create" | "edit";
  taskId?: string;
}

export const ASSIGNEES: Record<
  TaskAssigneeId,
  { avatar: string; initials: string; name: string }
> = {
  arjun: {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Arjun+Patel&waveColor=2b6cb0",
    initials: "AP",
    name: "Arjun Patel",
  },
  elena: {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Elena+Rossi&waveColor=e11d48",
    initials: "ER",
    name: "Elena Rossi",
  },
  jules: {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Jules+Martin&waveColor=1a6b5c",
    initials: "JM",
    name: "Jules Martin",
  },
  maya: {
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Maya+Chen&waveColor=7c3aed",
    initials: "MC",
    name: "Maya Chen",
  },
};

export const FILTER_ALL = "all";

export const statusCollection = createListCollection({
  items: STATUS_OPTIONS,
});

export const priorityCollection = createListCollection({
  items: PRIORITY_OPTIONS,
});

export const statusFilterCollection = createListCollection({
  items: [FILTER_ALL, ...STATUS_OPTIONS],
});

export const priorityFilterCollection = createListCollection({
  items: [FILTER_ALL, ...PRIORITY_OPTIONS],
});

export const typeCollection = createListCollection({
  items: TYPE_OPTIONS.map((value) => ({ label: value, value })),
});

export const assigneeCollection = createListCollection({
  items: Object.entries(ASSIGNEES).map(([value, assignee]) => ({
    label: assignee.name,
    value,
  })),
});

export const INITIAL_TASKS: Task[] = [
  {
    assigneeId: "maya",
    id: "PRD-1042",
    priority: "Medium",
    status: "In Progress",
    title: "Document the new installation flow",
    type: "Documentation",
  },
  {
    assigneeId: "jules",
    id: "PRD-1048",
    priority: "Medium",
    status: "Backlog",
    title: "Add keyboard shortcuts to the command palette",
    type: "Feature",
  },
  {
    assigneeId: "arjun",
    id: "PRD-1054",
    priority: "High",
    status: "Todo",
    title: "Fix empty state in the activity feed",
    type: "Bug",
  },
  {
    assigneeId: "elena",
    id: "PRD-1061",
    priority: "Medium",
    status: "Backlog",
    title: "Create a compact mobile navigation pattern",
    type: "Feature",
  },
  {
    assigneeId: "maya",
    id: "PRD-1068",
    priority: "Medium",
    status: "Canceled",
    title: "Evaluate the legacy analytics export",
    type: "Documentation",
  },
  {
    assigneeId: "arjun",
    id: "PRD-1075",
    priority: "High",
    status: "Done",
    title: "Repair the registry build warning",
    type: "Bug",
  },
  {
    assigneeId: "jules",
    id: "PRD-1082",
    priority: "High",
    status: "Done",
    title: "Ship the responsive sidebar pass",
    type: "Feature",
  },
  {
    assigneeId: "elena",
    id: "PRD-1089",
    priority: "Medium",
    status: "In Progress",
    title: "Improve code block copy feedback",
    type: "Feature",
  },
  {
    assigneeId: "maya",
    id: "PRD-1093",
    priority: "Low",
    status: "Todo",
    title: "Audit wording in the form examples",
    type: "Documentation",
  },
  {
    assigneeId: "arjun",
    id: "PRD-1101",
    priority: "High",
    status: "In Progress",
    title: "Resolve the navigation menu regression",
    type: "Bug",
  },
];

export const EMPTY_DRAFT: TaskDraft = {
  assigneeId: "maya",
  priority: "Medium",
  status: "Todo",
  title: "",
  type: "Feature",
};

type StatusIndicatorVariant =
  | "default"
  | "destructive"
  | "info"
  | "success"
  | "warning";

export const priorityIconMap = {
  High: ArrowUpIcon,
  Low: ArrowDownIcon,
  Medium: MinusIcon,
};

export const statusIndicatorVariantMap: Record<
  TaskStatus,
  StatusIndicatorVariant
> = {
  Backlog: "default",
  Canceled: "destructive",
  Done: "success",
  "In Progress": "info",
  Todo: "warning",
};
