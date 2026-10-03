"use client";

import type { MailComposeMode } from "../_data/mail";
import { MailComposeToolbar } from "./mail-compose-toolbar";
import { MailReadToolbar } from "./mail-read-toolbar";

export const MailToolbar = (props: {
  composeMode: MailComposeMode;
  isStarred: boolean;
  isUnread: boolean;
  onComposeChange: (mode: MailComposeMode) => void;
  onSearchChange: (query: string) => void;
  onToggleFavorite: () => void;
  onToggleUnread: () => void;
  query: string;
}) => {
  const {
    composeMode,
    isStarred,
    isUnread,
    onComposeChange,
    onSearchChange,
    onToggleFavorite,
    onToggleUnread,
    query,
  } = props;
  return (
    <div className="flex h-14 min-h-14 shrink-0 items-center gap-2 overflow-x-auto border-b bg-muted/16 px-3 py-0 sm:px-4">
      {composeMode ? (
        <MailComposeToolbar onComposeChange={onComposeChange} />
      ) : (
        <MailReadToolbar
          isStarred={isStarred}
          isUnread={isUnread}
          onComposeChange={onComposeChange}
          onSearchChange={onSearchChange}
          onToggleFavorite={onToggleFavorite}
          onToggleUnread={onToggleUnread}
          query={query}
        />
      )}
    </div>
  );
};
