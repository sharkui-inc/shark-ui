"use client";

import { useEffect, useState } from "react";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const Example = () => {
  const [length, setLength] = useState(() => STREAMED_CODE.indexOf("\n") + 1);
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
      className="h-48 w-full max-w-lg"
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
  );
};

const STREAMED_CODE = `export function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}!</p>;
}`;

export default Example;
