"use client";

import { ArrowLeftIcon, ArrowRightIcon, RotateCwIcon } from "lucide-react";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
} from "@/registry/react/components/menu";

const ContextMenuRtl = () => {
  const [people, setPeople] = useState("pedro");

  return (
    <div dir="rtl">
      <LocaleProvider locale="ar-SA">
        <ContextMenu>
          <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
            <span className="pointer-fine:inline-block hidden">
              انقر بزر الماوس الأيمن هنا
            </span>
            <span className="pointer-coarse:inline-block hidden">
              اضغط مطولاً هنا
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuSub>
                <ContextMenuSubTrigger>التنقل</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem value="back">
                      <ArrowLeftIcon />
                      رجوع
                      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem disabled value="forward">
                      <ArrowRightIcon />
                      تقدم
                      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem value="reload">
                      <RotateCwIcon />
                      إعادة تحميل
                      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger>المزيد من الأدوات</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem value="save-page">
                      حفظ الصفحة...
                    </ContextMenuItem>
                    <ContextMenuItem value="create-shortcut">
                      إنشاء اختصار...
                    </ContextMenuItem>
                    <ContextMenuItem value="name-window">
                      تسمية النافذة...
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem value="developer-tools">
                      أدوات المطور
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem value="delete" variant="destructive">
                      حذف
                    </ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <MenuCheckboxItem checked value="show-bookmarks">
              إظهار الإشارات المرجعية
            </MenuCheckboxItem>
            <MenuCheckboxItem checked={false} value="show-full-urls">
              إظهار عناوين URL الكاملة
            </MenuCheckboxItem>
            <ContextMenuSeparator />
            <MenuRadioGroup
              heading="الأشخاص"
              onValueChange={({ value }) => setPeople(value)}
              value={people}
            >
              <MenuRadioItem value="pedro">Pedro Duarte</MenuRadioItem>
              <MenuRadioItem value="colm">Colm Tuite</MenuRadioItem>
            </MenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </LocaleProvider>
    </div>
  );
};

export default ContextMenuRtl;
