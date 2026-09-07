import { Badge } from "@registry/react/components/badge";
import { ChevronDownIcon } from "lucide-react";
import { ChatGptIcon } from "@/components/icons/chat-gpt";
import { ClaudeIcon } from "@/components/icons/claude";
import { MarkdownIcon } from "@/components/icons/markdown";
import { SITE_FEATURES } from "@/config/features";
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

  const pageUrl = absoluteUrl(`${url}`);

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
              <ChevronDownIcon aria-hidden className="size-4" />
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuGroup>
              <MenuItem asChild value="chatgpt">
                <a
                  href={getPromptUrl("https://chatgpt.com", pageUrl)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ChatGptIcon />
                  Open in ChatGPT
                </a>
              </MenuItem>
              <MenuItem asChild value="claude">
                <a
                  href={getPromptUrl("https://claude.ai/new", pageUrl)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ClaudeIcon />
                  Open in Claude
                </a>
              </MenuItem>
              {SITE_FEATURES.rawMarkdownRoutes ? (
                <MenuItem asChild value="markdown">
                  <a
                    href={`${pageUrl}.md`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MarkdownIcon />
                    View as Markdown
                  </a>
                </MenuItem>
              ) : (
                <MenuItem disabled value="markdown">
                  <MarkdownIcon />
                  View as Markdown
                  <Badge className="ms-auto" variant="outline">
                    Disabled
                  </Badge>
                </MenuItem>
              )}
            </MenuGroup>
          </MenuContent>
        </Menu>
      </ButtonGroup>
    </ButtonGroup>
  );
};

const getPromptUrl = (baseURL: string, url: string) =>
  `${baseURL}?q=${encodeURIComponent(
    `I’m looking at this shark-ui documentation: ${url}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.
  `
  )}`;
