"use client";

import type { FormEvent } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Textarea } from "@/registry/react/components/textarea";
import type { Email, MailComposeMode } from "../_data/mail";

const REPLY_PREFIX = /^(re|fw|fwd):/i;

interface MailComposeProps {
  composeMode: Exclude<MailComposeMode, null>;
  onSend: (event: FormEvent<HTMLFormElement>) => void;
  selectedEmail?: Email;
}

const composeHeading = (mode: Exclude<MailComposeMode, null>) => {
  switch (mode) {
    case "new":
      return "New Message";
    case "reply":
      return "Reply";
    case "reply-all":
      return "Reply All";
    default: {
      const _exhaustive: never = mode;
      return _exhaustive;
    }
  }
};

const replySubject = (subject: string) =>
  REPLY_PREFIX.test(subject) ? subject : `Re: ${subject}`;

export const MailCompose = ({
  composeMode,
  onSend,
  selectedEmail,
}: MailComposeProps) => {
  const isReply = composeMode === "reply" || composeMode === "reply-all";

  return (
    <form
      className="flex min-h-0 flex-1 flex-col"
      id="mail-compose-form"
      onSubmit={onSend}
    >
      <div className="border-b bg-muted/18 px-4 py-3 sm:px-5">
        <h2 className="font-semibold text-sm tracking-[-0.02em]">
          {composeHeading(composeMode)}
        </h2>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-3 bg-background p-4 sm:p-5">
        <InputGroup>
          <InputGroupAddon>To</InputGroupAddon>
          <InputGroupInput
            aria-label="Recipients"
            defaultValue={isReply ? selectedEmail?.senderEmail : undefined}
            name="to"
            type="email"
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>Subject</InputGroupAddon>
          <InputGroupInput
            aria-label="Subject"
            defaultValue={
              isReply && selectedEmail
                ? replySubject(selectedEmail.subject)
                : undefined
            }
            name="subject"
          />
        </InputGroup>
        <Textarea
          aria-label="Message body"
          className="min-h-32 flex-1 resize-none"
          name="body"
          placeholder="Write a thoughtful message…"
        />
      </div>
    </form>
  );
};
