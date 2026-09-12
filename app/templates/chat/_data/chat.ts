import {
  FileIcon,
  FolderOpenIcon,
  GitBranchIcon,
  GlobeIcon,
  MessageSquareIcon,
  SearchIcon,
  Settings2Icon,
  SquarePenIcon,
  TerminalIcon,
} from "lucide-react";

export const NEW_CHAT = "New chat";

export const conversations = [
  "Fix streaming scroll",
  "Plan the release notes",
  "Explore motion recipes",
  "Design system review",
  "Summarize customer research",
];

export const workspaces = [
  {
    description: "Build, debug, and ship",
    name: "Forge",
    value: "forge",
  },
  {
    description: "Ask, learn, and explore",
    name: "Orbit",
    value: "orbit",
  },
] as const;

export const commandItems = [
  {
    group: "Quick actions",
    icon: SquarePenIcon,
    label: NEW_CHAT,
    shortcut: "⌘N",
    value: "new-chat",
  },
  {
    group: "Quick actions",
    icon: FolderOpenIcon,
    label: "Open folder",
    shortcut: "⌘O",
    value: "open-folder",
  },
  {
    group: "Quick actions",
    icon: SearchIcon,
    label: "Search files",
    shortcut: "⌘P",
    value: "search-files",
  },
  {
    group: "Settings",
    icon: Settings2Icon,
    label: "General",
    shortcut: undefined,
    value: "general-settings",
  },
  ...conversations.map((label) => ({
    group: "Recent chats",
    icon: MessageSquareIcon,
    label,
    shortcut: undefined,
    value: `chat:${label}`,
  })),
];

export const appPanels = [
  {
    description: "Review your diff",
    icon: GitBranchIcon,
    label: "Changes",
  },
  { description: "Browse the web", icon: GlobeIcon, label: "Browser" },
  { description: "Run commands", icon: TerminalIcon, label: "Terminal" },
  { description: "Inspect files", icon: FileIcon, label: "File" },
] as const;

export const environmentSources = [
  "chat-layout.png",
  "music-sidebar.png",
  "apps-sidebar.png",
] as const;

export const account = {
  avatar: "/images/gradients/rose.svg",
  initials: "VV",
  name: "Vinicius Vicentini",
};
