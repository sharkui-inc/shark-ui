"use client";

import { createListCollection } from "@ark-ui/react";
import { Trash2Icon } from "lucide-react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox
    className="w-full max-w-xs"
    collection={collection}
    selectionMode="none"
  >
    <ListboxContent className="rounded-2xl border shadow-xs/4">
      {collection.items.map((item) => (
        <ListboxItem item={item} key={item.value} variant="destructive">
          <Trash2Icon aria-hidden="true" />
          <ListboxItemText>{item.label}</ListboxItemText>
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    { label: "Delete project", value: "delete-project" },
    { label: "Remove member", value: "remove-member" },
    { label: "Revoke access", value: "revoke-access" },
  ],
});

export default Example;
