import { createListCollection } from "@ark-ui/react";
import {
  BugIcon,
  CodeXmlIcon,
  FileTextIcon,
  GlobeIcon,
  HammerIcon,
  ImagePlusIcon,
  PaperclipIcon,
  RefreshCwIcon,
} from "lucide-react";
import type { PromptInputStatus } from "@/registry/react/components/prompt-input";
import { createChat } from "@/registry/react/lib/create-chat";

export const MODEL_OPTIONS = [
  {
    group: "OpenAI",
    label: "GPT-4.1",
    value: "gpt-4.1",
  },
  {
    group: "OpenAI",
    label: "GPT-4.1 Mini",
    value: "gpt-4.1-mini",
  },
  {
    group: "Anthropic",
    label: "Claude Sonnet 4",
    value: "claude-sonnet-4",
  },
] as const;

export const CONTEXT_USAGE = [
  { title: "Input", value: 4200 },
  { title: "Output", value: 860 },
  { title: "Reasoning", value: 640 },
  { title: "Cache", value: 1200 },
] as const;

export const effortCollection = createListCollection({
  items: [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
    { label: "Extra high", value: "extra-high" },
  ],
});

export const accessCollection = createListCollection({
  items: [
    {
      description: "Read, write, and run commands.",
      label: "Full access",
      value: "full",
    },
    {
      description: "Request approval before taking action.",
      label: "Ask first",
      value: "ask",
    },
    {
      description: "View files without making changes.",
      label: "Read only",
      value: "read",
    },
  ],
});

export const emptyStateSuggestions = [
  {
    icon: CodeXmlIcon,
    label: "Understand",
  },
  {
    icon: HammerIcon,
    label: "Build",
  },
  {
    icon: RefreshCwIcon,
    label: "Review",
  },
  {
    icon: BugIcon,
    label: "Fix",
  },
] as const;

export const promptActions = [
  {
    icon: PaperclipIcon,
    label: "Attach files and folders",
    value: "files",
  },
  {
    icon: ImagePlusIcon,
    label: "Add image or screenshot",
    value: "screenshot",
  },
  {
    icon: GlobeIcon,
    label: "Add web page",
    value: "web-page",
  },
  {
    icon: FileTextIcon,
    label: "Add project instructions",
    value: "instructions",
  },
] as const;

export const chat = createChat({ adapter: "ai-sdk" })
  .user(
    "I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around."
  )
  .assistant(
    "MessageScroller keeps the viewport pinned to the latest turn while tokens stream, so the thread does not jump. Keep the composer outside the scrollport and show MessageScrollerButton when the user scrolls up.",
    { delayMs: 400 }
  )
  .user("Inspect the thread component and show me the failing test.")
  .assistant(
    "The follow test fails because scroll restoration runs after layout. Pin the viewport during the stream and cover that path with a regression test.",
    { delayMs: 300 }
  )
  .user("Turn that into a plan I can approve.")
  .assistant(
    "Approve this rollout and I will apply the viewport pin, add the regression test, and document the composer layout.",
    { delayMs: 280 }
  );

export const getMessageText = (message: {
  parts: readonly { text?: string; type: string }[];
}) =>
  message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("");

export const toPromptStatus = (status: string): PromptInputStatus => {
  switch (status) {
    case "error":
      return "error";
    case "streaming":
      return "streaming";
    case "submitted":
      return "submitted";
    default:
      return "ready";
  }
};
