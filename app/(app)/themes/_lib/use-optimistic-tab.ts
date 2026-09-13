"use client";

import React from "react";

const LG_MEDIA = "(min-width: 1024px)";

const useIsLg = () => {
  const [isLg, setIsLg] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(LG_MEDIA);
    const onChange = () => {
      setIsLg(mediaQuery.matches);
    };

    onChange();
    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return isLg;
};

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
  const isLg = useIsLg();
  const tab = useOptimisticTab(initialTab);

  return {
    ...tab,
    visibleTab: isLg ? tab.optimisticTab : initialTab,
  };
};
