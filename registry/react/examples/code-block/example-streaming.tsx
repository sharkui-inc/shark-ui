"use client";

import { useEffect, useState } from "react";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => {
  const [length, setLength] = useState(0);
  const isStreaming = length < STREAMED_CODE.length;
  const code = STREAMED_CODE.slice(0, length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLength((current) => Math.min(current + 5, STREAMED_CODE.length));
    }, 90);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <CodeBlock
      className="max-w-lg"
      code={code}
      isStreaming={isStreaming}
      language="tsx"
    >
      <CodeBlockHeader title="generated.tsx">
        <CodeBlockActions>
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockHeader>
      <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
        <CodeBlockContent showLineNumbers />
      </ScrollArea>
    </CodeBlock>
  );
};

const STREAMED_CODE = `export function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}!</p>;
}`;

export default Example;
