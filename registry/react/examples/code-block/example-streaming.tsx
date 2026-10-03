"use client";

import { RefreshCwIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const Example = () => {
  const [length, setLength] = React.useState(initialLength);
  const isStreaming = length < STREAMED_CODE.length;
  const code = STREAMED_CODE.slice(0, length);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setLength((current) => Math.min(current + 5, STREAMED_CODE.length));
    }, 90);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative flex size-full items-center justify-center">
      <div className="absolute inset-e-4 top-4">
        <Button
          aria-label="Reload"
          onClick={() => setLength(initialLength())}
          size="icon-md"
          variant="ghost"
        >
          <RefreshCwIcon aria-hidden />
        </Button>
      </div>

      <CodeBlock
        className="w-full max-w-lg"
        code={code}
        isStreaming={isStreaming}
        language="tsx"
      >
        <CodeBlockHeader title="generated.tsx">
          <CodeBlockActions>
            <CodeBlockCopy />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent showLineNumbers />
      </CodeBlock>
    </div>
  );
};

const STREAMED_CODE = `export const Greeting = (props) => {
  const { name } = props;
  return (
    <section>
      <h1>Welcome back</h1>
      <p>
        Hello, <strong>{name}</strong>! Your workspace is ready.
      </p>
    </section>
  );
}`;

const initialLength = () => STREAMED_CODE.indexOf("\n") + 1;

export default Example;
