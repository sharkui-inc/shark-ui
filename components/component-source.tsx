/** biome-ignore-all lint/correctness/noConstAssign: it's ok */
/** biome-ignore-all lint/style/noParameterAssign: it's ok */

import { readFileSync } from "node:fs";
import { resolve, sep } from "node:path";
import { REGISTRY_PATH } from "@/config/constants";
import { highlightCode } from "@/lib/highlight-code";
import { replaceContentForCopy } from "@/utils/formatter";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";
import {
  DocsCodeFrame,
  type DocsCodeFrameProps,
  isDocsTextLanguage,
} from "./docs-code-block";

const REGISTRY_ROOT = "registry/react";
const LEADING_SLASHES = /^\/+/;

const resolveRegistrySourcePath = (src: string) => {
  const relativeSrc = src.replace(LEADING_SLASHES, "");
  const resolved = resolve(process.cwd(), REGISTRY_PATH, relativeSrc);
  const root = resolve(process.cwd(), REGISTRY_ROOT);

  if (resolved !== root && !resolved.startsWith(`${root}${sep}`)) {
    throw new Error("ComponentSource src is outside the registry");
  }

  return resolved;
};

export interface ComponentSourceProps extends DocsCodeFrameProps {
  /**
   * The source code to display
   */
  code: string;
  /**
   * Whether to show the copy button
   *
   * @default true
   */
  copyButton?: boolean;
  /**
   * Whether to make the code block collapsible
   *
   * @default true
   */
  isCollapsible?: boolean;
  /**
   * The language of the code block
   */
  language?: string;
  /**
   * Whether to show the line numbers
   *
   * @default true
   */
  showLineNumbers?: boolean;
  /**
   * The source file to read
   */
  src?: string;
}

const DocsCodeBlock = async (props: ComponentSourceProps) => {
  const {
    title,
    code,
    copyButton = true,
    lang = "tsx",
    showLineNumbers = true,
    className,
    ...rest
  } = props;

  const highlightedCode = isDocsTextLanguage(lang)
    ? undefined
    : await highlightCode(code, lang, { showLineNumbers });

  return (
    <DocsCodeFrame
      {...rest}
      className={className}
      copyValue={copyButton ? code : undefined}
      language={lang}
      rawCode={code}
      title={title}
    >
      {highlightedCode ? (
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki highlights trusted source code.
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      ) : null}
    </DocsCodeFrame>
  );
};

export const ComponentSource = (props: ComponentSourceProps) => {
  const {
    language = "tsx",
    src,
    code,
    title,
    isCollapsible = true,
    ...rest
  } = props;

  let codeContent: string | undefined;

  if (code) {
    codeContent = code;
  }

  if (src) {
    codeContent = readFileSync(resolveRegistrySourcePath(src), "utf-8");
  }

  if (!codeContent) {
    throw new Error("Code content not found");
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  const replacedCode = replaceContentForCopy(codeContent);

  if (isCollapsible) {
    return (
      <CodeCollapsibleWrapper>
        <DocsCodeBlock
          code={replacedCode}
          lang={lang}
          title={title}
          {...rest}
        />
      </CodeCollapsibleWrapper>
    );
  }

  return (
    <DocsCodeBlock code={replacedCode} lang={lang} title={title} {...rest} />
  );
};
