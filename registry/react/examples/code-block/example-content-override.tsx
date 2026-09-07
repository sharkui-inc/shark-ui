import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <CodeBlock className="max-w-lg" code={INSTALL_COMMAND} language="bash">
    <CodeBlockHeader>
      <CodeBlockTitle>
        <CodeBlockFilename>install.sh</CodeBlockFilename>
      </CodeBlockTitle>
    </CodeBlockHeader>
    <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
      <CodeBlockContent code={OUTPUT} language="text" />
    </ScrollArea>
  </CodeBlock>
);

const INSTALL_COMMAND = "pnpm add @shark/code-block";
const OUTPUT = "Packages: +1\nDone in 1.4s";

export default Example;
