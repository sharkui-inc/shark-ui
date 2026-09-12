import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  getIconForLanguageExtension,
  languageFromFileName,
} from "@/utils/file-extension";

export const docsCodeSurfaceClassName = cn(
  "font-mono",
  "[&_pre]:tab-2 [&_pre]:w-max [&_pre]:min-w-full [&_pre]:bg-transparent [&_pre]:px-0 [&_pre]:py-3.5 [&_pre]:text-[.8125rem] [&_pre]:leading-6 [&_pre]:outline-none",
  "[&_code]:grid [&_code]:min-w-full",
  "[&_.line]:relative [&_.line]:block [&_.line]:min-h-6",
  "[&_.line_span]:text-(--shiki-light) dark:[&_.line_span]:text-(--shiki-dark)",
  "[&_.line_span]:[font-style:var(--shiki-light-font-style,normal)] dark:[&_.line_span]:[font-style:var(--shiki-dark-font-style,var(--shiki-light-font-style,normal))]",
  "[&_.line_span]:font-(--shiki-light-font-weight,inherit) dark:[&_.line_span]:font-(--shiki-dark-font-weight,var(--shiki-light-font-weight,inherit))",
  "[&_code[data-line-numbers]]:[counter-reset:line] [&_code[data-line-numbers]_.line]:flex",
  "[&_code[data-line-numbers]_.line]:before:sticky [&_code[data-line-numbers]_.line]:before:inset-s-0 [&_code[data-line-numbers]_.line]:before:inline-block [&_code[data-line-numbers]_.line]:before:w-12 [&_code[data-line-numbers]_.line]:before:shrink-0 [&_code[data-line-numbers]_.line]:before:bg-code [&_code[data-line-numbers]_.line]:before:pe-4 [&_code[data-line-numbers]_.line]:before:text-end [&_code[data-line-numbers]_.line]:before:text-muted-foreground [&_code[data-line-numbers]_.line]:before:content-[counter(line)] [&_code[data-line-numbers]_.line]:before:[counter-increment:line]",
  "[&_.highlighted]:bg-code-highlight [&_.highlighted]:before:bg-code-highlight [&_code[data-line-numbers]_.line.highlighted]:before:bg-code-highlight! [&_.highlighted]:after:absolute [&_.highlighted]:after:inset-s-0 [&_.highlighted]:after:inset-y-0 [&_.highlighted]:after:w-0.5 [&_.highlighted]:after:bg-muted-foreground/50",
  "[&_.highlighted-word]:rounded-sm [&_.highlighted-word]:bg-code-highlight [&_.highlighted-word]:px-1 [&_.highlighted-word]:py-0.5",
  "[&_.diff.add]:bg-success/10 [&_.diff.add]:after:absolute [&_.diff.add]:after:inset-s-0 [&_.diff.add]:after:inset-y-0 [&_.diff.add]:after:w-0.5 [&_.diff.add]:after:bg-success",
  "[&_.diff.remove]:bg-destructive/10 [&_.diff.remove]:after:absolute [&_.diff.remove]:after:inset-s-0 [&_.diff.remove]:after:inset-y-0 [&_.diff.remove]:after:w-0.5 [&_.diff.remove]:after:bg-destructive",
  "[&_code:not([data-line-numbers]):not([data-language=text]):not([data-language=plaintext])_.line]:px-4",
  "[&_pre[data-language=plaintext]]:px-4! [&_pre[data-language=text]]:px-4!",
  "[&_pre[data-language=plaintext]]:font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace]! [&_pre[data-language=text]]:font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace]!",
  "[&_code[data-language=text]]:block! [&_code[data-language=plaintext]]:block! [&_code[data-language=text]]:whitespace-pre! [&_code[data-language=plaintext]]:whitespace-pre!",
  "[&_code[data-language=plaintext]]:[font-variant-ligatures:none] [&_code[data-language=text]]:[font-variant-ligatures:none]",
  "[&_pre[data-language=plaintext]_.line]:min-h-0! [&_pre[data-language=plaintext]_.line]:py-0! [&_pre[data-language=plaintext]_.line]:leading-[.95]! [&_pre[data-language=plaintext]_.line]:whitespace-pre! [&_pre[data-language=text]_.line]:min-h-0! [&_pre[data-language=text]_.line]:py-0! [&_pre[data-language=text]_.line]:leading-[.95]! [&_pre[data-language=text]_.line]:whitespace-pre!"
);

export interface DocsCodeFrameProps extends React.ComponentProps<"figure"> {
  copyValue?: string;
  language?: string;
  title?: string;
}

export const DocsCodeFrame = (props: DocsCodeFrameProps) => {
  const { children, className, copyValue, language, title, ...rest } = props;

  return (
    <figure
      className={cn(
        "relative mt-6 overflow-hidden rounded-2xl border in-data-[tab=code]:border-0 bg-code text-code-foreground outline-none",
        docsCodeSurfaceClassName,
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
        {children}
      </ScrollArea>
    </figure>
  );
};
