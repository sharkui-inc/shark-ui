"use client";

import { ArrowLeftIcon, SendIcon, XIcon } from "lucide-react";
import { ButtonGroup } from "@/registry/react/components/button-group";
import type { MailComposeMode } from "../_data/mail";
import { MailComposeTools } from "./mail-compose-tools";
import { MailToolbarButton } from "./mail-toolbar-button";

export const MailComposeToolbar = ({
  onComposeChange,
}: {
  onComposeChange: (mode: MailComposeMode) => void;
}) => (
  <>
    <MailToolbarButton label="Back" onClick={() => onComposeChange(null)}>
      <ArrowLeftIcon aria-hidden="true" />
    </MailToolbarButton>
    <MailComposeTools />
    <ButtonGroup aria-label="Compose" className="ms-auto shrink-0">
      <MailToolbarButton label="Discard" onClick={() => onComposeChange(null)}>
        <XIcon aria-hidden="true" />
      </MailToolbarButton>
      <MailToolbarButton
        form="mail-compose-form"
        label="Send"
        type="submit"
        variant="default"
      >
        <SendIcon aria-hidden="true" />
      </MailToolbarButton>
    </ButtonGroup>
  </>
);
