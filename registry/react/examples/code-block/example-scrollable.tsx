import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <CodeBlock className="max-w-lg" code={CODE} language="tsx">
    <CodeBlockHeader title="number-generator.ts" />
    <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-48">
      <CodeBlockContent showLineNumbers />
    </ScrollArea>
  </CodeBlock>
);

const CODE = Array.from(
  { length: 30 },
  (_, index) => `export const value${index + 1} = ${index + 1};`
).join("\n");

export default Example;
