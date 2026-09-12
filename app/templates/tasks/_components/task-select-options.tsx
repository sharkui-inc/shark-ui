import {
  BugIcon,
  FileTextIcon,
  ListFilterIcon,
  SparklesIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { SelectContext, SelectValue } from "@/registry/react/components/select";
import { Status } from "@/registry/react/components/status";
import {
  ASSIGNEES,
  FILTER_ALL,
  priorityIconClassMap,
  priorityIconMap,
  statusIndicatorVariantMap,
  type TaskAssigneeId,
  type TaskPriority,
  type TaskStatus,
  type TaskType,
} from "../_data/tasks";

const typeIconMap = {
  Bug: BugIcon,
  Documentation: FileTextIcon,
  Feature: SparklesIcon,
};

export const TaskAllOption = () => (
  <>
    <ListFilterIcon
      aria-hidden="true"
      className="size-4 text-muted-foreground"
    />
    All
  </>
);

export const TaskTypeOption = ({ type }: { type: TaskType }) => {
  const TypeIcon = typeIconMap[type];

  return (
    <>
      <TypeIcon aria-hidden="true" className="size-4 text-muted-foreground" />
      {type}
    </>
  );
};

export const TaskPriorityOption = ({
  priority,
}: {
  priority: TaskPriority;
}) => {
  const PriorityIcon = priorityIconMap[priority];

  return (
    <>
      <PriorityIcon
        aria-hidden="true"
        className={cn("size-4", priorityIconClassMap[priority])}
      />
      {priority}
    </>
  );
};

export const TaskStatusOption = ({ status }: { status: TaskStatus }) => (
  <>
    <Status size="sm" variant={statusIndicatorVariantMap[status]} />
    {status}
  </>
);

export const TaskAssigneeOption = ({
  assigneeId,
}: {
  assigneeId: TaskAssigneeId;
}) => {
  const assignee = ASSIGNEES[assigneeId];

  return (
    <>
      <Avatar size="sm">
        <AvatarImage alt={assignee.name} src={assignee.avatar} />
        <AvatarFallback>{assignee.initials}</AvatarFallback>
      </Avatar>
      {assignee.name}
    </>
  );
};

export const TaskTypeSelectValue = () => (
  <SelectValue placeholder="Select a type">
    <SelectContext>
      {({ value }) => {
        const type = value[0] as TaskType | undefined;
        return type ? <TaskTypeOption type={type} /> : null;
      }}
    </SelectContext>
  </SelectValue>
);

export const TaskPrioritySelectValue = ({
  placeholder = "Select a priority",
}) => (
  <SelectValue placeholder={placeholder}>
    <SelectContext>
      {({ value: [priority] }) => {
        if (!priority) {
          return null;
        }
        if (priority === FILTER_ALL) {
          return <TaskAllOption />;
        }
        return <TaskPriorityOption priority={priority as TaskPriority} />;
      }}
    </SelectContext>
  </SelectValue>
);

export const TaskStatusSelectValue = ({ placeholder = "Select a status" }) => (
  <SelectValue placeholder={placeholder}>
    <SelectContext>
      {({ value: [status] }) => {
        if (!status) {
          return null;
        }
        if (status === FILTER_ALL) {
          return <TaskAllOption />;
        }
        return <TaskStatusOption status={status as TaskStatus} />;
      }}
    </SelectContext>
  </SelectValue>
);

export const TaskAssigneeSelectValue = () => (
  <SelectValue placeholder="Select an owner">
    <SelectContext>
      {({ value }) => {
        const assigneeId = value[0] as TaskAssigneeId | undefined;
        return assigneeId ? (
          <TaskAssigneeOption assigneeId={assigneeId} />
        ) : null;
      }}
    </SelectContext>
  </SelectValue>
);
