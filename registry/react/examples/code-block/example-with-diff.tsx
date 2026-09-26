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
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Tabs className="w-full max-w-lg" defaultValue="source">
    <CodeBlock className="h-72" code={UPDATED_CODE} language="tsx">
      <CodeBlockHeader>
        <CodeBlockTitle>
          <CodeBlockFilename>src/profile.ts</CodeBlockFilename>
        </CodeBlockTitle>
        <TabsList className="shrink-0" variant="underline">
          <TabsTrigger className="grow-0" value="source">
            Source
          </TabsTrigger>
          <TabsTrigger className="grow-0" value="changes">
            Changes
          </TabsTrigger>
        </TabsList>
        <CodeBlockActions>
          <DiffStats added={2} removed={1} />
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockHeader>
      <TabsContent className="flex min-h-0 flex-1 flex-col" value="source">
        <CodeBlockContent showLineNumbers />
      </TabsContent>
      <TabsContent className="flex min-h-0 flex-1 flex-col" value="changes">
        <Diff className="min-h-0 flex-1 rounded-none border-0 shadow-none">
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
