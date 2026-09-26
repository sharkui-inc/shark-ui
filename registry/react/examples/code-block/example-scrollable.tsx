import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const Example = () => (
  <CodeBlock className="h-52 w-full max-w-lg" code={CODE} language="tsx">
    <CodeBlockHeader title="routes.ts">
      <CodeBlockActions>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <CodeBlockContent showLineNumbers />
  </CodeBlock>
);

const CODE = [
  "export const routes = {",
  ...Array.from(
    { length: 48 },
    (_, index) =>
      `  ${JSON.stringify(`/docs/section-${index + 1}`)}: Section${index + 1},`
  ),
  "} as const;",
].join("\n");

export default Example;
