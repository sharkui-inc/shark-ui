"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const verticalDirections = [undefined, "up"] as const;
const sideDirections = ["start", "end"] as const;

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {values.vertical.map((drawer, index) => (
        <Drawer key={drawer.title} swipeDirection={verticalDirections[index]}>
          <DrawerTrigger asChild>
            <Button variant="outline">{drawer.trigger}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader title={drawer.title} />
            <DrawerBody>
              <div className="mx-auto w-full max-w-xs">
                <p className="text-muted-foreground text-sm">{drawer.body}</p>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ))}

      {values.sideTriggers.map((trigger, index) => (
        <SideDeliveryDrawer
          copy={values.delivery}
          key={trigger}
          swipeDirection={sideDirections[index]}
          trigger={trigger}
        />
      ))}
    </div>
  );
};

const SideDeliveryDrawer = (props: {
  copy: (typeof translations)["en"]["values"]["delivery"];
  swipeDirection: "start" | "end";
  trigger: string;
}) => {
  const { copy, swipeDirection, trigger } = props;

  return (
    <Drawer swipeDirection={swipeDirection}>
      <DrawerTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DrawerTrigger>
      <DrawerContent variant="inset">
        <DrawerHeader description={copy.description} title={copy.title} />
        <DrawerBody className="text-start">
          <RadioGroup className="w-full gap-2" defaultValue="standard">
            {copy.options.map((option) => (
              <FieldLabel key={option.value}>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>
                      {option.title}
                      {option.badge ? (
                        <Badge pill size="sm" variant="secondary">
                          {option.badge}
                        </Badge>
                      ) : null}
                    </FieldTitle>
                    <FieldDescription>{option.description}</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem
                    className="**:data-[slot=radio-group-item-text]:hidden"
                    value={option.value}
                  />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </DrawerBody>
        <DrawerFooter className="sm:flex-col">
          <DrawerClose asChild>
            <Button className="w-full" pill variant="outline">
              {copy.cancel}
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="w-full" pill>
              {copy.confirm}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const translations = {
  ar: {
    values: {
      delivery: {
        cancel: "إلغاء",
        confirm: "تأكيد وقت التوصيل",
        description: "سنجهز طلبك في أقرب وقت ممكن.",
        options: [
          {
            badge: "الأسرع",
            description: "٢٥–٣٥ دقيقة",
            title: "توصيل قياسي",
            value: "standard",
          },
          {
            description: "الإثنين، ٧:٠٠ م – ٩:٠٠ م",
            title: "جدولة لاحقًا",
            value: "later-1",
          },
          {
            description: "الثلاثاء، ٩:٠٠ ص – ١٢:٠٠ م",
            title: "جدولة لاحقًا",
            value: "later-2",
          },
          {
            description: "الثلاثاء، ٧:٠٠ م – ٩:٠٠ م",
            title: "جدولة لاحقًا",
            value: "later-3",
          },
        ],
        title: "اختر وقت التوصيل",
      },
      sideTriggers: ["يمين", "يسار"],
      vertical: [
        {
          body: "اسحب لأسفل لإغلاق هذا المقبض.",
          title: "مقبض سفلي",
          trigger: "أسفل",
        },
        {
          body: "اسحب لأعلى لإغلاق هذا المقبض.",
          title: "مقبض علوي",
          trigger: "أعلى",
        },
      ],
    },
  },
  en: {
    values: {
      delivery: {
        cancel: "Cancel",
        confirm: "Confirm Delivery Time",
        description: "We'll prepare your order as soon as possible.",
        options: [
          {
            badge: "Fastest",
            description: "25-35 min",
            title: "Standard delivery",
            value: "standard",
          },
          {
            description: "Mon, 7:00 PM – 9:00 PM",
            title: "Schedule for later",
            value: "later-1",
          },
          {
            description: "Tue, 9:00 AM – 12:00 PM",
            title: "Schedule for later",
            value: "later-2",
          },
          {
            description: "Tue, 7:00 PM – 9:00 PM",
            title: "Schedule for later",
            value: "later-3",
          },
        ],
        title: "Pick a delivery time",
      },
      sideTriggers: ["Left", "Right"],
      vertical: [
        {
          body: "Swipe down to close this drawer.",
          title: "Bottom Drawer",
          trigger: "Bottom",
        },
        {
          body: "Swipe up to close this drawer.",
          title: "Top Drawer",
          trigger: "Top",
        },
      ],
    },
  },
  he: {
    values: {
      delivery: {
        cancel: "ביטול",
        confirm: "אשר זמן משלוח",
        description: "נכין את ההזמנה שלך בהקדם האפשרי.",
        options: [
          {
            badge: "המהיר ביותר",
            description: "25–35 דק׳",
            title: "משלוח רגיל",
            value: "standard",
          },
          {
            description: "ב׳, 19:00–21:00",
            title: "תזמון למועד מאוחר יותר",
            value: "later-1",
          },
          {
            description: "ג׳, 09:00–12:00",
            title: "תזמון למועד מאוחר יותר",
            value: "later-2",
          },
          {
            description: "ג׳, 19:00–21:00",
            title: "תזמון למועד מאוחר יותר",
            value: "later-3",
          },
        ],
        title: "בחרו זמן משלוח",
      },
      sideTriggers: ["ימין", "שמאל"],
      vertical: [
        {
          body: "גרור למטה כדי לסגור את המגירה הזו.",
          title: "מגירה תחתונה",
          trigger: "למטה",
        },
        {
          body: "גרור למעלה כדי לסגור את המגירה הזו.",
          title: "מגירה עליונה",
          trigger: "למעלה",
        },
      ],
    },
  },
};

export default Example;
