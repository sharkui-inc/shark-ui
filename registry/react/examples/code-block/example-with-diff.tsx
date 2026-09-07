import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Tabs defaultValue="source">
    <CodeBlock className="max-w-lg" code={UPDATED_CODE} language="tsx">
      <CodeBlockHeader className="px-2 py-1">
        <CodeBlockTitle className="ps-2">
          <CodeBlockFilename>src/profile.ts</CodeBlockFilename>
        </CodeBlockTitle>
        <TabsList variant="underline">
          <TabsTrigger value="source">Source</TabsTrigger>
          <TabsTrigger value="changes">Changes</TabsTrigger>
        </TabsList>
        <CodeBlockActions>
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockHeader>
      <TabsContent value="source">
        <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
          <CodeBlockContent showLineNumbers />
        </ScrollArea>
      </TabsContent>
      <TabsContent value="changes">
        <Diff className="rounded-none border-0">
          <DiffHeader title="src/profile.ts">
            <DiffStats added={2} removed={1} />
          </DiffHeader>
          <DiffContent>
            <DiffLine line={2} type="context">
              {"  return {"}
            </DiffLine>
            <DiffLine line={3} type="context">
              {"    name: user.name,"}
            </DiffLine>
            <DiffLine line={4} type="delete">
              {"    email: user.email,"}
            </DiffLine>
            <DiffLine line={4} type="add">
              {"    email: user.email.toLowerCase(),"}
            </DiffLine>
            <DiffLine line={5} type="add">
              {"    avatarUrl: user.avatarUrl,"}
            </DiffLine>
            <DiffLine line={6} type="context">
              {"  };"}
            </DiffLine>
          </DiffContent>
        </Diff>
      </TabsContent>
    </CodeBlock>
  </Tabs>
);

const UPDATED_CODE = `export function profileDetails(user: User) {
  return {
    name: user.name,
    email: user.email.toLowerCase(),
    avatarUrl: user.avatarUrl,
  };
}`;

export default Example;
