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

    if (!details.open) {
      try {
        window.localStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // Keep the page usable when browser storage is unavailable.
      }
    }
  };

  return (
    <AlertDialog
      closeOnEscape={false}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <AlertDialogContent bottomStickOnMobile={false} size="sm">
        <div
          aria-hidden="true"
          className="relative flex min-h-44 items-center justify-center overflow-hidden border-b bg-muted text-foreground"
        >
          <div className="absolute inset-[-50%] flex rotate-45 items-center justify-center gap-1 opacity-32">
            {PRIMARY_COLORS.map((color) => (
              <span
                className="h-[150%] w-6 flex-none"
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
          <SharkIcon className="relative size-12" />
        </div>

        <AlertDialogHeader>
          <AlertDialogTitle>Adapt the theme to your brand</AlertDialogTitle>
          <AlertDialogDescription>
            Change colors, fonts, and corner radius, then preview them across
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
