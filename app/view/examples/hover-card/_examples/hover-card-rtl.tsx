import { Button } from "@/registry/react/components/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/react/components/hover-card";
import { LocaleProvider } from "@/registry/react/components/locale";

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

const translations = {
  bottom: "أسفل",
  "inline-end": "نهاية السطر",
  "inline-start": "بداية السطر",
  left: "يسار",
  name: "سماعات لاسلكية",
  price: "٩٩.٩٩ $",
  right: "يمين",
  top: "أعلى",
} as const;

const logicalPlacement: Record<string, "left" | "right"> = {
  "inline-end": "left",
  "inline-start": "right",
};

const HoverCardRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="grid gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {physicalSides.map((side) => (
            <HoverCard key={side} positioning={{ placement: side }}>
              <HoverCardTrigger render={<Button variant="outline" />}>
                {translations[side]}
              </HoverCardTrigger>
              <HoverCardContent className="flex w-64 flex-col gap-1">
                <div className="font-semibold">{translations.name}</div>
                <div className="text-muted-foreground text-sm">
                  {translations.price}
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {logicalSides.map((side) => (
            <HoverCard
              key={side}
              positioning={{ placement: logicalPlacement[side] }}
            >
              <HoverCardTrigger render={<Button variant="outline" />}>
                {translations[side]}
              </HoverCardTrigger>
              <HoverCardContent className="flex w-64 flex-col gap-1">
                <div className="font-semibold">{translations.name}</div>
                <div className="text-muted-foreground text-sm">
                  {translations.price}
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </LocaleProvider>
  </div>
);

export default HoverCardRtl;
