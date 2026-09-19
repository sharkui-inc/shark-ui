"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Rating } from "@/registry/react/components/rating";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="flex flex-col items-center gap-3 text-center">
        <Avatar size="lg">
          <AvatarImage
            alt={values.driver}
            src="https://github.com/vinihvc.png"
          />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>Vinicius Vicentini</CardTitle>
          <CardDescription>{values.morning}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 text-center">
        <p className="font-medium text-sm">{values.rate}</p>
        <Rating />
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          {values.submit}
        </Button>
      </CardFooter>
    </Card>
  );
};

const translations = {
  ar: {
    values: {
      driver: "السائق",
      morning: "صباح الثلاثاء في ميركادو رقم ٨٩",
      rate: "قيّم سائقك",
      submit: "إرسال",
    },
  },
  en: {
    values: {
      driver: "Driver",
      morning: "Tuestday morning at Mercado N.89",
      rate: "Rate your driver",
      submit: "Submit",
    },
  },
  he: {
    values: {
      driver: "הנהג",
      morning: "יום שלישי בבוקר במרקאדו מס' 89",
      rate: "דרג את הנהג שלך",
      submit: "שליחה",
    },
  },
};

export default Example;
