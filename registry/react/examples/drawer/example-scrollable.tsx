import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">View activity</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="Recent activity from your workspace. Scroll to see every update."
        title="Activity"
      />
      <DrawerBody className="text-start">
        <ul className="flex flex-col gap-3">
          {activities.map((activity) => (
            <li className="rounded-lg border bg-muted/48 p-4" key={activity}>
              <p className="font-medium text-sm">{activity}</p>
              <p className="mt-1 text-muted-foreground text-sm">
                Updated a few minutes ago
              </p>
            </li>
          ))}
        </ul>
      </DrawerBody>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

const activities = [
  "Published the monthly report",
  "Added a new teammate",
  "Updated the project brief",
  "Completed the design review",
  "Created an onboarding checklist",
  "Moved the launch date",
  "Shared the research notes",
  "Archived the old roadmap",
  "Scheduled the planning session",
  "Resolved the final comments",
];

export default Example;
