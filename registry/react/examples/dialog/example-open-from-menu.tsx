"use client";

import { InfoIcon, SettingsIcon, UserIcon } from "lucide-react";
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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem onSelect={() => setIsOpen(true)} value="settings">
            <SettingsIcon />
            Open settings
          </MenuItem>
          <MenuItem disabled value="profile">
            <UserIcon />
            View profile
          </MenuItem>
          <MenuItem disabled value="help">
            <InfoIcon />
            Help
          </MenuItem>
        </MenuContent>
      </Menu>

      <Dialog onOpenChange={({ open }) => setIsOpen(open)} open={isOpen}>
        <DialogContent>
          <DialogHeader
            description="Update how your name appears."
            title="Settings"
          />
          <DialogBody>
            <Field>
              <FieldLabel>Display name</FieldLabel>
              <Input defaultValue="Ada Lovelace" />
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
