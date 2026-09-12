"use client";

import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  EllipsisIcon,
  ListRestartIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarValue,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import type { TaskStatus } from "../_data/tasks";

interface TaskSelectionActionBarProps {
  children: ReactNode;
  onClearSelection: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onMove: (status: TaskStatus) => void;
  selectedCount: number;
}

export const TaskSelectionActionBar = ({
  children,
  onClearSelection,
  onDelete,
  onDuplicate,
  onMove,
  selectedCount,
}: TaskSelectionActionBarProps) => (
  <ActionBar
    onOpenChange={({ open }) => {
      if (!open) {
        onClearSelection();
      }
    }}
    open={selectedCount > 0}
  >
    {children}
    <ActionBarContent aria-label="Actions for selected tasks">
      <ActionBarValue count={selectedCount}>
        {selectedCount} selected
      </ActionBarValue>
      <ActionBarSeparator />
      <ActionBarBody>
        <Button
          aria-label="Duplicate selected tasks"
          onClick={onDuplicate}
          size="icon-sm"
          variant="ghost"
        >
          <CopyIcon aria-hidden="true" />
        </Button>
        <Button
          aria-label="Mark selected tasks as done"
          onClick={() => onMove("Done")}
          size="icon-sm"
          variant="ghost"
        >
          <CheckIcon aria-hidden="true" />
        </Button>
        <Menu positioning={{ placement: "top" }}>
          <MenuTrigger asChild>
            <Button
              aria-label="More task actions"
              size="icon-sm"
              variant="ghost"
            >
              <EllipsisIcon aria-hidden="true" />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem
              onClick={() => onMove("In Progress")}
              value="move-to-active"
            >
              <ArrowRightIcon aria-hidden="true" />
              Move to active
            </MenuItem>
            <MenuItem onClick={() => onMove("Backlog")} value="move-to-backlog">
              <ListRestartIcon aria-hidden="true" />
              Move to backlog
            </MenuItem>
            <MenuItem
              onClick={() => onMove("Canceled")}
              value="cancel-tasks"
              variant="destructive"
            >
              <XIcon aria-hidden="true" />
              Cancel tasks
            </MenuItem>
          </MenuContent>
        </Menu>
        <ActionBarSeparator />
        <Button
          aria-label="Delete selected tasks"
          onClick={onDelete}
          size="icon-sm"
          variant="destructive"
        >
          <Trash2Icon aria-hidden="true" />
        </Button>
      </ActionBarBody>
      <ActionBarSeparator />
      <ActionBarClose asChild onClick={onClearSelection}>
        <Button aria-label="Clear selection" size="icon-sm" variant="ghost">
          <XIcon aria-hidden="true" />
        </Button>
      </ActionBarClose>
    </ActionBarContent>
  </ActionBar>
);
