"use client";

import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuCheckboxesIcons = () => {
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: true,
    sms: false,
  });

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Notifications</Button>
      </MenuTrigger>
      <MenuContent className="w-48">
        <MenuGroup heading="Notification Preferences">
          <MenuCheckboxItem
            checked={notifications.email}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, email: checked })
            }
            value="email"
          >
            <MailIcon />
            Email notifications
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={notifications.sms}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, sms: checked })
            }
            value="sms"
          >
            <MessageSquareIcon />
            SMS notifications
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={notifications.push}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, push: checked })
            }
            value="push"
          >
            <BellIcon />
            Push notifications
          </MenuCheckboxItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

export default MenuCheckboxesIcons;
