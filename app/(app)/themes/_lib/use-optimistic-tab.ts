"use client";

import { startTransition, useOptimistic, useState } from "react";

export const useOptimisticTab = (initialTab: string) => {
  const [tab, setTab] = useState(initialTab);
  const [optimisticTab, setOptimisticTab] = useOptimistic(tab);

  const onValueChange = (details: { value: string }) => {
    startTransition(() => {
      setOptimisticTab(details.value);
      setTab(details.value);
    });
  };

  return { onValueChange, optimisticTab, tab };
};
