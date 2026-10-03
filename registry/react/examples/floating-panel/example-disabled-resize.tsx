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
  <FloatingPanel defaultSize={{ height: 280, width: 360 }} resizable={false}>
    <FloatingPanelTrigger asChild>
      <Button variant="outline">Open</Button>
    </FloatingPanelTrigger>
    <FloatingPanelContent resizable={false}>
      <FloatingPanelHeader>
        <Settings2Icon />
        <FloatingPanelTitle>Fixed size</FloatingPanelTitle>
        <FloatingPanelControl>
          <FloatingPanelCloseTrigger asChild>
            <Button aria-label="Close" size="icon-sm">
              <XIcon aria-hidden />
            </Button>
          </FloatingPanelCloseTrigger>
        </FloatingPanelControl>
      </FloatingPanelHeader>
      <FloatingPanelBody className="text-muted-foreground text-sm">
        <p>This panel can be dragged, but not resized.</p>
      </FloatingPanelBody>
    </FloatingPanelContent>
  </FloatingPanel>
);

export default Example;
