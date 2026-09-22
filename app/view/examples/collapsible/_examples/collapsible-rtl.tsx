"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const CollapsibleRtl = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex w-full justify-center">
      <Collapsible
        className="flex w-full max-w-80 flex-col gap-2"
        onOpenChange={({ open }) => setIsOpen(open)}
        open={isOpen}
      >
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="font-semibold text-sm">الطلب #4189</h4>
          <CollapsibleTrigger asChild>
            <Button size="icon-md" variant="ghost">
              <ChevronsUpDownIcon aria-hidden />
              <span className="sr-only">Toggle details</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
          <span className="text-muted-foreground">الحالة</span>
          <span className="font-medium">تم الشحن</span>
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="rounded-md border px-4 py-2 text-sm">
            <p className="font-medium">عنوان الشحن</p>
            <p className="text-muted-foreground">
              100 Market St, San Francisco
            </p>
          </div>
          <div className="rounded-md border px-4 py-2 text-sm">
            <p className="font-medium">العناصر</p>
            <p className="text-muted-foreground">2x سماعات الاستوديو</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleRtl;
