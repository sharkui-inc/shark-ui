"use client";

import {
  CalendarClockIcon,
  ChevronDownIcon,
  ClockArrowUpIcon,
  FileIcon,
  ImageIcon,
  ListIcon,
  PaperclipIcon,
  SmileIcon,
  SparklesIcon,
  Undo2Icon,
  WandSparklesIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { MailToolbarButton } from "./mail-toolbar-button";

interface ComposeMenuItem {
  icon: ReactNode;
  label: string;
  value: string;
}

const TEMPLATE_ITEMS: ComposeMenuItem[] = [
  {
    icon: <ListIcon aria-hidden="true" />,
    label: "Follow-up",
    value: "follow-up",
  },
  {
    icon: <ListIcon aria-hidden="true" />,
    label: "Introduction",
    value: "intro",
  },
  {
    icon: <ListIcon aria-hidden="true" />,
    label: "Meeting notes",
    value: "notes",
  },
];

const ATTACHMENT_ITEMS: ComposeMenuItem[] = [
  {
    icon: <FileIcon aria-hidden="true" />,
    label: "Attach file",
    value: "file",
  },
  {
    icon: <ImageIcon aria-hidden="true" />,
    label: "Insert image",
    value: "image",
  },
];

const SEND_ITEMS: ComposeMenuItem[] = [
  {
    icon: <ClockArrowUpIcon aria-hidden="true" />,
    label: "Send now",
    value: "now",
  },
  {
    icon: <CalendarClockIcon aria-hidden="true" />,
    label: "Schedule send",
    value: "schedule",
  },
  {
    icon: <SparklesIcon aria-hidden="true" />,
    label: "Send when I'm next free",
    value: "later",
  },
];

const ComposeMenu = ({
  icon,
  items,
  label,
}: {
  icon: ReactNode;
  items: readonly ComposeMenuItem[];
  label: string;
}) => (
  <Menu className="contents" positioning={{ placement: "bottom-start" }}>
    <MenuTrigger asChild>
      <Button
        aria-label={label}
        clickEffect={false}
        size="sm"
        variant="outline"
      >
        {icon}
        <ChevronDownIcon aria-hidden="true" />
      </Button>
    </MenuTrigger>
    <MenuContent className="min-w-44">
      <MenuGroup>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export const MailComposeTools = () => (
  <ButtonGroup aria-label="Compose tools" className="min-w-0 shrink-0">
    <ButtonGroup aria-label="Writing tools">
      <MailToolbarButton label="Undo">
        <Undo2Icon aria-hidden="true" />
      </MailToolbarButton>
      <MailToolbarButton label="Formatting">
        <span
          aria-hidden="true"
          className="font-medium text-[11px] leading-none"
        >
          Aa
        </span>
      </MailToolbarButton>
      <MailToolbarButton label="Emoji">
        <SmileIcon aria-hidden="true" />
      </MailToolbarButton>
      <MailToolbarButton label="Write with AI">
        <WandSparklesIcon aria-hidden="true" />
      </MailToolbarButton>
    </ButtonGroup>
    <ButtonGroup aria-label="Insert">
      <ComposeMenu
        icon={<ListIcon aria-hidden="true" />}
        items={TEMPLATE_ITEMS}
        label="Templates"
      />
      <ComposeMenu
        icon={<PaperclipIcon aria-hidden="true" />}
        items={ATTACHMENT_ITEMS}
        label="Attach"
      />
      <ComposeMenu
        icon={<ClockArrowUpIcon aria-hidden="true" />}
        items={SEND_ITEMS}
        label="Send options"
      />
    </ButtonGroup>
  </ButtonGroup>
);
