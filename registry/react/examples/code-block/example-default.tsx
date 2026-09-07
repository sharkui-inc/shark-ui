import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const CodeBlockDemo = () => (
  <CodeBlock className="max-w-lg" code={CODE}>
    <CodeBlockHeader title="src/utils/helpers.ts">
      <CodeBlockActions>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
      <CodeBlockContent showLineNumbers />
    </ScrollArea>
  </CodeBlock>
);

const CODE = `export function isValidEmail(email: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`;

export default CodeBlockDemo;
