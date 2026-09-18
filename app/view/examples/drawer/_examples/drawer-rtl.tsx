"use client";

import React from "react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const deliveryTimes = [
  {
    badge: "الأسرع",
    description: "25–35 دقيقة · تم تعيين السائق الآن",
    id: "drawer-rtl-asap",
    label: "توصيل قياسي",
    value: "asap",
  },
  {
    description: "يبدأ التحضير في 4:45 م",
    id: "drawer-rtl-5-00",
    label: "5:00 م – 5:15 م",
    value: "5-00",
  },
  {
    description: "مناسب إذا كنت في الطريق إلى المنزل",
    id: "drawer-rtl-5-30",
    label: "5:30 م – 5:45 م",
    value: "5-30",
  },
  {
    description: "الأكثر شيوعًا · طلب مرتفع",
    id: "drawer-rtl-6-00",
    label: "6:00 م – 6:15 م",
    value: "6-00",
  },
  {
    description: "آخر موعد قبل إغلاق المطبخ",
    id: "drawer-rtl-6-30",
    label: "6:30 م – 6:45 م",
    value: "6-30",
  },
];

const DrawerRtl = () => {
  const [open, setOpen] = React.useState(false);
  const [deliveryTime, setDeliveryTime] = React.useState("asap");

  return (
    <div className="flex w-full justify-center" dir="rtl">
      <LocaleProvider locale="ar-SA">
        <Drawer
          onOpenChange={({ open: nextOpen }) => setOpen(nextOpen)}
          open={open}
        >
          <DrawerTrigger asChild>
            <Button variant="secondary">فتح الدرج</Button>
          </DrawerTrigger>
          <DrawerContent dir="rtl">
            <DrawerHeader>
              <DrawerTitle>اختر وقت التوصيل</DrawerTitle>
              <DrawerDescription>
                سنجهز طلبك في أقرب وقت ممكن.
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 overflow-y-auto p-4">
              <RadioGroup
                className="gap-2"
                dir="rtl"
                onValueChange={({ value }) => setDeliveryTime(value ?? "")}
                value={deliveryTime}
              >
                {deliveryTimes.map((time) => (
                  <FieldLabel htmlFor={time.id} key={time.value}>
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle className="flex items-center gap-2">
                          {time.label}
                          {time.badge ? (
                            <Badge variant="secondary">{time.badge}</Badge>
                          ) : null}
                        </FieldTitle>
                        <FieldDescription dir="rtl">
                          {time.description}
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem
                        dir="rtl"
                        id={time.id}
                        value={time.value}
                      />
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
            </div>
            <DrawerFooter>
              <Button onClick={() => setOpen(false)}>تأكيد وقت التوصيل</Button>
              <DrawerClose asChild>
                <Button variant="outline">إلغاء</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </LocaleProvider>
    </div>
  );
};

export default DrawerRtl;
