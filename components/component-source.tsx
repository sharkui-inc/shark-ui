/** biome-ignore-all lint/correctness/noConstAssign: it's ok */
/** biome-ignore-all lint/style/noParameterAssign: it's ok */

import { readFileSync } from "node:fs";
import { highlightCode } from "@/lib/highlight-code";
import { resolveRegistrySourcePath } from "@/lib/registry-source-path";
import { replaceContentForCopy } from "@/utils/formatter";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";
import { DocsCodeFrame, type DocsCodeFrameProps } from "./docs-code-block";

export interface ComponentSourceProps extends DocsCodeFrameProps {
  /**
   * The source code to display
   */
  code?: string;
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
  showLineNumbers?: boolean;
  /**
   * The source file to read
   */
  src?: string;
}

const DocsCodeBlock = async (
  props: DocsCodeFrameProps & {
    code: string;
    copyButton?: boolean;
    lang?: string;
    showLineNumbers?: boolean;
  }
) => {
  const {
    title,
    code,
    copyButton = true,
    lang = "tsx",
    showLineNumbers = true,
    className,
    ...rest
  } = props;

  const highlightedCode = await highlightCode(code, lang, { showLineNumbers });

  return (
    <DocsCodeFrame
      {...rest}
      className={className}
      copyValue={copyButton ? code : undefined}
      language={lang}
      title={title}
    >
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki highlights trusted source code.
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
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
