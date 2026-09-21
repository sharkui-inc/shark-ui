import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="Bottom" />
        <DrawerBody>
          <div className="mx-auto w-full max-w-xs">
            <p className="text-muted-foreground text-sm">
              This sheet enters from the bottom. Swipe down to close it.
            </p>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer swipeDirection="up">
      <DrawerTrigger asChild>
        <Button variant="outline">Top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="Top" />
        <DrawerBody>
          <div className="mx-auto w-full max-w-xs">
            <p className="text-muted-foreground text-sm">
              This sheet enters from the top. Swipe up to close it.
            </p>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer swipeDirection="start">
      <DrawerTrigger asChild>
        <Button variant="outline">Left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="Left" />
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            This panel enters from the start edge. Swipe toward that edge to
            close it.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer swipeDirection="end">
      <DrawerTrigger asChild>
        <Button variant="outline">Right</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="Right" />
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            This panel enters from the end edge. Swipe toward that edge to close
            it.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </div>
);

export default Example;
