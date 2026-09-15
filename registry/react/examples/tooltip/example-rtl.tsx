"use client";

import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <ButtonGroup>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button clickEffect={false} size="icon-md" variant="outline">
            <BoldIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{values.bold}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button clickEffect={false} size="icon-md" variant="outline">
            <ItalicIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{values.italic}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button clickEffect={false} size="icon-md" variant="outline">
            <UnderlineIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{values.underline}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button clickEffect={false} size="icon-md" variant="outline">
            <StrikethroughIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{values.strikethrough}</TooltipContent>
      </Tooltip>
    </ButtonGroup>
  );
};

const translations = {
  ar: {
    values: {
      bold: "عريض",
      italic: "مائل",
      strikethrough: "يتوسطه خط",
      underline: "تسطير",
    },
  },
  en: {
    values: {
      bold: "Bold",
      italic: "Italic",
      strikethrough: "Strikethrough",
      underline: "Underline",
    },
  },
  he: {
    values: {
      bold: "מודגש",
      italic: "נטוי",
      strikethrough: "חוצה",
      underline: "קו תחתון",
    },
  },
};

export default Example;
