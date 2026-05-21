"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import React from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const Example = () => {
  const [value, setValue] = React.useState(["bold"]);

  return (
    <div className="flex flex-col items-center gap-4">
      <ToggleGroup onValueChange={({ value }) => setValue(value)} value={value}>
        <ToggleGroupItem aria-label="Toggle bold" value="bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle italic" value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Toggle underline" value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>

      <p className="text-center text-muted-foreground text-sm">
        {value.length > 0 ? value.join(", ") : "None"}
      </p>
    </div>
  );
};

export default Example;
