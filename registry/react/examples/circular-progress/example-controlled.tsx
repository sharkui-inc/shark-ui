"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { CircularProgress } from "@/registry/react/components/circular-progress";

const Example = () => {
  const [value, setValue] = React.useState(55);

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4">
      <ButtonGroup>
        <Button
          clickEffect={false}
          onClick={() => setValue(Math.max(0, value - 10))}
          size="icon-sm"
          variant="outline"
        >
          <MinusIcon />
        </Button>
        <Button
          clickEffect={false}
          onClick={() => setValue(Math.min(100, value + 10))}
          size="icon-sm"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <CircularProgress value={value} />
    </div>
  );
};

export default Example;
