"use client";

import type { Dispatch, FormEvent, SetStateAction } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/registry/react/components/dialog";
import type { TaskDraft, TaskEditorState } from "../_data/tasks";
import { TaskEditorFields } from "./task-editor-fields";

interface TaskEditorDialogProps {
  draft: TaskDraft;
  editor: TaskEditorState | null;
  onDraftChange: Dispatch<SetStateAction<TaskDraft>>;
  onOpenChange: (open: boolean) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const TaskEditorDialog = (props: TaskEditorDialogProps) => {
  const { draft, editor, onDraftChange, onOpenChange, onSubmit } = props;
  const isCreating = editor?.mode === "create";

  return (
    <Dialog onOpenChange={({ open }) => onOpenChange(open)} open={!!editor}>
      <DialogContent size="lg">
        <DialogHeader
          description={
            isCreating
              ? "Give it a title and an owner."
              : "Change the title, status, or owner."
          }
          title={isCreating ? "New task" : "Edit task"}
        />
        <form className="contents" onSubmit={onSubmit}>
          <DialogBody className="pt-1">
            <TaskEditorFields draft={draft} onDraftChange={onDraftChange} />
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={!draft.title.trim()} type="submit">
              {isCreating ? "Create task" : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
