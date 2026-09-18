import { Settings2Icon, XIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelHeader,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "@/registry/react/components/floating-panel";

const Example = () => (
  <FloatingPanel
    defaultSize={{ height: 280, width: 360 }}
    maxSize={{ height: 360, width: 480 }}
    minSize={{ height: 240, width: 320 }}
  >
    <FloatingPanelTrigger asChild>
      <Button variant="outline">Open</Button>
    </FloatingPanelTrigger>
    <FloatingPanelContent>
      <FloatingPanelHeader>
        <Settings2Icon />
        <FloatingPanelTitle>Size limits</FloatingPanelTitle>
        <FloatingPanelControl>
          <FloatingPanelCloseTrigger asChild>
            <Button aria-label="Close" size="icon-sm">
              <XIcon aria-hidden />
            </Button>
          </FloatingPanelCloseTrigger>
        </FloatingPanelControl>
      </FloatingPanelHeader>
      <FloatingPanelBody className="text-muted-foreground text-sm">
        <p>Resize between 320px and 480px wide, and 240px and 360px high.</p>
      </FloatingPanelBody>
    </FloatingPanelContent>
  </FloatingPanel>
);

export default Example;
