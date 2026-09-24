"use client";

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

      <div className="flex flex-wrap gap-4">
        <Button
          className={cn("hitbox-l-4", { "hitbox-debug": show })}
          clickEffect={false}
          variant="secondary"
        >
          Left
        </Button>
        <Button
          className={cn("hitbox-t-4", { "hitbox-debug": show })}
          clickEffect={false}
          variant="secondary"
        >
          Top
        </Button>
        <Button
          className={cn("hitbox-b-4", { "hitbox-debug": show })}
          clickEffect={false}
          variant="secondary"
        >
          Bottom
        </Button>
        <Button
          className={cn("hitbox-r-4", { "hitbox-debug": show })}
          clickEffect={false}
          variant="secondary"
        >
          Right
        </Button>
      </div>
    </div>
  );
};

export default Example;
