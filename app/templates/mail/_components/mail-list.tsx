"use client";

import { InboxIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  State,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";
import { EMAILS, STARRED_IDS } from "../_data/mail";
import { MailListItem } from "./mail-list-item";
import { MailToolbarButton } from "./mail-toolbar-button";

const INBOX = EMAILS.filter((email) => email.folder === "Inbox");

export const MailList = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(INBOX[0]?.id ?? null);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([...STARRED_IDS]);

  const emails = INBOX.filter((email) =>
    `${email.sender} ${email.subject} ${email.preview}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const toggleFavorite = (emailId: string) => {
    setFavoriteIds((ids) =>
      ids.includes(emailId)
        ? ids.filter((id) => id !== emailId)
        : [...ids, emailId]
    );
  };

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background">
      <header className="flex h-14 min-h-14 shrink-0 items-center gap-2 border-b px-4 py-0">
        <h2 className="min-w-0 flex-1 truncate font-semibold text-sm">Inbox</h2>

        <MailToolbarButton label="New message" variant="default">
          <PlusIcon aria-hidden="true" />
        </MailToolbarButton>
      </header>
      <ScrollArea className="min-w-0 flex-1" orientation="vertical" scrollFade>
        {emails.length > 0 ? (
          emails.map((email) => (
            <MailListItem
              email={email}
              isSelected={selectedId === email.id}
              isStarred={favoriteIds.includes(email.id)}
              key={email.id}
              onSelect={setSelectedId}
              onToggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <State className="min-h-52 border-0">
            <StateHeader>
              <StateMedia variant="icon">
                <InboxIcon aria-hidden="true" />
              </StateMedia>
              <StateTitle>Nothing to review here.</StateTitle>
              <StateDescription>
                Try another mailbox or clear the search.
              </StateDescription>
            </StateHeader>
          </State>
        )}
      </ScrollArea>
    </div>
  );
};
