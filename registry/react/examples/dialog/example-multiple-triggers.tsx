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
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const [activeUser, setActiveUser] = React.useState<User | null>(null);

  return (
    <Dialog
      onTriggerValueChange={({ value }) => {
        setActiveUser(users.find((user) => user.value === value) ?? null);
      }}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {users.map((user) => (
          <DialogTrigger asChild key={user.value} value={user.value}>
            <Button variant="outline">Edit {user.name}</Button>
          </DialogTrigger>
        ))}
      </div>
      <DialogContent>
        <DialogHeader
          description="One dialog, shared across every trigger."
          title={activeUser ? `Edit ${activeUser.name}` : "Edit teammate"}
        />
        <DialogBody>
          {activeUser ? (
            <FieldGroup key={activeUser.value}>
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input defaultValue={activeUser.name} />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input defaultValue={activeUser.email} />
              </Field>
            </FieldGroup>
          ) : null}
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
  );
};

type User = (typeof users)[number];

const users = [
  { email: "alice@onda.dev", name: "Alice", value: "alice" },
  { email: "bob@onda.dev", name: "Bob", value: "bob" },
];

export default Example;
