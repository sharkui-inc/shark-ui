import { Badge } from "@/registry/react/components/badge";
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
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

type SwipeDirection = "down" | "up" | "start" | "end";

const NestedDrawer = (props: {
  label: string;
  swipeDirection?: SwipeDirection;
}) => {
  const { label, swipeDirection } = props;
  const isSide = swipeDirection === "start" || swipeDirection === "end";

  if (isSide) {
    return <SideNestedDrawer label={label} swipeDirection={swipeDirection} />;
  }

  return (
    <Drawer swipeDirection={swipeDirection}>
      <DrawerTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader
          description="View and manage a user in your team."
          title={`${label} · Manage team member`}
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
            <Drawer swipeDirection={swipeDirection}>
              <DrawerTrigger asChild>
                <Button className="w-full" variant="outline">
                  Edit details
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader
                  description="Make changes to the member's information."
                  title={`${label} · Edit details`}
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
};

const SideNestedDrawer = (props: {
  label: string;
  swipeDirection: "start" | "end";
}) => {
  const { label, swipeDirection } = props;

  return (
    <Drawer swipeDirection={swipeDirection}>
      <DrawerTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DrawerTrigger>
      <DrawerContent variant="inset">
        <DrawerHeader
          description="We'll prepare your order as soon as possible."
          title="Pick a delivery time"
        />
        <DrawerBody className="text-start">
          <DeliveryOptions />
        </DrawerBody>
        <DrawerFooter className="sm:flex-col">
          <Drawer swipeDirection={swipeDirection}>
            <DrawerTrigger asChild>
              <Button className="w-full" pill variant="outline">
                Edit address
              </Button>
            </DrawerTrigger>
            <DrawerContent variant="inset">
              <DrawerHeader
                description="Where should Onda drop off this order?"
                title={`${label} · Delivery address`}
              />
              <DrawerBody className="text-start">
                <FieldGroup>
                  <Field>
                    <FieldLabel>Street</FieldLabel>
                    <Input defaultValue="1847 Market Street" />
                  </Field>
                  <Field>
                    <FieldLabel>Apartment</FieldLabel>
                    <Input defaultValue="Suite 4B" />
                  </Field>
                </FieldGroup>
              </DrawerBody>
              <DrawerFooter className="sm:flex-col">
                <div className="flex flex-col-reverse gap-2">
                  <DrawerClose asChild>
                    <Button className="w-full" pill variant="outline">
                      Cancel
                    </Button>
                  </DrawerClose>
                  <Button className="w-full" pill type="submit">
                    Save address
                  </Button>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <DrawerClose asChild>
            <Button className="w-full" pill>
              Confirm Delivery Time
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const DeliveryOptions = () => (
  <RadioGroup className="w-full gap-2" defaultValue="standard">
    {deliveryOptions.map((option) => (
      <FieldLabel key={option.value}>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>
              {option.title}
              {option.badge ? (
                <Badge pill size="sm" variant="secondary">
                  {option.badge}
                </Badge>
              ) : null}
            </FieldTitle>
            <FieldDescription>{option.description}</FieldDescription>
          </FieldContent>
          <RadioGroupItem
            className="**:data-[slot=radio-group-item-text]:hidden"
            value={option.value}
          />
        </Field>
      </FieldLabel>
    ))}
  </RadioGroup>
);

const deliveryOptions = [
  {
    badge: "Fastest",
    description: "25-35 min",
    title: "Standard delivery",
    value: "standard",
  },
  {
    description: "Mon, 7:00 PM – 9:00 PM",
    title: "Schedule for later",
    value: "later-1",
  },
  {
    description: "Tue, 9:00 AM – 12:00 PM",
    title: "Schedule for later",
    value: "later-2",
  },
  {
    description: "Tue, 7:00 PM – 9:00 PM",
    title: "Schedule for later",
    value: "later-3",
  },
] as const;

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <NestedDrawer label="Bottom" />
    <NestedDrawer label="Top" swipeDirection="up" />
    <NestedDrawer label="Left" swipeDirection="start" />
    <NestedDrawer label="Right" swipeDirection="end" />
  </div>
);

export default Example;
