import { Button } from "@/registry/react/components/button";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

const translations = {
  bottom: "أسفل",
  content: "إضافة إلى المكتبة",
  "inline-end": "نهاية السطر",
  "inline-start": "بداية السطر",
  left: "يسار",
  right: "يمين",
  top: "أعلى",
} as const;

const logicalPlacement: Record<string, "left" | "right"> = {
  "inline-end": "left",
  "inline-start": "right",
};

const TooltipRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="grid gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {physicalSides.map((side) => (
            <Tooltip key={side} positioning={{ placement: side }}>
              <TooltipTrigger asChild>
                <Button variant="outline">{translations[side]}</Button>
              </TooltipTrigger>
              <TooltipContent>{translations.content}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {logicalSides.map((side) => (
            <Tooltip
              key={side}
              positioning={{ placement: logicalPlacement[side] }}
            >
              <TooltipTrigger asChild>
                <Button variant="outline">{translations[side]}</Button>
              </TooltipTrigger>
              <TooltipContent>{translations.content}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </LocaleProvider>
  </div>
);

export default TooltipRtl;
