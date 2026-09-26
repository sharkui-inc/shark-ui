"use client";

import { CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const MenuRtl = () => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">افتح القائمة</Button>
      </MenuTrigger>
      <MenuContent className="w-36">
        <MenuGroup>
          <MenuSub>
            <MenuSubTrigger>الحساب</MenuSubTrigger>
            <MenuSubContent>
              <MenuGroup>
                <MenuItem value="profile">
                  <UserIcon />
                  الملف الشخصي
                </MenuItem>
                <MenuItem value="billing">
                  <CreditCardIcon />
                  الفوترة
                </MenuItem>
                <MenuItem value="settings">
                  <SettingsIcon />
                  الإعدادات
                </MenuItem>
              </MenuGroup>
            </MenuSubContent>
          </MenuSub>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup heading="الفريق">
          <MenuItem value="team">الفريق</MenuItem>
          <MenuSub>
            <MenuSubTrigger>دعوة المستخدمين</MenuSubTrigger>
            <MenuSubContent>
              <MenuItem value="email">البريد الإلكتروني</MenuItem>
              <MenuItem value="message">رسالة</MenuItem>
              <MenuSub>
                <MenuSubTrigger>المزيد</MenuSubTrigger>
                <MenuSubContent>
                  <MenuItem value="calendar">تقويم</MenuItem>
                  <MenuItem value="chat">دردشة</MenuItem>
                  <MenuSeparator />
                  <MenuItem value="webhook">خطاف ويب</MenuItem>
                </MenuSubContent>
              </MenuSub>
              <MenuSeparator />
              <MenuItem value="advanced">متقدم...</MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuItem value="new-team">
            فريق جديد
            <MenuShortcut>⌘T</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup heading="عرض">
          <MenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
            value="status-bar"
          >
            شريط الحالة
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            value="activity-bar"
          >
            شريط النشاط
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
            value="panel"
          >
            اللوحة
          </MenuCheckboxItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup heading="الموضع">
          <MenuRadioGroup
            onValueChange={({ value }) => setPosition(value)}
            value={position}
          >
            <MenuRadioItem value="top">أعلى</MenuRadioItem>
            <MenuRadioItem value="bottom">أسفل</MenuRadioItem>
            <MenuRadioItem value="right">يمين</MenuRadioItem>
            <MenuRadioItem value="left">يسار</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem value="logout" variant="destructive">
          تسجيل الخروج
        </MenuItem>
      </MenuContent>
    </Menu>
  );
};

export default MenuRtl;
