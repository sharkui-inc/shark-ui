import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  getIconForLanguageExtension,
  languageFromFileName,
} from "@/utils/file-extension";

export const isDocsTextLanguage = (language?: string) =>
  language === "text" || language === "plaintext";

export const docsShikiContentClassName = cn(
  "font-mono",
  "**:[pre]:tab-2 **:[pre]:w-max **:[pre]:min-w-full **:[pre]:bg-transparent **:[pre]:px-0 **:[pre]:py-3.5 **:[pre]:text-[.8125rem] **:[pre]:leading-6",
  "**:[code]:grid **:[code]:min-w-full",
  "**:[.line]:relative **:[.line]:block **:[.line]:min-h-6",
  "[&_.line_span]:text-(--shiki-light) dark:[&_.line_span]:text-(--shiki-dark)",
  "[&_.line_span]:[font-style:var(--shiki-light-font-style,normal)] dark:[&_.line_span]:[font-style:var(--shiki-dark-font-style,var(--shiki-light-font-style,normal))]",
  "[&_.line_span]:font-(--shiki-light-font-weight,inherit) dark:[&_.line_span]:font-(--shiki-dark-font-weight,var(--shiki-light-font-weight,inherit))",
  "[&_code[data-line-numbers]]:[counter-reset:line] [&_code[data-line-numbers]_.line]:block",
  "[&_code[data-line-numbers]_.line]:before:sticky [&_code[data-line-numbers]_.line]:before:inset-s-0 [&_code[data-line-numbers]_.line]:before:inline-block [&_code[data-line-numbers]_.line]:before:w-12 [&_code[data-line-numbers]_.line]:before:shrink-0 [&_code[data-line-numbers]_.line]:before:bg-code [&_code[data-line-numbers]_.line]:before:pe-4 [&_code[data-line-numbers]_.line]:before:text-end [&_code[data-line-numbers]_.line]:before:text-muted-foreground [&_code[data-line-numbers]_.line]:before:content-[counter(line)] [&_code[data-line-numbers]_.line]:before:[counter-increment:line]",
  "[&_code[data-line-numbers]_.line.highlighted]:before:bg-code-highlight! **:[.highlighted]:bg-code-highlight **:[.highlighted]:before:bg-code-highlight **:[.highlighted]:after:absolute **:[.highlighted]:after:inset-s-0 **:[.highlighted]:after:inset-y-0 **:[.highlighted]:after:w-0.5 **:[.highlighted]:after:bg-muted-foreground/48",
  "**:[.highlighted-word]:rounded-sm **:[.highlighted-word]:bg-code-highlight **:[.highlighted-word]:px-1 **:[.highlighted-word]:py-0.5",
  "**:[.diff.add]:bg-success/8 **:[.diff.add]:after:absolute **:[.diff.add]:after:inset-s-0 **:[.diff.add]:after:inset-y-0 **:[.diff.add]:after:w-0.5 **:[.diff.add]:after:bg-success",
  "**:[.diff.remove]:bg-destructive/8 **:[.diff.remove]:after:absolute **:[.diff.remove]:after:inset-s-0 **:[.diff.remove]:after:inset-y-0 **:[.diff.remove]:after:w-0.5 **:[.diff.remove]:after:bg-destructive",
  "[&_code:not([data-line-numbers])_.line]:px-4"
);

export interface DocsCodeFrameProps extends React.ComponentProps<"figure"> {
  copyValue?: string;
  language?: string;
  rawCode?: string;
  title?: string;
}

export const DocsCodeFrame = (props: DocsCodeFrameProps) => {
  const { children, className, copyValue, language, rawCode, title, ...rest } =
    props;

  const isPlainText = isDocsTextLanguage(language) && rawCode !== undefined;

  return (
    <figure
      className={cn(
        "relative mt-6 overflow-hidden rounded-2xl border in-data-[tab=code]:border-0 bg-code text-code-foreground",
        className
      )}
      data-slot="docs-code-block"
      {...rest}
    >
      {title ? (
        <figcaption className="flex min-h-11 items-center gap-2 border-b px-4 py-2.5 font-mono text-[.8125rem] text-muted-foreground [&_svg]:size-4">
          {getIconForLanguageExtension(
            languageFromFileName(title) ?? language ?? "tsx"
          )}
          {title}
        </figcaption>
      ) : null}

      {copyValue ? (
        <CopyButton
          className="absolute inset-e-1.5 top-1.5"
          value={copyValue}
        />
      ) : null}

      <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:data-[orientation=horizontal]:mx-2 **:data-[slot=scroll-area-scrollbar]:data-[orientation=vertical]:my-2">
        {isPlainText ? (
          <pre
            className="m-0 w-max min-w-full bg-transparent px-4 py-3.5 text-[.8125rem] leading-6 outline-hidden"
            data-language={language}
          >
            <code
              className="block whitespace-pre [font-variant-ligatures:none]"
              data-language={language}
              style={{
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              }}
            >
              {rawCode}
            </code>
          </pre>
        ) : (
          <div className={docsShikiContentClassName}>{children}</div>
        )}
      </ScrollArea>
    </figure>
  );
};
