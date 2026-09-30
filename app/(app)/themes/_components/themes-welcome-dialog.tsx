"use client";

import React from "react";
import { SharkIcon } from "@/components/icons/shark";
import { getPrimaryFillCss, PRIMARY_COLORS } from "@/lib/theme/catalog";
import { useThemeCustomization } from "@/lib/theme/provider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/registry/react/components/alert-dialog";

const STORAGE_KEY = "shark-ui:themes-welcome-dismissed";

export const ThemesWelcomeDialog = () => {
  const [open, setOpen] = React.useState(false);
  const { config } = useThemeCustomization();

  React.useEffect(() => {
    try {
      setOpen(window.localStorage.getItem(STORAGE_KEY) !== "true");
    } catch {
      setOpen(true);
    }
  }, []);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);

    if (details.open) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Storage can throw when it is blocked.
    }
  };

  return (
    <AlertDialog
      closeOnEscape={false}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <AlertDialogContent size="sm">
        <div
          aria-hidden="true"
          className="relative flex min-h-44 items-center justify-center overflow-hidden border-b bg-muted text-foreground"
        >
          <div className="absolute inset-[-50%] flex rotate-45 items-center justify-center gap-1 opacity-32">
            {PRIMARY_COLORS.map((color) => (
              <span
                className="h-[220%] w-6 flex-none"
                key={color.value}
                style={{
                  backgroundColor: getPrimaryFillCss(
                    color.value,
                    config.primaryTone
                  ),
                }}
              />
            ))}
          </div>
          <SharkIcon className="relative size-12 drop-shadow-xs" />
        </div>

        <AlertDialogHeader>
          <AlertDialogTitle>Adapt the theme to your brand</AlertDialogTitle>
          <AlertDialogDescription>
            Change colors, fonts, corner radius, and primary tone, using a token
            system that keeps every component consistent. See each change across
            the site.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogAction className="w-full" size="lg">
            Get Started
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
