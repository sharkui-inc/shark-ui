import React from "react";
import { LocaleProvider } from "@/registry/react/components/locale";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { Separator } from "@/registry/react/components/separator";

const tags = Array.from(
  { length: 50 },
  (_, i) => `v1.2.0-beta.${50 - i}`
);

const ScrollAreaRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 font-medium text-sm leading-none">العلامات</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </LocaleProvider>
  </div>
);

export default ScrollAreaRtl;
