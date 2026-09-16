"use client";

import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { LocaleProvider } from "@/registry/react/components/locale";

const ItemRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>عنصر أساسي</ItemTitle>
            <ItemDescription>عنصر بسيط يحتوي على عنوان ووصف.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              إجراء
            </Button>
          </ItemActions>
        </Item>
        <Item asChild variant="outline">
          <a href="/docs">
            <ItemMedia>
              <BadgeCheckIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>تم التحقق من ملفك الشخصي.</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="rtl:rotate-180" />
            </ItemActions>
          </a>
        </Item>
      </div>
    </LocaleProvider>
  </div>
);

export default ItemRtl;
