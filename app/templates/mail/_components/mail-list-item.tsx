"use client";

import { StarIcon } from "lucide-react";
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

interface MailListItemProps {
  email: Email;
  isSelected: boolean;
  isStarred: boolean;
  onSelect: (emailId: string) => void;
  onToggleFavorite: (emailId: string) => void;
}

export const MailListItem = (props: MailListItemProps) => {
  const { email, isSelected, isStarred, onSelect, onToggleFavorite } = props;

  return (
    <Item
      className="rounded-none border-x-0 border-t-0 transition-none data-selected:bg-muted [--space:--spacing(4)]"
      data-selected={isSelected || undefined}
      data-unread={email.unread || undefined}
    >
      <button
        className="flex min-w-0 flex-1 items-start gap-3 text-start outline-hidden"
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
          <ItemTitle className="in-data-unread:font-semibold">
            {email.sender}
          </ItemTitle>
          <ItemDescription className="in-data-unread:text-foreground">
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
          data-starred={isStarred || undefined}
          onClick={() => onToggleFavorite(email.id)}
          size="icon-xs"
          variant="ghost"
        >
          <StarIcon
            aria-hidden="true"
            className="text-muted-foreground in-data-starred:fill-current in-data-starred:text-primary"
          />
        </Button>
      </ItemActions>
    </Item>
  );
};
