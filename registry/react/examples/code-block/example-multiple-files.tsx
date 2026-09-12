"use client";

import { useState } from "react";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
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
      className="w-full max-w-lg"
      onValueChange={(details) => setActiveFile(details.value)}
      value={activeFile}
    >
      <CodeBlock className="h-52" code={file.code} language={file.language}>
        <CodeBlockHeader>
          <TabsList
            className="min-w-0 flex-1 justify-start overflow-x-auto"
            variant="underline"
          >
            {FILES.map((item) => (
              <TabsTrigger
                className="grow-0"
                key={item.value}
                value={item.value}
              >
                {item.filename}
              </TabsTrigger>
            ))}
          </TabsList>
          <CodeBlockActions>
            <CodeBlockCopy />
          </CodeBlockActions>
        </CodeBlockHeader>
        {FILES.map((item) => (
          <TabsContent
            className="flex min-h-0 flex-1 flex-col"
            key={item.value}
            value={item.value}
          >
            <CodeBlockContent
              code={item.code}
              language={item.language}
              showLineNumbers
            />
          </TabsContent>
        ))}
      </CodeBlock>
    </Tabs>
  );
};

const FILES = [
  {
    code: 'export const siteName = "Shark UI";\nexport const siteUrl = "https://shark.vini.one";',
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
