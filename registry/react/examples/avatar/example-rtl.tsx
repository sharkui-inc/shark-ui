"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/react/components/avatar";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <Avatar>
        <AvatarImage
          alt={values.primary}
          src="https://github.com/vinihvc.png"
        />
        <AvatarFallback>VV</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarImage
          alt={values.secondary}
          src="https://github.com/shadcn.png"
        />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge variant="success" />
      </Avatar>

      <AvatarGroup className="grayscale">
        {values.group.map((alt) => (
          <Avatar key={alt}>
            <AvatarImage
              alt={alt}
              src={`https://github.com/${alt.slice(1)}.png`}
            />
            <AvatarFallback>
              {values.fallbacks[values.group.indexOf(alt)]}
            </AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>{values.count}</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      count: "+2",
      fallbacks: ["VV", "SA", "PV"],
      group: ["@vinihvc", "@segunadebayo", "@pasqualevitiello"],
      primary: "@vinihvc",
      secondary: "@shadcn",
    },
  },
  en: {
    values: {
      count: "+2",
      fallbacks: ["VV", "SA", "PV"],
      group: ["@vinihvc", "@segunadebayo", "@pasqualevitiello"],
      primary: "@vinihvc",
      secondary: "@shadcn",
    },
  },
  he: {
    values: {
      count: "+2",
      fallbacks: ["VV", "SA", "PV"],
      group: ["@vinihvc", "@segunadebayo", "@pasqualevitiello"],
      primary: "@vinihvc",
      secondary: "@shadcn",
    },
  },
};

export default Example;
