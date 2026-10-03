"use client";

import React from "react";
import type { MailComposeMode } from "../_data/mail";
import { MailLayout } from "./mail-layout";
import { MailList } from "./mail-list";
import { MailPane } from "./mail-pane";
import { MailSidebar } from "./mail-sidebar";

export const MailWorkspace = () => {
  const [composeMode, setComposeMode] = React.useState<MailComposeMode>(null);
  const [query, setQuery] = React.useState("");

  return (
    <MailLayout
      content={
        <MailPane
          composeMode={composeMode}
          onComposeChange={setComposeMode}
          onSearchChange={setQuery}
          query={query}
        />
      }
      list={<MailList onCompose={() => setComposeMode("new")} query={query} />}
      sidebar={<MailSidebar />}
    />
  );
};
