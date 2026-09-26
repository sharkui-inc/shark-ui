"use client";

import { createListCollection } from "@ark-ui/react/collection";
import React from "react";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => {
  const [language, setLanguage] = React.useState(["typescript"]);
  const snippet =
    SNIPPETS[
      language.find((value) => value in SNIPPETS) as keyof typeof SNIPPETS
    ] ?? SNIPPETS.typescript;

  return (
    <CodeBlock
      className="w-full max-w-lg"
      code={snippet.code}
      language={snippet.language}
    >
      <CodeBlockHeader title={snippet.filename}>
        <CodeBlockActions>
          <Select
            collection={LANGUAGES}
            onValueChange={({ value }) => setLanguage(value)}
            value={language}
          >
            <SelectTrigger
              className="h-6 border-transparent bg-transparent px-2 text-sm shadow-none"
              size="sm"
              variant="ghost"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.items.map((item) => (
                <SelectItem item={item} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
