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
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

type SwipeDirection = "down" | "up" | "start" | "end";

const NestedDrawer = (props: {
  label: string;
  swipeDirection?: SwipeDirection;
}) => {
  const { label, swipeDirection } = props;
  const isSide = swipeDirection === "start" || swipeDirection === "end";
  const memberDetails = (
    <div className="grid gap-4">
      <div className="grid gap-1">
        <p className="text-muted-foreground text-sm">Name</p>
        <p className="font-medium text-sm">Vinicius Vicentini</p>
      </div>
      <div className="grid gap-1">
        <p className="text-muted-foreground text-sm">Email</p>
        <p className="font-medium text-sm">vinihvc@example.com</p>
      </div>
    </div>
  );
  const editFields = (
    <FieldGroup>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input defaultValue="Vinicius Vicentini" />
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input defaultValue="vinihvc@example.com" />
      </Field>
    </FieldGroup>
  );
  const editActions = (
    <>
      <Button className="w-full" type="submit">
        Save changes
      </Button>
      <DrawerClose asChild>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
      </DrawerClose>
    </>
  );
  const nestedDrawer = (
    <Drawer swipeDirection={swipeDirection}>
      <DrawerTrigger asChild>
        <Button className="w-full" variant="outline">
          Edit details
        </Button>
      </DrawerTrigger>
      <DrawerContent variant={isSide ? "inset" : "default"}>
        <DrawerHeader
          description="Make changes to the member's information."
          title={`${label} · Edit details`}
        />
        <DrawerBody className="text-start">
          {isSide ? (
            editFields
          ) : (
            <div className="mx-auto w-full max-w-xs">{editFields}</div>
          )}
        </DrawerBody>
        <DrawerFooter className={isSide ? "sm:flex-col" : undefined}>
          {isSide ? (
            <div className="flex flex-col gap-2">{editActions}</div>
          ) : (
            <div className="mx-auto flex w-full max-w-xs flex-col gap-2">
              {editActions}
            </div>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Drawer swipeDirection={swipeDirection}>
      <DrawerTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DrawerTrigger>
      <DrawerContent variant={isSide ? "inset" : "default"}>
        <DrawerHeader
          description="View and manage a user in your team."
          title={`${label} · Manage team member`}
        />
        <DrawerBody className="text-start">
          {isSide ? (
            memberDetails
          ) : (
            <div className="mx-auto w-full max-w-xs">{memberDetails}</div>
          )}
        </DrawerBody>
        <DrawerFooter className={isSide ? "sm:flex-col" : undefined}>
          {isSide ? (
            nestedDrawer
          ) : (
            <div className="mx-auto w-full max-w-xs">{nestedDrawer}</div>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <NestedDrawer label="Bottom" />
    <NestedDrawer label="Top" swipeDirection="up" />
    <NestedDrawer label="Left" swipeDirection="start" />
    <NestedDrawer label="Right" swipeDirection="end" />
  </div>
);

export default Example;
