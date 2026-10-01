"use client";

import React from "react";
import { EMAILS, type MailComposeMode, STARRED_IDS } from "../_data/mail";
import { MailCompose } from "./mail-compose";
import { MailEmpty } from "./mail-empty";
import { MailMessage } from "./mail-message";
import { MailToolbar } from "./mail-toolbar";

const [selectedEmail] = EMAILS;

export const MailPane = ({
  composeMode,
  onComposeChange,
  onSearchChange,
  query,
}: {
  composeMode: MailComposeMode;
  onComposeChange: (mode: MailComposeMode) => void;
  onSearchChange: (query: string) => void;
  query: string;
}) => {
  const [isStarred, setIsStarred] = React.useState(
    selectedEmail ? STARRED_IDS.includes(selectedEmail.id) : false
  );
  const [isUnread, setIsUnread] = React.useState(
    selectedEmail?.unread ?? false
  );

  const closeCompose = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onComposeChange(null);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <MailToolbar
        composeMode={composeMode}
        isStarred={isStarred}
        isUnread={isUnread}
        onComposeChange={onComposeChange}
        onSearchChange={onSearchChange}
        onToggleFavorite={() => setIsStarred((starred) => !starred)}
        onToggleUnread={() => setIsUnread((unread) => !unread)}
        query={query}
      />
      <MailPaneBody
        composeMode={composeMode}
        onCompose={() => onComposeChange("new")}
        onSend={closeCompose}
      />
    </div>
  );
};

const MailPaneBody = ({
  composeMode,
  onCompose,
  onSend,
}: {
  composeMode: MailComposeMode;
  onCompose: () => void;
  onSend: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  if (composeMode) {
    return (
      <MailCompose
        composeMode={composeMode}
        onSend={onSend}
        selectedEmail={selectedEmail}
      />
    );
  }

  if (selectedEmail) {
    return <MailMessage email={selectedEmail} />;
  }

  return <MailEmpty onCompose={onCompose} />;
};
