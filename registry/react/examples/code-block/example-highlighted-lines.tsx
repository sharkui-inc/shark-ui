import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <CodeBlock className="max-w-lg" code={CODE} language="tsx">
    <CodeBlockHeader title="auth.ts">
      <CodeBlockActions>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
      <CodeBlockContent highlightedLines={[3, 4]} showLineNumbers />
    </ScrollArea>
  </CodeBlock>
);

const CODE = `export function isAuthenticated(session: Session | null) {
  if (!session) return false;

  return session.expiresAt > new Date();
}`;

export default Example;
