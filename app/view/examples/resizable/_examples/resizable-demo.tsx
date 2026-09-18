import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const ResizableDemo = () => (
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
      <span className="font-semibold">One</span>
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
          <span className="font-semibold">Two</span>
        </ResizablePanel>

        <ResizableResizeTrigger id="3:4" withHandle />

        <ResizablePanel
          className="flex h-full items-center justify-center p-6"
          id="4"
        >
          <span className="font-semibold">Three</span>
        </ResizablePanel>
      </Resizable>
    </ResizablePanel>
  </Resizable>
);

export default ResizableDemo;
