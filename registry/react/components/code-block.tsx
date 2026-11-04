"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import React from "react";
import type { BundledLanguage, GrammarState, ThemedToken } from "shiki";
import {
  createBundledHighlighter,
  createSingletonShorthands,
} from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import { bundledLanguages } from "shiki/langs";
import githubDark from "shiki/themes/github-dark.mjs";
import githubLight from "shiki/themes/github-light.mjs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const CODE_THEMES = {
  dark: "github-dark",
  light: "github-light",
} as const;

const codeThemes = {
  "github-dark": githubDark,
  "github-light": githubLight,
};

const createCodeHighlighter = createBundledHighlighter<
  BundledLanguage,
  "github-dark" | "github-light"
>({
  engine: () => createJavaScriptRegexEngine({ forgiving: true }),
  langs: bundledLanguages,
  themes: codeThemes,
});

const { getSingletonHighlighter } = createSingletonShorthands(
  createCodeHighlighter
);

type CodeHighlighter = Awaited<ReturnType<typeof getSingletonHighlighter>>;

export type CodeBlockLanguage = BundledLanguage | "text";

interface CodeBlockContextValue {
  code: string;
  isStreaming: boolean;
  language: CodeBlockLanguage;
}

const [CodeBlockProvider, useCodeBlock] = createContext<CodeBlockContextValue>({
  name: "CodeBlockContext",
  providerName: "CodeBlock",
});

interface CodeBlockProps extends React.ComponentProps<typeof ark.div> {
  code?: string;
  isStreaming?: boolean;
  language?: CodeBlockLanguage;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const {
    className,
    code = "",
    isStreaming = false,
    language = "tsx",
    children,
    ...rest
  } = props;

  const value = React.useMemo(
    () => ({
      code,
      isStreaming,
      language,
    }),
    [code, isStreaming, language]
  );

  return (
    <CodeBlockProvider value={value}>
      <ark.div
        className={cn(
          "w-full min-w-0",
          "flex flex-col",
          "bg-card",
          "text-card-foreground",
          "rounded-xl border shadow-xs/4",
          "overflow-hidden",
          "[--code-surface-gutter-min:--spacing(11)] [--code-surface-header-height:--spacing(9)] [--code-surface-inline-padding:--spacing(3)] [--code-surface-line-height:--spacing(6)]",
          className
        )}
        data-slot="code-block"
        {...rest}
      >
        {children}
      </ark.div>
    </CodeBlockProvider>
  );
};



export const CodeBlockTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0",
        "flex-1",
        "flex items-center gap-2",
        "text-muted-foreground truncate text-sm",
        className
      )}
      data-slot="code-block-title"
      {...rest}
    />
  );
};

interface CodeBlockHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the code block.
   */
  title?: string;
}

export const CodeBlockHeader = (props: CodeBlockHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-h-(--code-surface-header-height) min-w-0 shrink-0",
        "flex items-center gap-2",
        "px-(--code-surface-inline-padding) py-1",
        "border-b",
        "text-muted-foreground text-sm",
        "[&>svg]:text-muted-foreground [&>svg]:order-first [&>svg]:shrink-0",
        "[&>svg:not([class*='size-'])]:size-3.5",
        className
      )}
      data-slot="code-block-header"
      {...rest}
    >
      {!!title && <CodeBlockTitle>{title}</CodeBlockTitle>}
      {!title && typeof children === "string" ? (
        <CodeBlockTitle>{children}</CodeBlockTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const CodeBlockFilename = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, style, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "min-w-0",
        "text-muted-foreground truncate text-sm",
        className
      )}
      data-slot="code-block-filename"
      {...rest}
      dir="ltr"
      style={{ unicodeBidi: "isolate", ...style }}
    />
  );
};

export const CodeBlockActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "shrink-0",
        "flex items-center gap-1",
        "ms-auto",
        className
      )}
      data-slot="code-block-actions"
      {...rest}
    />
  );
};

export const CodeBlockCopy = (
  props: Omit<React.ComponentProps<typeof Clipboard>, "value" | "children">
) => {
  const { className, ...rest } = props;

  const { code } = useCodeBlock();

  return (
    <Clipboard className={cn("shrink-0", className)} value={code} {...rest}>
      <ClipboardTrigger asChild>
        <Button
          aria-label="Copy code"
          className={cn("text-muted-foreground", "hover:text-foreground")}
          size="icon-xs"
          variant="ghost"
        >
          <ClipboardIndicator />
        </Button>
      </ClipboardTrigger>
    </Clipboard>
  );
};

