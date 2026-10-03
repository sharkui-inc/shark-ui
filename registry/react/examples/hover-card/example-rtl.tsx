"use client";

import { MapPinIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{values.hoverHere}</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <a
              className="font-medium text-sm underline underline-offset-4"
              href="#"
            >
              @vinihvc
            </a>

            <p className="text-muted-foreground text-sm">{values.role}</p>

            <p className="flex items-center gap-1 text-muted-foreground text-xs">
              <MapPinIcon className="size-4" />
              {values.joinedIn}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const translations = {
  ar: {
    values: {
      hoverHere: "مرر هنا",
      joinedIn: "انضم في ٢٠١٦",
      role: "مطوّر واجهات أمامية",
    },
  },
  en: {
    values: {
      hoverHere: "Hover here",
      joinedIn: "Joined in 2016",
      role: "Frontend Developer",
    },
  },
  he: {
    values: {
      hoverHere: "רחף כאן",
      joinedIn: "הצטרף ב-2016",
      role: "מפתח פרונטאנד",
    },
  },
};

export default Example;
