"use client";

import { createListCollection } from "@ark-ui/react";
import { PencilIcon, SquarePlusIcon, Trash2Icon } from "lucide-react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemDescription,
  ListboxItemGroup,
  ListboxItemText,
  ListboxShortcut,
} from "@/registry/react/components/listbox";
import { Separator } from "@/registry/react/components/separator";

const Example = () => (
  <Item className="w-full max-w-64 p-1" variant="outline">
    <Listbox
      aria-label="File actions"
      className="w-full"
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
        <Separator />
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
  </Item>
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
