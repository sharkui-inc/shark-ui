"use client";

import { PencilIcon, Trash2Icon, XIcon } from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarTrigger,
  ActionBarValue,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ActionBar onOpenChange={setIsOpen} open={isOpen}>
      <ActionBarTrigger asChild>
        <Button variant="outline">Open</Button>
      </ActionBarTrigger>
      <ActionBarContent
        aria-label="Bulk actions"
        className="[--space:--spacing(2)]"
      >
        <ActionBarValue count={2} />
        <ActionBarSeparator />
        <ActionBarBody>
          <Button variant="ghost">
            <PencilIcon />
            <span className="max-sm:sr-only">Edit</span>
          </Button>
          <ActionBarSeparator />
          <Button variant="destructive">
            <Trash2Icon />
            <span className="max-sm:sr-only">Delete</span>
          </Button>
        </ActionBarBody>
        <ActionBarSeparator />
        <ActionBarClose asChild>
          <Button size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>
      </ActionBarContent>
    </ActionBar>
  );
};

export default Example;
