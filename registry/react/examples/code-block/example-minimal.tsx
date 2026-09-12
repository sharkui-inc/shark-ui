import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopy,
} from "@/registry/react/components/code-block";

const Example = () => (
  <CodeBlock className="w-full max-w-lg" code={CODE} language="bash">
    <div className="relative min-w-0">
      <CodeBlockContent />
      <CodeBlockCopy className="absolute end-2 top-2 bg-card/80" />
    </div>
  </CodeBlock>
);

const CODE = "pnpm dlx shadcn@latest add @shark/code-block";

export default Example;
