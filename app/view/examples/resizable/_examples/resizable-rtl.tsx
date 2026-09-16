"use client";

import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const t = {
  one: "واحد",
  three: "ثلاثة",
  two: "اثنان",
};

const ResizableRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Resizable
        className="max-w-sm rounded-lg border"
        defaultSize={[50, 50]}
        panels={[
          { id: "1", minSize: 10 },
          { id: "2", minSize: 10 },
        ]}
      >
        <ResizablePanel
          className="flex h-[200px] items-center justify-center p-6"
          id="1"
        >
          <span className="font-semibold">{t.one}</span>
        </ResizablePanel>

        <ResizableResizeTrigger id="1:2" withHandle />

        <ResizablePanel id="2">
          <Resizable
            defaultSize={[25, 75]}
            orientation="vertical"
            panels={[
              { id: "3", minSize: 10 },
              { id: "4", minSize: 10 },
            ]}
          >
            <ResizablePanel
              className="flex h-full items-center justify-center p-6"
              id="3"
            >
              <span className="font-semibold">{t.two}</span>
            </ResizablePanel>

            <ResizableResizeTrigger id="3:4" withHandle />

            <ResizablePanel
              className="flex h-full items-center justify-center p-6"
              id="4"
            >
              <span className="font-semibold">{t.three}</span>
            </ResizablePanel>
          </Resizable>
        </ResizablePanel>
      </Resizable>
    </LocaleProvider>
  </div>
);

export default ResizableRtl;
