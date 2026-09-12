import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";

const Example = () => (
  <CodeBlock className="w-full max-w-lg" code={INSTALL_COMMAND} language="bash">
    <CodeBlockHeader>
      <CodeBlockTitle>
        <CodeBlockFilename>install.log</CodeBlockFilename>
      </CodeBlockTitle>
    </CodeBlockHeader>
    <CodeBlockContent code={OUTPUT} language="text" />
  </CodeBlock>
);

const INSTALL_COMMAND = "pnpm add @shark/code-block";
const OUTPUT = "Installed @shark/code-block\nDone in 1.4s";

export default Example;
