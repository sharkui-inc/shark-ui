"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { type Email, getSenderAvatar } from "../_data/mail";
import { getInitials } from "../_utils/get-initials";

export const MailMessage = ({ email }: { email: Email }) => (
  <ScrollArea className="flex-1" scrollFade>
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-7">
      <div className="min-w-0">
        <h2 className="text-balance font-heading font-semibold text-xl tracking-[-0.03em] sm:text-2xl">
          {email.subject}
        </h2>
        <div className="mt-4 flex items-center gap-3 text-muted-foreground text-sm">
          <Avatar>
            <AvatarImage alt="" src={getSenderAvatar(email.sender)} />
            <AvatarFallback>{getInitials(email.sender)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-medium text-foreground">
              {email.sender}
            </p>
            <p className="truncate text-xs">
              {email.senderEmail} · to me · {email.time}
            </p>
          </div>
        </div>
      </div>
      <div className="whitespace-pre-wrap text-base leading-7">
        {email.body}
      </div>
    </article>
  </ScrollArea>
);
