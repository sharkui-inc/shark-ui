"use client";

import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";

const ButtonGroupRtl = () => {
  const [label, setLabel] = useState("personal");

  return (
    <div dir="rtl">
      <LocaleProvider locale="ar-SA">
        <ButtonGroup>
          <ButtonGroup className="hidden sm:flex">
            <Button aria-label="Go Back" size="icon-md" variant="outline">
              <ArrowLeftIcon className="rtl:rotate-180" />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">أرشفة</Button>
            <Button variant="outline">تقرير</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">تأجيل</Button>
            <Menu positioning={{ placement: "bottom-start" }}>
              <MenuTrigger
                render={
                  <Button
                    aria-label="More Options"
                    size="icon-md"
                    variant="outline"
                  />
                }
              >
                <MoreHorizontalIcon />
              </MenuTrigger>
              <MenuContent className="w-40" dir="rtl">
                <MenuGroup>
                  <MenuItem value="mark-as-read">
                    <MailCheckIcon />
                    وضع علامة كمقروء
                  </MenuItem>
                  <MenuItem value="archive">
                    <ArchiveIcon />
                    أرشفة
                  </MenuItem>
                </MenuGroup>
                <MenuSeparator />
                <MenuGroup>
                  <MenuItem value="snooze">
                    <ClockIcon />
                    تأجيل
                  </MenuItem>
                  <MenuItem value="add-to-calendar">
                    <CalendarPlusIcon />
                    إضافة إلى التقويم
                  </MenuItem>
                  <MenuItem value="add-to-list">
                    <ListFilterIcon />
                    إضافة إلى القائمة
                  </MenuItem>
                  <MenuSub>
                    <MenuSubTrigger>
                      <TagIcon />
                      تصنيف كـ...
                    </MenuSubTrigger>
                    <MenuSubContent dir="rtl">
                      <MenuRadioGroup onValueChange={setLabel} value={label}>
                        <MenuRadioItem value="personal">شخصي</MenuRadioItem>
                        <MenuRadioItem value="work">عمل</MenuRadioItem>
                        <MenuRadioItem value="other">آخر</MenuRadioItem>
                      </MenuRadioGroup>
                    </MenuSubContent>
                  </MenuSub>
                </MenuGroup>
                <MenuSeparator />
                <MenuGroup>
                  <MenuItem value="trash" variant="destructive">
                    <Trash2Icon />
                    سلة المهملات
                  </MenuItem>
                </MenuGroup>
              </MenuContent>
            </Menu>
          </ButtonGroup>
        </ButtonGroup>
      </LocaleProvider>
    </div>
  );
};

export default ButtonGroupRtl;