type CodeLine = string | ThemedToken[];

interface HighlightProgress {
  grammarState?: GrammarState;
  language: BundledLanguage;
  text: string;
  tokens: ThemedToken[][];
}

let codeHighlighter: CodeHighlighter | undefined;

const languagePromises = new Map<BundledLanguage, Promise<CodeHighlighter>>();

const ensureHighlighter = (language: BundledLanguage) => {
  const cached = languagePromises.get(language);
  if (cached) {
    return cached;
  }

  const pending = getSingletonHighlighter({
    langs: [language],
    themes: ["github-dark", "github-light"],
  }).then((highlighter) => {
    codeHighlighter = highlighter;
    return highlighter;
  });
  languagePromises.set(language, pending);
  pending.catch(() => {
    languagePromises.delete(language);
  });
  return pending;
};

const tokenizeCode = (
  highlighter: CodeHighlighter,
  code: string,
  language: BundledLanguage,
  grammarState?: GrammarState
) =>
  highlighter.codeToTokens(code, {
    defaultColor: false,
    grammarState,
    lang: language,
    themes: CODE_THEMES,
  });

const highlightStreamingCode = (
  highlighter: CodeHighlighter,
  code: string,
  language: BundledLanguage,
  progress: HighlightProgress | null
) => {
  let current =
    progress?.language === language && code.startsWith(progress.text)
      ? progress
      : {
          language,
          text: "",
          tokens: [],
        };

  const end = code.lastIndexOf("\n") + 1;

  if (end > current.text.length) {
    const slice = code.slice(current.text.length, end - 1);
    const result = tokenizeCode(
      highlighter,
      slice,
      language,
      current.grammarState
    );
    current = {
      grammarState: result.grammarState,
      language,
      text: code.slice(0, end),
      tokens: [...current.tokens, ...result.tokens],
    };
  }

  const tail = code.slice(end);
  const tailTokens = tail
    ? tokenizeCode(highlighter, tail, language, current.grammarState).tokens
    : [];
  let tokens = [...current.tokens, ...tailTokens];

  if (!tail && code.endsWith("\n")) {
    tokens = [...tokens, []];
  }

  if (!code) {
    tokens = [[]];
  }

  return { progress: current, tokens };
};

const readCodeLines = (
  code: string,
  language: CodeBlockLanguage,
  isStreaming: boolean,
  highlighter: CodeHighlighter | undefined,
  progress: HighlightProgress | null
) => {
  if (!highlighter || language === "text") {
    return {
      lines: code.split("\n"),
      progress: null,
    };
  }

  if (!isStreaming) {
    return {
      lines: tokenizeCode(highlighter, code, language).tokens,
      progress: null,
    };
  }

  const highlighted = highlightStreamingCode(
    highlighter,
    code,
    language,
    progress
  );

  return {
    lines: highlighted.tokens,
    progress: highlighted.progress,
  };
};

