"use client";

import { InfoIcon, LockIcon, LockOpenIcon } from "lucide-react";
import type { ThemeLockKey } from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { FieldLabel } from "@/registry/react/components/field";
import { Kbd } from "@/registry/react/components/kbd";
import { ListboxLabel } from "@/registry/react/components/listbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

interface ThemeSelectorHeadingProps {
  asListboxLabel?: boolean;
  description?: string;
  hotkey?: string;
  lockKey?: ThemeLockKey;
  title: string;
}

export const ThemeSelectorHeading = (props: ThemeSelectorHeadingProps) => {
  const { asListboxLabel = false, description, hotkey, lockKey, title } = props;

  const { locks, toggleLock } = useThemeCustomization();
  const locked = lockKey ? locks[lockKey] : false;
  const LockGlyph = locked ? LockIcon : LockOpenIcon;

  return (
    <div className="flex items-center gap-0.5">
      {asListboxLabel ? (
        <ListboxLabel>{title}</ListboxLabel>
      ) : (
        <FieldLabel>{title}</FieldLabel>
      )}

      {description ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label={`${title} info`}
              clickEffect={false}
              size="icon-xs"
              variant="ghost"
            >
              <InfoIcon aria-hidden className="text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-56 text-pretty">
            {description}
            {hotkey ? <Kbd>{hotkey}</Kbd> : null}
          </TooltipContent>
        </Tooltip>
      ) : null}

      {lockKey ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              aria-label={locked ? `Unlock ${title}` : `Lock ${title}`}
              aria-pressed={locked}
              className={cn(
                "ms-auto transition-opacity",
                locked
                  ? "opacity-100"
                  : [
                      "opacity-100",
                      "[@media(hover:hover)]:pointer-events-none [@media(hover:hover)]:opacity-0",
                      "[@media(hover:hover)]:group-hover/field:pointer-events-auto [@media(hover:hover)]:group-hover/field:opacity-100",
                      "focus-visible:pointer-events-auto focus-visible:opacity-100",
                    ]
              )}
              clickEffect={false}
              onClick={() => toggleLock(lockKey)}
              size="icon-xs"
              variant="ghost"
            >
              <LockGlyph aria-hidden />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {locked ? "Include when randomizing" : "Skip when randomizing"}
          </TooltipContent>
        </Tooltip>
      ) : null}
    </div>
  );
};
