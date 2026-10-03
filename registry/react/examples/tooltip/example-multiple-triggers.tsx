"use client";

import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => {
  const [activeTool, setActiveTool] = React.useState<
    (typeof tools)[number] | null
  >(null);

  return (
    <Tooltip
      onTriggerValueChange={({ value }) => {
        setActiveTool(tools.find((tool) => tool.value === value) ?? null);
      }}
    >
      <ButtonGroup>
        {tools.map((tool) => (
          <TooltipTrigger asChild key={tool.value} value={tool.value}>
            <Button clickEffect={false} size="icon-md" variant="outline">
              <tool.icon />
              <span className="sr-only">{tool.label}</span>
            </Button>
          </TooltipTrigger>
        ))}
      </ButtonGroup>
      <TooltipContent>
        {activeTool ? (
          <>
            <p>{activeTool.label}</p>
            <KbdGroup>
              {activeTool.keys.map((key) => (
                <Kbd key={key}>{key}</Kbd>
              ))}
            </KbdGroup>
          </>
        ) : null}
      </TooltipContent>
    </Tooltip>
  );
};

const tools = [
  { icon: BoldIcon, keys: ["⌘", "B"], label: "Bold", value: "bold" },
  { icon: ItalicIcon, keys: ["⌘", "I"], label: "Italic", value: "italic" },
  {
    icon: UnderlineIcon,
    keys: ["⌘", "U"],
    label: "Underline",
    value: "underline",
  },
  {
    icon: StrikethroughIcon,
    keys: ["⌘", "⇧", "X"],
    label: "Strikethrough",
    value: "strikethrough",
  },
];

export default Example;
