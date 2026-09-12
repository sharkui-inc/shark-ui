"use client";

import { Kbd } from "@registry/react/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@registry/react/components/tooltip";
import { CodeIcon, RotateCcwIcon, ShuffleIcon } from "lucide-react";
import { useId } from "react";
import { CopyThemeCodeDialog } from "@/components/dialog/copy-theme";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";
import { DialogTrigger } from "@/registry/react/components/dialog";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { useHotkey } from "@/registry/react/components/hotkeys";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { ThemeSelectorBase } from "./theme-selector.base";
import { ThemeSelectorFont } from "./theme-selector.font";
import { ThemeSelectorPreset } from "./theme-selector.preset";
import { ThemeSelectorPrimary } from "./theme-selector.primary";
import { ThemeSelectorPrimaryTone } from "./theme-selector.primary-tone";
import { ThemeSelectorRadius } from "./theme-selector.radius";

export const ThemeSelector = (props: React.ComponentProps<"fieldset">) => {
  const { className, ...rest } = props;
  const { isDefault, randomize, reset } = useThemeCustomization();
  const viewCodeTriggerId = useId();

  useHotkey({
    action: randomize,
    hotkey: "r",
    options: { preventDefault: true },
  });

  return (
    <fieldset className={cn("min-w-0 border-0", className)} {...rest}>
      <legend className="sr-only">Theme settings</legend>
      <div className="@container">
        <ScrollArea
          className={cn(
            "h-auto",
            "@[600px]:overflow-visible!",
            "@[600px]:**:data-[slot=scroll-area-viewport]:overflow-visible!",
            "@[600px]:**:data-[slot=scroll-area-scrollbar]:hidden"
          )}
          orientation="horizontal"
          scrollFade
        >
          <div className="flex @[600px]:w-full w-max min-w-full @[600px]:flex-wrap items-end @[600px]:justify-center gap-3">
            <div className="w-36 shrink-0">
              <ThemeSelectorPreset />
            </div>
            <div className="w-36 shrink-0">
              <ThemeSelectorBase />
            </div>
            <div className="w-36 shrink-0">
              <ThemeSelectorPrimary />
            </div>
            <div className="w-36 shrink-0">
              <ThemeSelectorFont slot="sans" />
            </div>
            <div className="w-36 shrink-0">
              <ThemeSelectorFont slot="heading" />
            </div>
            <div className="shrink-0">
              <ThemeSelectorPrimaryTone />
            </div>
            <div className="w-36 shrink-0">
              <ThemeSelectorRadius />
            </div>
            <Field className="w-fit shrink-0 *:w-auto">
              <FieldLabel>Actions</FieldLabel>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={randomize}
                      size="icon-md"
                      variant="outline"
                    >
                      <ShuffleIcon aria-hidden />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Randomize <Kbd>R</Kbd>
                  </TooltipContent>
                </Tooltip>

                <AlertDialog>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <AlertDialogTrigger asChild>
                        <Button
                          aria-label="Reset theme"
                          disabled={isDefault ? true : undefined}
                          size="icon-md"
                          variant="outline"
                        >
                          <RotateCcwIcon aria-hidden />
                        </Button>
                      </AlertDialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>Reset theme</TooltipContent>
                  </Tooltip>

                  <AlertDialogContent>
                    <AlertDialogHeader
                      description="This will restore colors, radius, fonts, and locks to their default values."
                      title="Reset theme to default?"
                    />
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogClose asChild>
                        <AlertDialogAction onClick={reset}>
                          Reset theme
                        </AlertDialogAction>
                      </AlertDialogClose>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <CopyThemeCodeDialog ids={{ trigger: viewCodeTriggerId }}>
                  <Tooltip ids={{ trigger: viewCodeTriggerId }}>
                    <TooltipTrigger asChild>
                      <DialogTrigger asChild>
                        <Button size="icon-md">
                          <CodeIcon aria-hidden />
                        </Button>
                      </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>View code</TooltipContent>
                  </Tooltip>
                </CopyThemeCodeDialog>
              </div>
            </Field>
          </div>
        </ScrollArea>
      </div>
    </fieldset>
  );
};
