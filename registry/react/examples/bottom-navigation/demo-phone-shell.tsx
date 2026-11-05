import type React from "react";
import { cn } from "@/lib/utils";

interface DemoPhoneShellProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export const DemoPhoneShell = (props: DemoPhoneShellProps) => {
  const { className, children } = props;

  return (
    <div
      className={cn(
        "relative h-144 w-full max-w-[20rem] overflow-hidden",
        "bg-background border-border rounded-4xl border shadow-lg/4",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center pt-2.5"
      >
        <div className="h-4.5 w-22 rounded-full bg-black" />
      </div>
      {children}
    </div>
  );
};
