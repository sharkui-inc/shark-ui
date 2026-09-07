"use client";

import { useState } from "react";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => {
  const [activeFile, setActiveFile] = useState(FILES[0].value);
  const file = FILES.find((item) => item.value === activeFile) ?? FILES[0];

  return (
    <Tabs
      onValueChange={(details) => setActiveFile(details.value)}
      value={activeFile}
    >
      <CodeBlock className="max-w-lg" code={file.code} language={file.language}>
        <CodeBlockHeader>
          <TabsList className="min-w-0 overflow-x-auto" variant="underline">
            {FILES.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.filename}
              </TabsTrigger>
            ))}
          </TabsList>
          <CodeBlockActions>
            <CodeBlockCopy />
          </CodeBlockActions>
        </CodeBlockHeader>
        {FILES.map((item) => (
          <TabsContent key={item.value} value={item.value}>
            <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
              <CodeBlockContent
                code={item.code}
                language={item.language}
                showLineNumbers
              />
            </ScrollArea>
          </TabsContent>
        ))}
      </CodeBlock>
    </Tabs>
  );
};

const FILES = [
  {
    code: 'export const siteName = "Shark UI";',
    filename: "config.ts",
    language: "typescript",
    value: "config",
  },
  {
    code: 'import { siteName } from "./config";\n\nconsole.log(siteName);',
    filename: "index.ts",
    language: "typescript",
    value: "index",
  },
] as const;

export default Example;
