"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <CodeBlock className="w-full max-w-lg" code={CODE} language="tsx">
      <CodeBlockHeader title={values.title}>
        <CodeBlockActions>
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent showLineNumbers />
    </CodeBlock>
  );
};

const CODE = `export function isValidEmail(email: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`;

const translations = {
  ar: {
    values: {
      title: "src/utils/helpers.ts",
    },
  },
  en: {
    values: {
      title: "src/utils/helpers.ts",
    },
  },
  he: {
    values: {
      title: "src/utils/helpers.ts",
    },
  },
};

export default Example;
