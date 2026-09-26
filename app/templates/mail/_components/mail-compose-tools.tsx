"use client";

import {
  CalendarCheckIcon,
  CalendarClockIcon,
  ChevronDownIcon,
  ClockArrowUpIcon,
  FileIcon,
  ImageIcon,
  ListIcon,
  PaperclipIcon,
  SmileIcon,
  Undo2Icon,
  WandSparklesIcon,
} from "lucide-react";
import type React from "react";
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
  icon: React.ReactNode;
  label: string;
  value: string;
}

const TEMPLATE_ITEMS: ComposeMenuItem[] = [
  {
    icon: <ListIcon aria-hidden />,
    label: "Follow-up",
    value: "follow-up",
  },
  {
    icon: <ListIcon aria-hidden />,
    label: "Introduction",
    value: "intro",
  },
  {
    icon: <ListIcon aria-hidden />,
    label: "Meeting notes",
    value: "notes",
  },
];

const ATTACHMENT_ITEMS: ComposeMenuItem[] = [
  {
    icon: <FileIcon aria-hidden />,
    label: "Attach file",
    value: "file",
  },
  {
    icon: <ImageIcon aria-hidden />,
    label: "Insert image",
    value: "image",
  },
];

const SEND_ITEMS: ComposeMenuItem[] = [
  {
    icon: <ClockArrowUpIcon aria-hidden />,
    label: "Send now",
    value: "now",
  },
  {
    icon: <CalendarClockIcon aria-hidden />,
    label: "Schedule send",
    value: "schedule",
  },
  {
    icon: <CalendarCheckIcon aria-hidden />,
    label: "Send when I'm next free",
    value: "later",
  },
];

const ComposeMenu = ({
  icon,
  items,
  label,
}: {
  icon: React.ReactNode;
  items: readonly ComposeMenuItem[];
  label: string;
}) => (
  <Menu positioning={{ placement: "bottom-start" }}>
    <MenuTrigger asChild>
      <Button aria-label={label} size="sm" variant="outline">
        {icon}
        <ChevronDownIcon aria-hidden />
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
        <Undo2Icon aria-hidden />
      </MailToolbarButton>
      <MailToolbarButton label="Formatting">
        <span aria-hidden className="font-medium text-[11px] leading-none">
          Aa
        </span>
      </MailToolbarButton>
      <MailToolbarButton label="Emoji">
        <SmileIcon aria-hidden />
      </MailToolbarButton>
      <MailToolbarButton label="Write with AI">
        <WandSparklesIcon aria-hidden />
      </MailToolbarButton>
    </ButtonGroup>
    <ButtonGroup aria-label="Insert">
      <ComposeMenu
        icon={<ListIcon aria-hidden />}
        items={TEMPLATE_ITEMS}
        label="Templates"
      />
      <ComposeMenu
        icon={<PaperclipIcon aria-hidden />}
        items={ATTACHMENT_ITEMS}
        label="Attach"
      />
      <ComposeMenu
        icon={<ClockArrowUpIcon aria-hidden />}
        items={SEND_ITEMS}
        label="Send options"
      />
    </ButtonGroup>
  </ButtonGroup>
);
