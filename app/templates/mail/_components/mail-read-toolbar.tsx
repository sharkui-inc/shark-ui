"use client";

import {
  ArchiveIcon,
  CircleAlertIcon,
  EyeIcon,
  EyeOffIcon,
  ReplyAllIcon,
  ReplyIcon,
  SearchIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import type { MailComposeMode } from "../_data/mail";
import { MailToolbarButton } from "./mail-toolbar-button";

export const MailReadToolbar = ({
  isStarred,
  isUnread,
  onComposeChange,
  onToggleFavorite,
  onToggleUnread,
}: {
  isStarred: boolean;
  isUnread: boolean;
  onComposeChange: (mode: MailComposeMode) => void;
  onToggleFavorite: () => void;
  onToggleUnread: () => void;
}) => (
  <>
    <ButtonGroup aria-label="Message actions" className="min-w-0">
      <ButtonGroup aria-label="Mailbox">
        <MailToolbarButton label="Archive message">
          <ArchiveIcon aria-hidden="true" />
        </MailToolbarButton>
        <MailToolbarButton label="Delete message">
          <Trash2Icon aria-hidden="true" />
        </MailToolbarButton>
        <MailToolbarButton label="Mark as junk">
          <CircleAlertIcon aria-hidden="true" />
        </MailToolbarButton>
      </ButtonGroup>
      <ButtonGroup aria-label="Flags">
        <MailToolbarButton
          label={isUnread ? "Mark as read" : "Mark as unread"}
          onClick={onToggleUnread}
          pressed={isUnread}
        >
          {isUnread ? (
            <EyeIcon aria-hidden="true" />
          ) : (
            <EyeOffIcon aria-hidden="true" />
          )}
        </MailToolbarButton>
        <MailToolbarButton
          label={`${isStarred ? "Remove" : "Add"} message ${isStarred ? "from" : "to"} favorites`}
          onClick={onToggleFavorite}
          pressed={isStarred}
        >
          <StarIcon
            aria-hidden="true"
            className={isStarred ? "fill-current text-primary" : undefined}
          />
        </MailToolbarButton>
      </ButtonGroup>
      <ButtonGroup aria-label="Reply">
        <MailToolbarButton
          label="Reply"
          onClick={() => onComposeChange("reply")}
        >
          <ReplyIcon aria-hidden="true" />
        </MailToolbarButton>
        <MailToolbarButton
          label="Reply all"
          onClick={() => onComposeChange("reply-all")}
        >
          <ReplyAllIcon aria-hidden="true" />
        </MailToolbarButton>
      </ButtonGroup>
    </ButtonGroup>
    <InputGroup className="ms-auto w-40 shrink-0 sm:w-44" size="sm">
      <InputGroupInput
        aria-label="Search messages"
        defaultValue=""
        placeholder="Search mail"
        type="search"
      />
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" />
      </InputGroupAddon>
    </InputGroup>
  </>
);
