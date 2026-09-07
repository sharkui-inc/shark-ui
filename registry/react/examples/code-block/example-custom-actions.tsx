import { EllipsisIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <CodeBlock className="max-w-lg" code={CODE} language="json">
    <CodeBlockHeader>
      <CodeBlockTitle>
        <CodeBlockFilename>components.json</CodeBlockFilename>
      </CodeBlockTitle>
      <CodeBlockActions>
        <Button
          aria-label="More code actions"
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <EllipsisIcon aria-hidden="true" />
        </Button>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
      <CodeBlockContent showLineNumbers />
    </ScrollArea>
  </CodeBlock>
);

const CODE = `{
  "style": "new-york",
  "tsx": true
}`;

export default Example;
