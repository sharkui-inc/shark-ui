"use client";

import { createListCollection } from "@ark-ui/react";
import { PencilIcon, SquarePlusIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
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

export const FileActionsExample = (props: React.ComponentProps<"div">) => {
  const [dialog, setDialog] = useState<"delete" | "edit" | "new" | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  return (
    <>
      <Item className="p-1" variant="outline" {...props}>
        <Listbox
          aria-label="File actions"
          className="w-full"
          collection={collection}
          onSelect={({ value }) => {
            if (value === "new-file") {
              setDialog("new");
            } else if (value === "edit-file") {
              setDialog("edit");
            } else if (value === "delete-file") {
              setDialog("delete");
            }
          }}
          selectionMode="none"
        >
          <ListboxContent>
            <ListboxItemGroup heading="Actions">
              <ListboxItem item={collection.items[0]}>
                <SquarePlusIcon aria-hidden="true" className="h-lh w-3.5" />
                <ListboxItemText>New file</ListboxItemText>
                <ListboxItemDescription>
                  Create a new file
                </ListboxItemDescription>
                <ListboxShortcut>⌘N</ListboxShortcut>
              </ListboxItem>
              <ListboxItem item={collection.items[1]}>
                <PencilIcon aria-hidden="true" className="h-lh w-3.5" />
                <ListboxItemText>Edit file</ListboxItemText>
                <ListboxItemDescription>Make changes</ListboxItemDescription>
                <ListboxShortcut>⌘E</ListboxShortcut>
              </ListboxItem>
            </ListboxItemGroup>
            <Separator />
            <ListboxItemGroup heading="Danger zone">
              <ListboxItem item={collection.items[2]} variant="destructive">
                <Trash2Icon aria-hidden="true" className="h-lh w-3.5" />
                <ListboxItemText>Delete file</ListboxItemText>
                <ListboxItemDescription>Move to trash</ListboxItemDescription>
                <ListboxShortcut>⌘⇧D</ListboxShortcut>
              </ListboxItem>
            </ListboxItemGroup>
          </ListboxContent>
        </Listbox>
      </Item>

      <Dialog
        onOpenChange={({ open }) => {
          if (!open) {
            setDialog(null);
          }
        }}
        open={dialog === "new" || dialog === "edit"}
      >
        <DialogContent>
          <form
            className="contents"
            onSubmit={async (event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const name = String(form.get("filename") ?? "untitled.md");
              setIsSaving(true);
              await new Promise((resolve) => {
                window.setTimeout(resolve, 600);
              });
              setIsSaving(false);
              const isNew = dialog === "new";
              setDialog(null);
              toast.success({
                description: name,
                title: isNew ? "File created" : "File updated",
              });
            }}
          >
            <DialogHeader
              description={
                dialog === "new"
                  ? "Name the file to add it to this preview."
                  : "Rename the current file in this preview."
              }
              title={dialog === "new" ? "New file" : "Edit file"}
            />
            <DialogBody>
              <FieldGroup>
                <Field>
                  <FieldLabel>Filename</FieldLabel>
                  <Input
                    defaultValue={dialog === "edit" ? "notes.md" : ""}
                    name="filename"
                    placeholder="notes.md"
                    required
                  />
                </Field>
              </FieldGroup>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button isLoading={isSaving} type="submit">
                {dialog === "new" ? "Create" : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog
        onOpenChange={({ open }) => {
          if (!open) {
            setDialog(null);
          }
        }}
        open={dialog === "delete"}
      >
        <AlertDialogContent>
          <AlertDialogHeader
            description="This preview will move notes.md to trash."
            title="Delete this file?"
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogClose asChild>
              <AlertDialogAction
                onClick={() => {
                  setDialog(null);
                  toast.success({
                    description: "notes.md was moved to trash.",
                    title: "File deleted",
                  });
                }}
                variant="destructive"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const collection = createListCollection({
  items: [
    { label: "New file", value: "new-file" },
    { label: "Edit file", value: "edit-file" },
    { label: "Delete file", value: "delete-file" },
  ],
});
