import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const PopoverRtl = () => (
  <div className="grid gap-4">
    <div className="flex flex-wrap justify-center gap-2">
      {physicalSides.map((side) => (
        <Popover key={side} positioning={{ placement: side }}>
          <PopoverTrigger asChild>
            <Button variant="outline">{translations[side]}</Button>
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
        <Popover key={side} positioning={{ placement: logicalPlacement[side] }}>
          <PopoverTrigger asChild>
            <Button variant="outline">{translations[side]}</Button>
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
);

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

export default PopoverRtl;
