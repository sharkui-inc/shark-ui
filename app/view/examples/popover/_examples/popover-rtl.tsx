import { Button } from "@/registry/react/components/button";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

const translations = {
  bottom: "أسفل",
  description: "تعيين الأبعاد للطبقة.",
  "inline-end": "نهاية السطر",
  "inline-start": "بداية السطر",
  left: "يسار",
  right: "يمين",
  title: "الأبعاد",
  top: "أعلى",
} as const;

const logicalPlacement: Record<string, "left" | "right"> = {
  "inline-end": "left",
  "inline-start": "right",
};

const PopoverRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="grid gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {physicalSides.map((side) => (
            <Popover key={side} positioning={{ placement: side }}>
              <PopoverTrigger render={<Button variant="outline" />}>
                {translations[side]}
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader
                  description={translations.description}
                  title={translations.title}
                />
              </PopoverContent>
            </Popover>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {logicalSides.map((side) => (
            <Popover
              key={side}
              positioning={{ placement: logicalPlacement[side] }}
            >
              <PopoverTrigger render={<Button variant="outline" />}>
                {translations[side]}
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader
                  description={translations.description}
                  title={translations.title}
                />
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </LocaleProvider>
  </div>
);

export default PopoverRtl;
