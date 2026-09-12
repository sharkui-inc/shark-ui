"use client";

import { type FormEvent, useState } from "react";
import { EMAILS, type MailComposeMode, STARRED_IDS } from "../_data/mail";
import { MailCompose } from "./mail-compose";
import { MailEmpty } from "./mail-empty";
import { MailMessage } from "./mail-message";
import { MailToolbar } from "./mail-toolbar";

const [selectedEmail] = EMAILS;

export const MailPane = () => {
  const [composeMode, setComposeMode] = useState<MailComposeMode>(null);
  const [isStarred, setIsStarred] = useState(
    selectedEmail ? STARRED_IDS.includes(selectedEmail.id) : false
  );
  const [isUnread, setIsUnread] = useState(selectedEmail?.unread ?? false);

  const closeCompose = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setComposeMode(null);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <MailToolbar
        composeMode={composeMode}
        isStarred={isStarred}
        isUnread={isUnread}
        onComposeChange={setComposeMode}
        onToggleFavorite={() => setIsStarred((starred) => !starred)}
        onToggleUnread={() => setIsUnread((unread) => !unread)}
      />
      <MailPaneBody
        composeMode={composeMode}
        onCompose={() => setComposeMode("new")}
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
  onSend: (event: FormEvent<HTMLFormElement>) => void;
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
