import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer defaultSnapPoint={0.5} snapPoints={[0.25, 0.5, 1]}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="Opens at 50%. Drag the grabber to 25%, 50%, or full height."
        title="Snap points"
      />
      <DrawerBody>
        <div className="mx-auto flex w-full max-w-xs flex-col gap-2">
          {steps.map((step) => (
            <div
              className="rounded-lg border bg-muted px-3 py-2 text-start text-sm"
              key={step}
            >
              {step}
            </div>
          ))}
        </div>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const steps = [
  "Inbox",
  "Today",
  "Upcoming",
  "Anytime",
  "Someday",
  "Logbook",
  "Projects",
  "Areas",
  "Archive",
  "Trash",
];

export default Example;
