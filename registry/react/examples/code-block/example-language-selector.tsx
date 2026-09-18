"use client";

import { createListCollection } from "@ark-ui/react/collection";
import React from "react";
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

const Example = () => {
  const [language, setLanguage] = React.useState(["typescript"]);
  const snippet =
    SNIPPETS[
      language.find((value) => value in SNIPPETS) as keyof typeof SNIPPETS
    ] ?? SNIPPETS.typescript;

  return (
    <CodeBlock
      className="h-48 w-full max-w-lg"
      code={snippet.code}
      language={snippet.language}
    >
      <CodeBlockHeader title={snippet.filename}>
        <CodeBlockActions>
          <CodeBlockLanguageSelector
            collection={LANGUAGES}
            onValueChange={({ value }) => setLanguage(value)}
            value={language}
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
      <CodeBlockContent showLineNumbers />
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
