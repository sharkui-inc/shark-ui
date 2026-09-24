"use client";

import { Menu } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const Example = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div className="relative flex size-full items-center justify-center">
      <div className="absolute inset-e-4 top-4">
        <Field orientation="horizontal">
          <FieldLabel>Debug</FieldLabel>
          <Switch
            checked={show}
            onCheckedChange={({ checked }) => setShow(checked)}
          />
        </Field>
      </div>

      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <Button
          className={cn("hitbox-2", { "hitbox-debug": show })}
          variant="outline"
        >
          hitbox-6
        </Button>
        <Button
          aria-label="Menu"
          className={cn("hitbox-2", { "hitbox-debug": show })}
          size="icon-md"
          variant="ghost"
        >
          <Menu />
        </Button>
      </div>
    </div>
  );
};

export default Example;
