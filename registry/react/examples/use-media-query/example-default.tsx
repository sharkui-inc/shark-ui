"use client";

import { MonitorIcon, SmartphoneIcon } from "lucide-react";
import { useMediaQuery } from "@/registry/react/hooks/use-media-query";

const UseMediaQueryDemo = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-xl border bg-muted/48 [&_svg]:size-4 [&_svg]:text-muted-foreground">
        {isMobile ? (
          <SmartphoneIcon aria-hidden />
        ) : (
          <MonitorIcon aria-hidden />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-sm">
          {isMobile ? "Mobile layout" : "Desktop layout"}
        </p>
        <p className="text-muted-foreground text-xs">
          Narrow or widen the window to see it change
        </p>
      </div>
    </div>
  );
};

export default UseMediaQueryDemo;
