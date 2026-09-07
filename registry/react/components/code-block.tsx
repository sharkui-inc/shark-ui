"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import type { CSSProperties } from "react";
import React from "react";
import type {
  BundledLanguage,
  BundledTheme,
  HighlighterGeneric,
  ThemedToken,
} from "shiki";
import { createHighlighter } from "shiki";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const STREAM_IDLE_DELAY = 160;
const STREAM_HIGHLIGHT_INTERVAL = 600;
const TOKEN_CACHE_LIMIT = 100;

interface CodeBlockContextValue {
  code: string;
  isStreaming: boolean;
  language: BundledLanguage;
}

const [CodeBlockProvider, useCodeBlock] = createContext<CodeBlockContextValue>({
  name: "CodeBlockContext",
  providerName: "CodeBlock",
});

interface CodeBlockProps extends React.ComponentProps<typeof ark.div> {
  code?: string;
  isStreaming?: boolean;
  language?: BundledLanguage;
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
    () => ({ code, isStreaming, language }),
    [code, isStreaming, language]
  );

  return (
    <CodeBlockProvider value={value}>
      <ark.div
        className={cn(
          "w-full min-w-0",
          "flex flex-col",
          "bg-card text-card-foreground",
          "rounded-xl border",
          "overflow-hidden",
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

interface CodeBlockHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the code block.
   */
  title?: string;
}

export const CodeBlockTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={cn(
        "min-w-0",
        "flex flex-1 items-center gap-2",
        "truncate text-muted-foreground text-sm",
        className
      )}
      data-slot="code-block-title"
      {...rest}
    />
  );
};

export const CodeBlockHeader = (props: CodeBlockHeaderProps) => {
  const { title, className, children, ...rest } = props;
  return (
    <ark.div
      className={cn(
        "min-h-9 min-w-0",
        "flex items-center gap-2",
        "px-3 py-1",
        "text-muted-foreground text-sm",
        "border-b",
        "[&>svg]:order-first [&>svg]:shrink-0 [&>svg]:text-muted-foreground",
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
  const { className, ...rest } = props;
  return (
    <ark.span
      className={cn(
        "min-w-0",
        "truncate text-muted-foreground text-sm",
        className
      )}
      data-slot="code-block-filename"
      {...rest}
    />
  );
};

export const CodeBlockActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;
  return (
    <ark.div
      className={cn("ms-auto flex shrink-0 items-center gap-1", className)}
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
          className="text-muted-foreground hover:text-foreground"
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <ClipboardIndicator />
        </Button>
      </ClipboardTrigger>
    </Clipboard>
  );
};

interface TokenizedCode {
  tokens: ThemedToken[][];
}

const highlighterCache = new Map<
  BundledLanguage,
  Promise<HighlighterGeneric<BundledLanguage, BundledTheme>>
>();
const tokenCache = new Map<string, TokenizedCode>();

const getTokenCacheKey = (code: string, language: BundledLanguage) =>
  `${language}\u0000${code}`;

const createRawTokens = (code: string): TokenizedCode => ({
  tokens: code.split("\n").map((line) =>
    line
      ? [
          {
            color: "inherit",
            content: line,
          } as ThemedToken,
        ]
      : []
  ),
});

const getHighlighter = (language: BundledLanguage) => {
  const cached = highlighterCache.get(language);
  if (cached) {
    return cached;
  }

  const highlighter = createHighlighter({
    langs: [language],
    themes: ["github-light", "github-dark"],
  });
  highlighterCache.set(language, highlighter);
  return highlighter;
};

const cacheTokens = (key: string, tokenized: TokenizedCode) => {
  if (tokenCache.size >= TOKEN_CACHE_LIMIT) {
    const oldestKey = tokenCache.keys().next().value;
    if (oldestKey) {
      tokenCache.delete(oldestKey);
    }
  }
  tokenCache.set(key, tokenized);
};

const getTokens = async (code: string, language: BundledLanguage) => {
  const key = getTokenCacheKey(code, language);
  const cached = tokenCache.get(key);
  if (cached) {
    return cached;
  }

  const highlighter = await getHighlighter(language);
  const result = highlighter.codeToTokens(code, {
    lang: language,
    themes: { dark: "github-dark", light: "github-light" },
  });
  const tokenized = { tokens: result.tokens };
  cacheTokens(key, tokenized);
  return tokenized;
};

const useCodeTokens = (
  code: string,
  language: BundledLanguage,
  isStreaming: boolean
) => {
  const key = getTokenCacheKey(code, language);
  const rawTokens = React.useMemo(() => createRawTokens(code), [code]);
  const [tokens, setTokens] = React.useState<TokenizedCode>(
    () => tokenCache.get(key) ?? rawTokens
  );
  const currentRef = React.useRef({ code, key, language });
  const idleTimerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const maxTimerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const lastHighlightRef = React.useRef(Date.now());

  currentRef.current = { code, key, language };

  const highlightCurrent = React.useCallback(() => {
    const {
      code: currentCode,
      key: currentKey,
      language: currentLanguage,
    } = currentRef.current;
    const cached = tokenCache.get(currentKey);
    lastHighlightRef.current = Date.now();

    if (maxTimerRef.current) {
      clearTimeout(maxTimerRef.current);
      maxTimerRef.current = undefined;
    }

    if (cached) {
      setTokens(cached);
      return;
    }

    getTokens(currentCode, currentLanguage)
      .then((nextTokens) => {
        if (currentRef.current.key === currentKey) {
          setTokens(nextTokens);
        }
      })
      .catch(() => {
        // Failed language loading retains the raw fallback.
      });
  }, []);

  React.useEffect(() => {
    const cached = tokenCache.get(key);
    setTokens(cached ?? rawTokens);

    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = undefined;
    }

    if (!isStreaming || cached) {
      highlightCurrent();
      return;
    }

    idleTimerRef.current = setTimeout(highlightCurrent, STREAM_IDLE_DELAY);

    if (!maxTimerRef.current) {
      const elapsed = Date.now() - lastHighlightRef.current;
      maxTimerRef.current = setTimeout(
        () => {
          maxTimerRef.current = undefined;
          highlightCurrent();
        },
        Math.max(0, STREAM_HIGHLIGHT_INTERVAL - elapsed)
      );
    }
  }, [highlightCurrent, isStreaming, key, rawTokens]);

  React.useEffect(
    () => () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      if (maxTimerRef.current) {
        clearTimeout(maxTimerRef.current);
      }
    },
    []
  );

  return tokens;
};