const useCodeLines = (
  code: string,
  language: CodeBlockLanguage,
  isStreaming: boolean
) => {
  const [loadedLanguage, setLoadedLanguage] =
    React.useState<BundledLanguage | null>(null);
  const [progress, setProgress] = React.useState<HighlightProgress | null>(
    null
  );

  React.useEffect(() => {
    if (language === "text") {
      return;
    }

    let cancelled = false;
    ensureHighlighter(language)
      .then(() => {
        if (!cancelled) {
          setLoadedLanguage(language);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadedLanguage(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  const highlighter =
    language !== "text" && loadedLanguage === language
      ? codeHighlighter
      : undefined;
  const highlighted = readCodeLines(
    code,
    language,
    isStreaming,
    highlighter,
    progress?.language === language ? progress : null
  );

  if (highlighted.progress !== progress) {
    setProgress(highlighted.progress);
  }

  return highlighted.lines;
};

interface CodeBlockPreProps
  extends Omit<React.ComponentProps<typeof ark.pre>, "children"> {
  highlightedLines: number[];
  lines: CodeLine[];
  showLineNumbers: boolean;
}

interface CodeBlockContentProps
  extends Omit<
    CodeBlockPreProps,
    "lines" | "highlightedLines" | "showLineNumbers"
  > {
  children?: string;
  code?: string;
  highlightedLines?: number[];
  isStreaming?: boolean;
  language?: CodeBlockLanguage;
  showLineNumbers?: boolean;
}

const renderCodeLine = (line: CodeLine, lineNumber: number) => {
  if (typeof line === "string") {
    return line || "\n";
  }

  if (!line.length) {
    return "\n";
  }

  return line.map((token) => (
    <span
      key={`${lineNumber}:${token.offset}`}
      style={token.htmlStyle as React.CSSProperties | undefined}
    >
      {token.content}
    </span>
  ));
};

const CodeBlockPre = (props: CodeBlockPreProps) => {
  const { className, highlightedLines, lines, showLineNumbers, ...rest } =
    props;
    
  const highlightedLineSet = React.useMemo(
    () => new Set(highlightedLines),
    [highlightedLines]
  );

  return (
    <ark.pre
      className={cn(
        "min-w-max",
        "py-3",
        "font-mono text-sm leading-(--code-surface-line-height)",
        className
      )}
      data-slot="code-block-content"
      {...rest}
      dir="ltr"
    >
      <code
        className={cn(
          "min-w-max",
          "grid",
          showLineNumbers &&
            "grid-cols-[minmax(var(--code-surface-gutter-min),max-content)_minmax(max-content,1fr)]"
        )}
        data-slot="code-block-code"
      >
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          const highlighted = highlightedLineSet.has(lineNumber);

          return (
            <span
              className={cn(
                "min-h-(--code-surface-line-height) w-full min-w-max",
                "py-0",
                showLineNumbers
                  ? "col-span-2 grid grid-cols-subgrid items-stretch"
                  : "flex items-stretch",
                highlighted && "bg-code-highlight",
                highlighted &&
                  !showLineNumbers &&
                  "border-muted-foreground/48 border-s-2"
              )}
              data-highlighted={highlighted ? "" : undefined}
              data-line={lineNumber}
              key={lineNumber}
            >
              {showLineNumbers ? (
                <span
                  aria-hidden
                  className={cn(
                    "sticky inset-s-0 z-10",
                    "w-full min-w-0",
                    "flex items-center",
                    "bg-card",
                    highlighted &&
                      cn(
                        "bg-code-highlight",
                        "border-muted-foreground/48 border-s-2"
                      )
                  )}
                  data-slot="code-block-line-number"
                >
                  <span
                    className={cn(
                      "w-full",
                      "px-(--code-surface-inline-padding)",
                      "text-muted-foreground text-end tabular-nums",
                      "select-none"
                    )}
                  >
                    {lineNumber}
                  </span>
                </span>
              ) : null}
              <span
                className={cn(
                  showLineNumbers
                    ? "ps-(--code-surface-inline-padding) pe-(--code-surface-inline-padding)"
                    : "px-(--code-surface-inline-padding)",
                  highlighted && !showLineNumbers && "ps-2.5",
                  "[&_span]:bg-(--shiki-light-bg) dark:[&_span]:bg-(--shiki-dark-bg)",
                  "[&_span]:text-(--shiki-light) dark:[&_span]:text-(--shiki-dark)",
                  "[&_span]:[font-style:var(--shiki-light-font-style,normal)]",
                  "dark:[&_span]:[font-style:var(--shiki-dark-font-style,var(--shiki-light-font-style,normal))]",
                  "[&_span]:font-(--shiki-light-font-weight,inherit)",
                  "dark:[&_span]:font-(--shiki-dark-font-weight,var(--shiki-light-font-weight,inherit))",
                  "[&_span]:[text-decoration:var(--shiki-light-text-decoration,none)]",
                  "dark:[&_span]:[text-decoration:var(--shiki-dark-text-decoration,var(--shiki-light-text-decoration,none))]"
                )}
              >
                {renderCodeLine(line, lineNumber)}
              </span>
            </span>
          );
        })}
      </code>
    </ark.pre>
  );
};

export const CodeBlockContent = (props: CodeBlockContentProps) => {
  const {
    children,
    code: codeProp,
    highlightedLines = [],
    isStreaming: isStreamingProp,
    language: languageProp,
    showLineNumbers = false,
    ...rest
  } = props;

  const {
    code: contextCode,
    language: contextLanguage,
    isStreaming: contextIsStreaming,
  } = useCodeBlock();

  const code =
    codeProp ?? (typeof children === "string" ? children : contextCode);
  const language = languageProp ?? contextLanguage;
  const isStreaming = isStreamingProp ?? contextIsStreaming;
  const lines = useCodeLines(code, language, isStreaming);

  return (
    <ScrollArea className="flex-1" dir="ltr" overscrollContain>
      <CodeBlockPre
        highlightedLines={highlightedLines}
        lines={lines}
        showLineNumbers={showLineNumbers}
        {...rest}
      />
    </ScrollArea>
  );
};
