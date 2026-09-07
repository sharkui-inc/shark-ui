"use client";

import { createListCollection } from "@ark-ui/react/collection";
import { useState } from "react";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
  CodeBlockLanguageSelector,
  CodeBlockLanguageSelectorContent,
  CodeBlockLanguageSelectorItem,
  CodeBlockLanguageSelectorTrigger,
  CodeBlockLanguageSelectorValue,
} from "@/registry/react/components/code-block";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => {
  const [language, setLanguage] = useState("typescript");
  const snippet = SNIPPETS[language as keyof typeof SNIPPETS];

  return (
    <CodeBlock
      className="max-w-lg"
      code={snippet.code}
      language={snippet.language}
    >
      <CodeBlockHeader title={snippet.filename}>
        <CodeBlockActions>
          <CodeBlockLanguageSelector
            collection={LANGUAGES}
            onValueChange={(details) =>
              setLanguage(details.value[0] ?? "typescript")
            }
            value={[language]}
          >
            <CodeBlockLanguageSelectorTrigger>
              <CodeBlockLanguageSelectorValue />
            </CodeBlockLanguageSelectorTrigger>
            <CodeBlockLanguageSelectorContent>
              {LANGUAGES.items.map((item) => (
                <CodeBlockLanguageSelectorItem item={item} key={item.value}>
                  {item.label}
                </CodeBlockLanguageSelectorItem>
              ))}
            </CodeBlockLanguageSelectorContent>
          </CodeBlockLanguageSelector>
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockHeader>
      <ScrollArea className="flex-none **:data-[slot=scroll-area-viewport]:max-h-80">
        <CodeBlockContent showLineNumbers />
      </ScrollArea>
    </CodeBlock>
  );
};

const LANGUAGES = createListCollection({
  items: [
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
  ],
});

const SNIPPETS = {
  python: {
    code: 'def greet(name: str) -> str:\n    return f"Hello, {name}!"',
    filename: "greet.py",
    language: "python",
  },
  typescript: {
    code: "export const greet = (name: string) => `Hello, $\u007Bname}!`;",
    filename: "greet.ts",
    language: "typescript",
  },
} as const;

export default Example;