const isItalic = (fontStyle: number | undefined) =>
  [1, 3, 5, 7].includes(fontStyle ?? 0);
const isBold = (fontStyle: number | undefined) =>
  [2, 3, 6, 7].includes(fontStyle ?? 0);
const isUnderline = (fontStyle: number | undefined) =>
  [4, 5, 6, 7].includes(fontStyle ?? 0);

const tokenKeys = new WeakMap<ThemedToken, number>();
let nextTokenKey = 0;

const getTokenKey = (token: ThemedToken) => {
  const existingKey = tokenKeys.get(token);

  if (existingKey) {
    return existingKey;
  }

  nextTokenKey += 1;
  tokenKeys.set(token, nextTokenKey);
  return nextTokenKey;
};

const CodeToken = ({ token }: { token: ThemedToken }) => (
  <span
    className="dark:!bg-[var(--shiki-dark-bg)] dark:!text-[var(--shiki-dark)]"
    style={
      {
        backgroundColor: token.bgColor,
        color: token.color === "inherit" ? undefined : token.color,
        fontStyle: isItalic(token.fontStyle) ? "italic" : undefined,
        fontWeight: isBold(token.fontStyle) ? "bold" : undefined,
        textDecoration: isUnderline(token.fontStyle) ? "underline" : undefined,
        ...token.htmlStyle,
      } as CSSProperties
    }
  >
    {token.content}
  </span>
);

interface CodeBlockContentProps
  extends Omit<React.ComponentProps<typeof ark.pre>, "children"> {
  children?: string;
  code?: string;
  highlightedLines?: number[];
  isStreaming?: boolean;
  language?: BundledLanguage;
  showLineNumbers?: boolean;
}

export const CodeBlockContent = (props: CodeBlockContentProps) => {
  const {
    children,
    className,
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
  const { tokens } = useCodeTokens(code, language, isStreaming);

  return (
    <ark.pre
      className={cn("min-w-max py-3 font-mono text-sm leading-6", className)}
      data-slot="code-block-content"
      {...rest}
    >
      <code className="grid min-w-max" data-slot="code-block-code">
        {tokens.map((line, index) => {
          const lineNumber = index + 1;
          const highlighted = highlightedLines.includes(lineNumber);
          return (
            <span
              className={cn(
                "flex min-h-6",
                highlighted && "bg-primary/10",
                highlighted && !showLineNumbers && "border-primary border-s-2"
              )}
              data-highlighted={highlighted ? "" : undefined}
              data-line={lineNumber}
              key={`${lineNumber}:${line.map((token) => token.content).join("")}`}
            >
              {showLineNumbers ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "sticky start-0 z-10 w-11 shrink-0 select-none bg-card pe-3 text-end text-muted-foreground",
                    highlighted && "border-primary border-s-2"
                  )}
                  data-slot="code-block-line-number"
                >
                  {lineNumber}
                </span>
              ) : null}
              <span
                className={cn(
                  showLineNumbers ? "pe-3" : "px-3",
                  highlighted && !showLineNumbers && "ps-2.5"
                )}
              >
                {line.length
                  ? line.map((token) => (
                      <CodeToken
                        key={`${lineNumber}:${getTokenKey(token)}`}
                        token={token}
                      />
                    ))
                  : "\u00a0"}
              </span>
            </span>
          );
        })}
      </code>
    </ark.pre>
  );
};

export const CodeBlockLanguageSelector = (
  props: React.ComponentProps<typeof Select>
) => <Select data-slot="code-block-language-selector" {...props} />;

export const CodeBlockLanguageSelectorTrigger = (
  props: React.ComponentProps<typeof SelectTrigger>
) => {
  const { className, ...rest } = props;
  return (
    <SelectTrigger
      className={cn(
        "h-6 border-transparent bg-transparent px-2 text-sm shadow-none",
        className
      )}
      size="sm"
      variant="ghost"
      {...rest}
    />
  );
};

export const CodeBlockLanguageSelectorValue = (
  props: React.ComponentProps<typeof SelectValue>
) => <SelectValue {...props} />;

export const CodeBlockLanguageSelectorContent = (
  props: React.ComponentProps<typeof SelectContent>
) => {
  const { align = "end", ...rest } = props;
  return <SelectContent align={align} {...rest} />;
};

export const CodeBlockLanguageSelectorItem = (
  props: React.ComponentProps<typeof SelectItem>
) => <SelectItem {...props} />;
