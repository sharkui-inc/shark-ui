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

      <div className="flex flex-wrap gap-8">
        <Button
          className={cn("hitbox-[21px]", { "hitbox-debug": show })}
          clickEffect={false}
          variant="secondary"
        >
          Custom
        </Button>
        <Button
          className={cn("hitbox-r-[21px]", { "hitbox-debug": show })}
          clickEffect={false}
          variant="secondary"
        >
          Left only, custom
        </Button>
      </div>
    </div>
  );
};

export default Example;
