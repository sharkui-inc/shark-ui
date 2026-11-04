"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/registry/react/components/dialog";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </MenuTrigger>
        <MenuContent className="min-w-40">
          <MenuItem onSelect={() => setDialogOpen(true)} value="dialog">
            Settings
          </MenuItem>
        </MenuContent>
      </Menu>
      <Dialog onOpenChange={(e) => setDialogOpen(e.open)} open={dialogOpen}>
        <DialogContent>
          <DialogHeader
            description="Change your preferences."
            title="Settings"
          />
          <DialogBody>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input defaultValue="ada@example.com" type="email" />
            </Field>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Save</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Example;
