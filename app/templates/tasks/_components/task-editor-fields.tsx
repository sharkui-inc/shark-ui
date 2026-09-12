"use client";

import type { Select as ArkSelect } from "@ark-ui/react/select";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/registry/react/components/select";
import {
  assigneeCollection,
  priorityCollection,
  statusCollection,
  type TaskAssigneeId,
  type TaskDraft,
  type TaskPriority,
  type TaskStatus,
  type TaskType,
  typeCollection,
} from "../_data/tasks";
import {
  TaskAssigneeOption,
  TaskAssigneeSelectValue,
  TaskPriorityOption,
  TaskPrioritySelectValue,
  TaskStatusOption,
  TaskStatusSelectValue,
  TaskTypeOption,
  TaskTypeSelectValue,
} from "./task-select-options";

interface TaskEditorSelectProps {
  itemKey: (item: ArkSelect.CollectionItem) => string;
  label: string;
  renderItem: (item: ArkSelect.CollectionItem) => ReactNode;
  selectValue: ReactNode;
}

const TaskEditorSelect: ArkSelect.RootComponent<TaskEditorSelectProps> = (
  props
) => {
  const {
    collection,
    itemKey,
    label,
    onValueChange,
    renderItem,
    selectValue,
    value,
  } = props;

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Select
        collection={collection}
        onValueChange={onValueChange}
        value={value}
      >
        <SelectTrigger className="w-full">{selectValue}</SelectTrigger>
        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem item={item} key={itemKey(item)}>
              {renderItem(item)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
};

export const TaskEditorFields = ({
  draft,
  onDraftChange,
}: {
  draft: TaskDraft;
  onDraftChange: Dispatch<SetStateAction<TaskDraft>>;
}) => {
  const patchDraft = <K extends keyof TaskDraft>(
    key: K,
    value: TaskDraft[K]
  ) => {
    onDraftChange((current) => ({ ...current, [key]: value }));
  };

  return (
    <FieldGroup className="gap-5">
      <Field className="sm:col-span-2">
        <FieldLabel>Task title</FieldLabel>
        <Input
          onChange={(event) => patchDraft("title", event.target.value)}
          placeholder="Describe the work clearly"
          value={draft.title}
        />
      </Field>
      <div className="grid gap-5 border-t pt-5 sm:grid-cols-2">
        <TaskEditorSelect
          collection={typeCollection}
          itemKey={(item) => item.value}
          label="Type"
          onValueChange={({ value }) =>
            patchDraft("type", (value[0] ?? "") as TaskType)
          }
          renderItem={(item) => (
            <TaskTypeOption type={item.value as TaskType} />
          )}
          selectValue={<TaskTypeSelectValue />}
          value={[draft.type]}
        />
        <TaskEditorSelect
          collection={priorityCollection}
          itemKey={(item) => item}
          label="Priority"
          onValueChange={({ value }) =>
            patchDraft("priority", (value[0] ?? "") as TaskPriority)
          }
          renderItem={(item) => <TaskPriorityOption priority={item} />}
          selectValue={<TaskPrioritySelectValue />}
          value={[draft.priority]}
        />
        <TaskEditorSelect
          collection={statusCollection}
          itemKey={(item) => item}
          label="Status"
          onValueChange={({ value }) =>
            patchDraft("status", (value[0] ?? "") as TaskStatus)
          }
          renderItem={(item) => <TaskStatusOption status={item} />}
          selectValue={<TaskStatusSelectValue />}
          value={[draft.status]}
        />
        <TaskEditorSelect
          collection={assigneeCollection}
          itemKey={(item) => item.value}
          label="Assigned"
          onValueChange={({ value }) =>
            patchDraft("assigneeId", (value[0] ?? "") as TaskAssigneeId)
          }
          renderItem={(item) => (
            <TaskAssigneeOption assigneeId={item.value as TaskAssigneeId} />
          )}
          selectValue={<TaskAssigneeSelectValue />}
          value={[draft.assigneeId]}
        />
      </div>
    </FieldGroup>
  );
};
