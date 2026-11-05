import { ChevronDownIcon } from "lucide-react";
import type React from "react";
import { ChatGptIcon } from "@/components/icons/chat-gpt";
import { ClaudeIcon } from "@/components/icons/claude";
import { CursorIcon } from "@/components/icons/cursor";
import { MarkdownIcon } from "@/components/icons/markdown";
import { PerplexityIcon } from "@/components/icons/perplexity";
import { V0Icon } from "@/components/icons/v0";
import { absoluteUrl } from "@/lib/url";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

interface DocsCopyPageProps extends React.ComponentProps<typeof ButtonGroup> {
  /**
   * The raw content of the page
   */
  data: string;
  /**
   * The url of the page
   */
  url: string;
}

export const DocsCopyPage = (props: DocsCopyPageProps) => {
  const { data, url, className, ...rest } = props;

  const markdownUrl = absoluteUrl(`${url}.md`);

  return (
    <ButtonGroup className={cn("hidden sm:flex", className)} {...rest}>
      <ButtonGroup>
        <Clipboard value={data}>
          <ClipboardTrigger asChild>
            <Button size="sm" variant="outline">
              <ClipboardIndicator />
              Copy Markdown
            </Button>
          </ClipboardTrigger>
        </Clipboard>

        <Menu positioning={{ placement: "bottom-end" }}>
          <MenuTrigger asChild>
            <Button aria-label="Open" size="icon-sm" variant="outline">
              <ChevronDownIcon aria-hidden="true" />
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuGroup>
              <MenuItem asChild value="chatgpt">
                <a
                  href={getPromptUrl("https://chatgpt.com", markdownUrl)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ChatGptIcon />
                  Open in ChatGPT
                </a>
              </MenuItem>
              <MenuItem asChild value="chatgpt-desktop">
                <a href={getPromptUrl("codex://new", markdownUrl, "prompt")}>
                  <ChatGptIcon />
                  Open in ChatGPT Desktop
                </a>
              </MenuItem>
              <MenuItem asChild value="claude">
                <a
                  href={getPromptUrl("https://claude.ai/new", markdownUrl)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ClaudeIcon />
                  Open in Claude
                </a>
              </MenuItem>
              <MenuItem asChild value="claude-desktop">
                <a href={getPromptUrl("claude://claude.ai/new", markdownUrl)}>
                  <ClaudeIcon />
                  Open in Claude Desktop
                </a>
              </MenuItem>
              <MenuItem asChild value="v0">
                <a
                  href={getPromptUrl("https://v0.dev", markdownUrl)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <V0Icon />
                  Open in v0
                </a>
              </MenuItem>
              <MenuItem asChild value="cursor">
                <a
                  href={getPromptUrl(
                    "https://cursor.com/link/prompt",
                    markdownUrl,
                    "text"
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <CursorIcon />
                  Open in Cursor
                </a>
              </MenuItem>
              <MenuItem asChild value="perplexity">
                <a
                  href={getPromptUrl(
                    "https://www.perplexity.ai/search",
                    markdownUrl
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <PerplexityIcon />
                  Open in Perplexity
                </a>
              </MenuItem>
              <MenuItem asChild value="markdown">
                <a href={`${url}.md`} rel="noopener noreferrer" target="_blank">
                  <MarkdownIcon />
                  View as Markdown
                </a>
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      </ButtonGroup>
    </ButtonGroup>
  );
};

const getPromptUrl = (baseURL: string, url: string, queryParam = "q") =>
  `${baseURL}?${queryParam}=${encodeURIComponent(
    `Read ${url}, I want to ask questions about it.`
  )}`;
