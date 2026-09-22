"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => {
  const [activeUser, setActiveUser] = React.useState<User | null>(null);

  return (
    <Sheet
      onTriggerValueChange={({ value }) => {
        setActiveUser(users.find((user) => user.value === value) ?? null);
      }}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {users.map((user) => (
          <SheetTrigger asChild key={user.value} value={user.value}>
            <Button variant="outline">Edit {user.name}</Button>
          </SheetTrigger>
        ))}
      </div>
      <SheetContent>
        <SheetHeader
          description="One sheet, shared across every trigger."
          title={activeUser ? `Edit ${activeUser.name}` : "Edit teammate"}
        />
        <SheetBody>
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
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Save</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

type User = (typeof users)[number];

const users = [
  { email: "alice@onda.dev", name: "Alice", value: "alice" },
  { email: "bob@onda.dev", name: "Bob", value: "bob" },
];

export default Example;
