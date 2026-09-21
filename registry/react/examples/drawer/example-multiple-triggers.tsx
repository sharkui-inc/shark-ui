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

const Example = () => {
  const [teammate, setTeammate] = React.useState(users[0].name);

  return (
    <Drawer>
      <div className="flex flex-wrap justify-center gap-2">
        {users.map((user) => (
          <DrawerTrigger asChild key={user.value} value={user.value}>
            <Button onClick={() => setTeammate(user.name)} variant="outline">
              Edit {user.name}
            </Button>
          </DrawerTrigger>
        ))}
      </div>
      <DrawerContent>
        <DrawerHeader
          description="One drawer, opened by either button."
          title={`Edit ${teammate}`}
        />
        <DrawerBody>
          <div className="mx-auto w-full max-w-xs">
            <p className="text-muted-foreground text-sm">
              The title follows the trigger you pressed.
            </p>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <div className="mx-auto w-full max-w-xs">
            <DrawerClose asChild>
              <Button className="w-full" variant="outline">
                Close
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const users = [
  { name: "Alice", value: "alice" },
  { name: "Bob", value: "bob" },
];

export default Example;
