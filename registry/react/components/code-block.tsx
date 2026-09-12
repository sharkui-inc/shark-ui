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
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const TOKEN_CACHE_LIMIT = 100;
const STREAM_HIGHLIGHT_INTERVAL = 200;

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
          "rounded-xl border shadow-xs/5",
          "overflow-hidden",
          "[--code-surface-line-height:--spacing(6)]",
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
        "flex shrink-0 items-center gap-2",
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

interface TokenizedCodeSnapshot extends TokenizedCode {
  code: string;
  isHighlighted: boolean;
  language: CodeBlockLanguage;
}

let shikiPromise: Promise<typeof import("shiki")> | undefined;
let highlighterPromise:
  | Promise<HighlighterGeneric<BundledLanguage, BundledTheme>>
  | undefined;
const languageLoadPromises = new Map<BundledLanguage, Promise<void>>();
let languageLoadQueue = Promise.resolve();
const tokenCache = new Map<string, TokenizedCode>();
const tokenPromiseCache = new Map<string, Promise<TokenizedCode>>();

const getTokenCacheKey = (code: string, language: CodeBlockLanguage) =>
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

const createRawLineTokens = (line: string) =>
  line
    ? [
        {
          color: "inherit",
          content: line,
        } as ThemedToken,
      ]
    : [];

const getShiki = () => {
  if (!shikiPromise) {
    shikiPromise = import("shiki").catch((error: unknown) => {
      shikiPromise = undefined;
      throw error;
    });
  }

  return shikiPromise;
};

const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = getShiki()
      .then(({ createHighlighter }) =>
        createHighlighter({
          themes: ["github-light", "github-dark"],
        })
      )
      .catch((error: unknown) => {
        highlighterPromise = undefined;
        throw error;
      });
  }

  return highlighterPromise;
};

const loadLanguage = (language: BundledLanguage) => {
  const cached = languageLoadPromises.get(language);
  if (cached) {
    return cached;
  }

  const load = languageLoadQueue.then(async () => {
    const highlighter = await getHighlighter();
    await highlighter.loadLanguage(language);
  });
  languageLoadQueue = load.catch(() => undefined);
  languageLoadPromises.set(language, load);
  load.catch(() => {
    languageLoadPromises.delete(language);
  });
  return load;
};

const cacheTokens = (key: string, tokenized: TokenizedCode) => {
  if (tokenCache.size >= TOKEN_CACHE_LIMIT) {
    const oldestKey = tokenCache.keys().next().value;
    if (oldestKey) {
      tokenCache.delete(oldestKey);
      tokenPromiseCache.delete(oldestKey);
    }
  }
  tokenCache.set(key, tokenized);
};

const getTokens = (code: string, language: BundledLanguage) => {
  const key = getTokenCacheKey(code, language);
  const cachedPromise = tokenPromiseCache.get(key);
  if (cachedPromise) {
    return cachedPromise;
  }

  const cachedTokens = tokenCache.get(key);
  if (cachedTokens) {
    const cached = Promise.resolve(cachedTokens);
    tokenPromiseCache.set(key, cached);
    return cached;
  }

  const tokens = (async () => {
    try {
      await loadLanguage(language);
      const highlighter = await getHighlighter();
      const result = highlighter.codeToTokens(code, {
        lang: language,
        themes: { dark: "github-dark", light: "github-light" },
      });
      const tokenized = { tokens: result.tokens };
      cacheTokens(key, tokenized);
      return tokenized;
    } catch {
      return createRawTokens(code);
    }
  })();
  tokenPromiseCache.set(key, tokens);
  return tokens;
};

