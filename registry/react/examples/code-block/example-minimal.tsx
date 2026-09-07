import {
  CodeBlock,
  CodeBlockContent,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <CodeBlock className="max-w-lg" code={CODE} language="bash">
    <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
      <CodeBlockContent />
    </ScrollArea>
  </CodeBlock>
);

const CODE = "pnpm dlx shadcn@latest add @shark/code-block";

export default Example;
