import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const CodeBlockDemo = () => (
  <CodeBlock className="w-full max-w-lg" code={CODE} language="tsx">
    <CodeBlockHeader title="src/utils/helpers.ts">
      <CodeBlockActions>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <CodeBlockContent showLineNumbers />
  </CodeBlock>
);

const CODE = `export function isValidEmail(email: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`;

export default CodeBlockDemo;