const useCodeTokens = (
  code: string,
  language: CodeBlockLanguage,
  isStreaming: boolean
) => {
  const [snapshot, setSnapshot] = React.useState<TokenizedCodeSnapshot>(() => ({
    code,
    isHighlighted: false,
    language,
    tokens: createRawTokens(code).tokens,
  }));
  const codeRef = React.useRef(code);
  const languageRef = React.useRef(language);

  React.useEffect(() => {
    codeRef.current = code;
    languageRef.current = language;
  }, [code, language]);

  const highlight = React.useCallback(
    (codeToHighlight: string, languageToHighlight: CodeBlockLanguage) => {
      if (languageToHighlight === "text") {
        setSnapshot({
          code: codeToHighlight,
          isHighlighted: true,
          language: languageToHighlight,
          tokens: createRawTokens(codeToHighlight).tokens,
        });
        return;
      }

      getTokens(codeToHighlight, languageToHighlight).then(({ tokens }) => {
        const latestCode = codeRef.current;
        if (
          languageRef.current !== languageToHighlight ||
          (latestCode !== codeToHighlight &&
            !latestCode.startsWith(codeToHighlight))
        ) {
          return;
        }

        setSnapshot((current) => {
          if (
            current.language === languageToHighlight &&
            ((current.code.length > codeToHighlight.length &&
              current.code.startsWith(codeToHighlight)) ||
              (current.code === codeToHighlight && current.isHighlighted))
          ) {
            return current;
          }

          return {
            code: codeToHighlight,
            isHighlighted: true,
            language: languageToHighlight,
            tokens,
          };
        });
      });
    },
    []
  );

  React.useEffect(() => {
    if (!isStreaming || language === "text") {
      highlight(code, language);
    }
  }, [code, highlight, isStreaming, language]);

  React.useEffect(() => {
    if (!isStreaming || language === "text") {
      return;
    }

    highlight(codeRef.current, language);
    const interval = window.setInterval(() => {
      highlight(codeRef.current, languageRef.current);
    }, STREAM_HIGHLIGHT_INTERVAL);

    return () => window.clearInterval(interval);
  }, [highlight, isStreaming, language]);

  return snapshot;
};

const getDisplayedTokens = (
  code: string,
  language: CodeBlockLanguage,
  snapshot: TokenizedCodeSnapshot
) => {
  if (snapshot.language !== language || !code.startsWith(snapshot.code)) {
    return createRawTokens(code).tokens;
  }

  if (snapshot.code === code) {
    return snapshot.tokens;
  }

  const tokens = snapshot.tokens.map((line) => [...line]);
  const suffixLines = code.slice(snapshot.code.length).split("\n");
  const firstSuffixLine = suffixLines.shift() ?? "";

  if (!tokens.length) {
    tokens.push([]);
  }
  tokens.at(-1)?.push(...createRawLineTokens(firstSuffixLine));
  tokens.push(...suffixLines.map(createRawLineTokens));

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
    className={cn(
      "dark:!bg-[var(--shiki-dark-bg)] dark:!text-[var(--shiki-dark)]",
      "[font-style:var(--shiki-light-font-style,normal)] dark:[font-style:var(--shiki-dark-font-style,var(--shiki-light-font-style,normal))]",
      "[font-weight:var(--shiki-light-font-weight,inherit)] dark:[font-weight:var(--shiki-dark-font-weight,var(--shiki-light-font-weight,inherit))]",
      "[text-decoration:var(--shiki-light-text-decoration,none)] dark:[text-decoration:var(--shiki-dark-text-decoration,var(--shiki-light-text-decoration,none))]"
    )}
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
  language?: CodeBlockLanguage;
  showLineNumbers?: boolean;
}

interface CodeBlockPreProps
  extends Omit<React.ComponentProps<typeof ark.pre>, "children"> {
  highlightedLines: number[];
  showLineNumbers: boolean;
  tokens: ThemedToken[][];
}

const CodeBlockPre = (props: CodeBlockPreProps) => {
  const { className, highlightedLines, showLineNumbers, tokens, ...rest } =
    props;

  return (
    <ark.pre
      className={cn(
        "min-w-max py-3 font-mono text-sm leading-(--code-surface-line-height)",
        className
      )}
      data-slot="code-block-content"
      dir="ltr"
      {...rest}
    >
      <code className="grid min-w-max" data-slot="code-block-code">
        {tokens.map((line, index) => {
          const lineNumber = index + 1;
          const highlighted = highlightedLines.includes(lineNumber);
          return (
            <span
              className={cn(
                "flex min-h-(--code-surface-line-height) py-0",
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
                    "sticky start-0 z-10 w-11 shrink-0 select-none pe-3 text-end text-muted-foreground",
                    highlighted ? "bg-primary/10" : "bg-card",
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
  const preProps = { className, highlightedLines, showLineNumbers, ...rest };
  const snapshot = useCodeTokens(code, language, isStreaming);
  const tokens = getDisplayedTokens(code, language, snapshot);

  return (
    <ScrollArea className="flex-1">
      <CodeBlockPre tokens={tokens} {...preProps} />
    </ScrollArea>
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
