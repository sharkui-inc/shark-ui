"use client";

import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
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
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";
import { useIsMobile } from "@/registry/react/hooks/use-is-mobile";

const Example = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader
            description="Make changes to your project settings."
            title="Edit project"
          />
          <DrawerBody className="text-start">
            <div className="mx-auto w-full max-w-xs">
              <ProjectFields />
            </div>
          </DrawerBody>
          <DrawerFooter>
            <div className="mx-auto flex w-full max-w-xs flex-col gap-2">
              <DrawerClose asChild>
                <Button className="w-full">Save</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button className="w-full" variant="outline">
                  Cancel
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader
          description="Make changes to your project settings."
          title="Edit project"
        />
        <DialogBody>
          <ProjectFields />
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Save</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ProjectFields = () => (
  <FieldSet>
    <FieldGroup>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <Input placeholder="My Project" />
      </Field>
      <Field>
        <FieldLabel>Main branch</FieldLabel>
        <NativeSelect>
          <NativeSelectOption value="main">main</NativeSelectOption>
          <NativeSelectOption value="develop">develop</NativeSelectOption>
          <NativeSelectOption value="feature/123">
            feature/123
          </NativeSelectOption>
          <NativeSelectOption value="release/1.0.0">
            release/1.0.0
          </NativeSelectOption>
        </NativeSelect>
      </Field>
    </FieldGroup>
  </FieldSet>
);

export default Example;
