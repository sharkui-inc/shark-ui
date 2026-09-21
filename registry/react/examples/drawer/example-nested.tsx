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

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="View and manage a user in your team."
        title="Manage team member"
      />
      <DrawerBody className="text-start">
        <div className="mx-auto grid w-full max-w-xs gap-4">
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Name</p>
            <p className="font-medium text-sm">Vinicius Vicentini</p>
          </div>
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Email</p>
            <p className="font-medium text-sm">vinihvc@example.com</p>
          </div>
        </div>
      </DrawerBody>
      <DrawerFooter>
        <div className="mx-auto w-full max-w-xs">
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="w-full" variant="outline">
                Edit details
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader
                description="Make changes to the member's information."
                title="Edit details"
              />
              <DrawerBody className="text-start">
                <div className="mx-auto w-full max-w-xs">
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
                </div>
              </DrawerBody>
              <DrawerFooter>
                <div className="mx-auto flex w-full max-w-xs flex-col-reverse gap-2">
                  <DrawerClose asChild>
                    <Button className="w-full" variant="outline">
                      Cancel
                    </Button>
                  </DrawerClose>
                  <Button className="w-full" type="submit">
                    Save changes
                  </Button>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
