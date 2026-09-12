"use client";

import type { MailComposeMode } from "../_data/mail";
import { MailComposeToolbar } from "./mail-compose-toolbar";
import { MailReadToolbar } from "./mail-read-toolbar";

export const MailToolbar = ({
  composeMode,
  isStarred,
  isUnread,
  onComposeChange,
  onToggleFavorite,
  onToggleUnread,
}: {
  composeMode: MailComposeMode;
  isStarred: boolean;
  isUnread: boolean;
  onComposeChange: (mode: MailComposeMode) => void;
  onToggleFavorite: () => void;
  onToggleUnread: () => void;
}) => (
  <div className="flex h-14 min-h-14 shrink-0 items-center gap-2 overflow-x-auto border-b bg-muted/18 px-3 py-0 sm:px-4">
    {composeMode ? (
      <MailComposeToolbar onComposeChange={onComposeChange} />
    ) : (
      <MailReadToolbar
        isStarred={isStarred}
        isUnread={isUnread}
        onComposeChange={onComposeChange}
        onToggleFavorite={onToggleFavorite}
        onToggleUnread={onToggleUnread}
      />
    )}
  </div>
);
