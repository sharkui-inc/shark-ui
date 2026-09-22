"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const [activeUser, setActiveUser] = React.useState<User | null>(null);

  return (
    <Drawer
      onTriggerValueChange={({ value }) => {
        setActiveUser(users.find((user) => user.value === value) ?? null);
      }}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {users.map((user) => (
          <DrawerTrigger asChild key={user.value} value={user.value}>
            <Button variant="outline">Edit {user.name}</Button>
          </DrawerTrigger>
        ))}
      </div>
      <DrawerContent>
        <DrawerHeader
          description="One drawer, shared across every trigger."
          title={activeUser ? `Edit ${activeUser.name}` : "Edit teammate"}
        />
        <DrawerBody className="text-start">
          {activeUser ? (
            <div className="mx-auto w-full max-w-xs">
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
            </div>
          ) : null}
        </DrawerBody>
        <DrawerFooter>
          <div className="mx-auto flex w-full max-w-xs gap-2">
            <DrawerClose asChild>
              <Button className="flex-1" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button className="flex-1">Save</Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

type User = (typeof users)[number];

const users = [
  { email: "alice@onda.dev", name: "Alice", value: "alice" },
  { email: "bob@onda.dev", name: "Bob", value: "bob" },
];

export default Example;
