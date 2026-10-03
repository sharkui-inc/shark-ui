"use client";

import { createListCollection } from "@ark-ui/react";
import { PencilIcon, SquarePlusIcon, Trash2Icon } from "lucide-react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemDescription,
  ListboxItemGroup,
  ListboxItemText,
  ListboxSeparator,
  ListboxShortcut,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox
    className="w-full max-w-64"
    collection={collection}
    selectionMode="none"
  >
    <ListboxContent>
      <ListboxItemGroup heading="Actions">
        <ListboxItem item={collection.items[0]}>
          <SquarePlusIcon aria-hidden />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <ListboxItemText>New file</ListboxItemText>
            <ListboxItemDescription>Create a new file</ListboxItemDescription>
          </div>
          <ListboxShortcut>⌘N</ListboxShortcut>
        </ListboxItem>
        <ListboxItem item={collection.items[1]}>
          <PencilIcon aria-hidden />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <ListboxItemText>Edit file</ListboxItemText>
            <ListboxItemDescription>Make changes</ListboxItemDescription>
          </div>
          <ListboxShortcut>⌘E</ListboxShortcut>
        </ListboxItem>
      </ListboxItemGroup>
      <ListboxSeparator />
      <ListboxItemGroup heading="Danger zone">
        <ListboxItem item={collection.items[2]} variant="destructive">
          <Trash2Icon aria-hidden />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <ListboxItemText>Delete file</ListboxItemText>
            <ListboxItemDescription>Move to trash</ListboxItemDescription>
          </div>
          <ListboxShortcut>⌘D</ListboxShortcut>
        </ListboxItem>
      </ListboxItemGroup>
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    { label: "New file", section: "actions", value: "new-file" },
    { label: "Edit file", section: "actions", value: "edit-file" },
    {
      label: "Delete file",
      section: "danger",
      value: "delete-file",
    },
  ],
});

export default Example;
