"use client";

import React from "react";
import { useMediaQuery } from "@/registry/react/hooks/use-media-query";

const LG_MEDIA = "(min-width: 1024px)";

export const useOptimisticTab = (initialTab: string) => {
  const [tab, setTab] = React.useState(initialTab);
  const [optimisticTab, setOptimisticTab] = React.useOptimistic(tab);

  const onValueChange = (details: { value: string }) => {
    React.startTransition(() => {
      setOptimisticTab(details.value);
      setTab(details.value);
    });
  };

  return { onValueChange, optimisticTab, tab };
};

export const useResponsiveTab = (initialTab: string) => {
  const isLg = useMediaQuery(LG_MEDIA);
  const tab = useOptimisticTab(initialTab);

  return {
    ...tab,
    visibleTab: isLg ? tab.optimisticTab : initialTab,
  };
};
