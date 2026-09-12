import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const Example = () => (
  <CodeBlock className="h-52 w-full max-w-lg" code={CODE} language="tsx">
    <CodeBlockHeader title="routes.ts" />
    <CodeBlockContent showLineNumbers />
  </CodeBlock>
);

const CODE = [
  "export const routes = {",
  ...Array.from(
    { length: 18 },
    (_, index) =>
      `  ${JSON.stringify(`/docs/section-${index + 1}`)}: Section${index + 1},`
  ),
  "} as const;",
].join("\n");

export default Example;
