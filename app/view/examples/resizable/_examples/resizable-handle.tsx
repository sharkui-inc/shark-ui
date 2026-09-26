import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const ResizableHandle = () => (
  <Resizable
    className="min-h-[200px] max-w-sm rounded-lg border"
    defaultSize={[25, 75]}
    panels={[
      { id: "1", minSize: 10 },
      { id: "2", minSize: 10 },
    ]}
  >
    <ResizablePanel
      className="flex h-full items-center justify-center p-6"
      id="1"
    >
      <span className="font-semibold">Sidebar</span>
    </ResizablePanel>

    <ResizableResizeTrigger id="1:2" withHandle />

    <ResizablePanel
      className="flex h-full items-center justify-center p-6"
      id="2"
    >
      <span className="font-semibold">Content</span>
    </ResizablePanel>
  </Resizable>
);

export default ResizableHandle;
