"use client";

import { ListOrderedIcon } from "lucide-react";
import { useState } from "react";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import { Toggle } from "@/registry/react/components/toggle";

const Example = () => {
  const [showLineNumbers, setShowLineNumbers] = useState(true);

  return (
    <CodeBlock className="w-full max-w-lg" code={CODE} language="json">
      <CodeBlockHeader>
        <CodeBlockTitle>
          <CodeBlockFilename>components.json</CodeBlockFilename>
        </CodeBlockTitle>
        <CodeBlockActions>
          <Toggle
            aria-label={
              showLineNumbers ? "Hide line numbers" : "Show line numbers"
            }
            className="size-6 min-w-0 px-0"
            onPressedChange={setShowLineNumbers}
            pressed={showLineNumbers}
            size="sm"
            variant="ghost"
          >
            <ListOrderedIcon aria-hidden="true" />
          </Toggle>
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent showLineNumbers={showLineNumbers} />
    </CodeBlock>
  );
};

const CODE = `{
  "style": "new-york",
  "tsx": true
}`;

export default Example;
