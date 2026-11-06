import {
  BugIcon,
  FileTextIcon,
  LightbulbIcon,
  ListFilterIcon,
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
  priorityIconMap,
  statusIndicatorVariantMap,
  type TaskAssigneeId,
  type TaskPriority,
  type TaskStatus,
  type TaskType,
} from "../_data/tasks";
import { priorityIconVariants } from "./task-priority";

const typeIconMap = {
  Bug: BugIcon,
  Documentation: FileTextIcon,
  Feature: LightbulbIcon,
};

export const TaskAllOption = () => (
  <>
    <ListFilterIcon
      aria-hidden="true"
      className="text-muted-foreground size-4"
    />
    All
  </>
);

interface TaskTypeOptionProps {
  type: TaskType;
}

export const TaskTypeOption = (props: TaskTypeOptionProps) => {
  const { type } = props;

  const TypeIcon = typeIconMap[type];

  return (
    <>
      <TypeIcon aria-hidden="true" className="text-muted-foreground size-4" />
      {type}
    </>
  );
};

interface TaskPriorityOptionProps {
  priority: TaskPriority;
}

export const TaskPriorityOption = (props: TaskPriorityOptionProps) => {
  const { priority } = props;

  const PriorityIcon = priorityIconMap[priority];

  return (
    <>
      <PriorityIcon
        aria-hidden="true"
        className={cn("size-4", priorityIconVariants({ priority }))}
      />
      {priority}
    </>
  );
};

interface TaskStatusOptionProps {
  status: TaskStatus;
}

export const TaskStatusOption = (props: TaskStatusOptionProps) => {
  const { status } = props;

  return (
    <>
      <Status size="sm" variant={statusIndicatorVariantMap[status]} />
      {status}
    </>
  );
};

interface TaskAssigneeOptionProps {
  assigneeId: TaskAssigneeId;
}

export const TaskAssigneeOption = (props: TaskAssigneeOptionProps) => {
  const { assigneeId } = props;

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

interface TaskPrioritySelectValueProps {
  placeholder?: string;
}

export const TaskPrioritySelectValue = (
  props: TaskPrioritySelectValueProps
) => {
  const { placeholder = "Select a priority" } = props;

  return (
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
};

interface TaskStatusSelectValueProps {
  placeholder?: string;
}

export const TaskStatusSelectValue = (props: TaskStatusSelectValueProps) => {
  const { placeholder = "Select a status" } = props;

  return (
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
};

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
