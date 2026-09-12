"use client";

import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { Status } from "@/registry/react/components/status";
import { type Email, getSenderAvatar } from "../_data/mail";
import { getInitials } from "../_utils/get-initials";

export const MailListItem = ({
  email,
  isSelected,
  isStarred,
  onSelect,
  onToggleFavorite,
}: {
  email: Email;
  isSelected: boolean;
  isStarred: boolean;
  onSelect: (emailId: string) => void;
  onToggleFavorite: (emailId: string) => void;
}) => (
  <Item
    className={cn(
      "rounded-none border-x-0 border-t-0 [--space:--spacing(4)]",
      isSelected ? "bg-muted" : "hover:bg-muted"
    )}
  >
    <button
      className="flex min-w-0 flex-1 items-start gap-3 text-start outline-none"
      onClick={() => onSelect(email.id)}
      type="button"
    >
      <ItemMedia>
        <Avatar>
          <AvatarImage alt="" src={getSenderAvatar(email.sender)} />
          <AvatarFallback>{getInitials(email.sender)}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle className={email.unread ? "font-semibold" : undefined}>
          {email.sender}
        </ItemTitle>
        <ItemDescription
          className={email.unread ? "text-foreground" : undefined}
        >
          {email.subject}
        </ItemDescription>
        <ItemDescription>{email.preview}</ItemDescription>
      </ItemContent>
    </button>
    <ItemActions className="flex-col items-end justify-between self-stretch">
      <span className="flex items-center gap-1.5">
        <span className="text-xs tabular-nums">{email.time}</span>
        {email.unread ? (
          <>
            <span className="sr-only">Unread</span>
            <Status size="sm" variant="info" />
          </>
        ) : null}
      </span>
      <Button
        aria-label={`${isStarred ? "Remove" : "Add"} ${email.subject} ${isStarred ? "from" : "to"} favorites`}
        aria-pressed={isStarred}
        onClick={() => onToggleFavorite(email.id)}
        size="icon-xs"
        variant="ghost"
      >
        <StarIcon
          aria-hidden="true"
          className={
            isStarred ? "fill-current text-primary" : "text-muted-foreground"
          }
        />
      </Button>
    </ItemActions>
  </Item>
);
