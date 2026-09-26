import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const Example = () => (
  <CodeBlock className="w-full max-w-lg" code={CODE} language="tsx">
    <CodeBlockHeader title="session.ts">
      <CodeBlockActions>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <CodeBlockContent highlightedLines={[2, 3]} showLineNumbers />
  </CodeBlock>
);

const CODE = `export function isAuthenticated(session: Session | null) {
  if (!session) return false;
  return session.expiresAt > new Date();
}`;

export default Example;
