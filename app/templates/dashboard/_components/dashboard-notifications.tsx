"use client";

import { BellIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { initialUnreadIds, notifications } from "../_data/dashboard";

export const DashboardNotifications = () => {
  const [unreadIds, setUnreadIds] = React.useState(initialUnreadIds);
  const unreadCount = unreadIds.length;

  const markRead = (id: string) => {
    setUnreadIds((current) => current.filter((unreadId) => unreadId !== id));
  };

  return (
    <Popover
      modal={false}
      positioning={{ gutter: 16, placement: "bottom-end" }}
    >
      <PopoverTrigger asChild>
        <Button
          aria-label={
            unreadCount > 0
              ? `Notifications, ${unreadCount} unread`
              : "Notifications"
          }
          size="icon-sm"
          variant="ghost"
        >
          <BellIcon aria-hidden="true" />
          {unreadCount > 0 ? (
            <span className="bg-primary absolute inset-e-1 top-1 size-1.5 rounded-full" />
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-80">
        <PopoverHeader
          className="h-12 flex-row items-center justify-between"
          title="Notifications"
        >
          {unreadCount > 0 ? (
            <Button onClick={() => setUnreadIds([])} size="xs" variant="ghost">
              Mark all as read
            </Button>
          ) : null}
        </PopoverHeader>
        <PopoverBody>
          <ItemGroup>
            {notifications.map((notification) => {
              const unread = unreadIds.includes(notification.id);

              return (
                <Item asChild key={notification.id}>
                  <button
                    data-unread={unread || undefined}
                    onClick={() => markRead(notification.id)}
                    type="button"
                  >
                    <ItemMedia>
                      <span
                        aria-hidden="true"
                        className="in-data-unread:bg-primary size-1.5 rounded-full bg-transparent"
                      />
                    </ItemMedia>
                    <ItemContent>
                      {unread ? <span className="sr-only">Unread</span> : null}
                      <ItemHeader>
                        <ItemTitle>{notification.title}</ItemTitle>
                        <span className="text-muted-foreground text-xs tabular-nums">
                          {notification.time}
                        </span>
                      </ItemHeader>
                      <ItemDescription>
                        {notification.description}
                      </ItemDescription>
                    </ItemContent>
                  </button>
                </Item>
              );
            })}
          </ItemGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
