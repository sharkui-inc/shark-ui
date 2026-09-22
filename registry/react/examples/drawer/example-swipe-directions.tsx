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
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <DeliveryDrawer swipeDirection="down" trigger="Bottom" />
    <DeliveryDrawer swipeDirection="up" trigger="Top" />
    <DeliveryDrawer swipeDirection="start" trigger="Left" />
    <DeliveryDrawer swipeDirection="end" trigger="Right" />
  </div>
);

const DeliveryDrawer = (props: {
  swipeDirection: "up" | "down" | "start" | "end";
  trigger: string;
}) => {
  const { swipeDirection, trigger } = props;
  const isSide = swipeDirection === "start" || swipeDirection === "end";
  const footerActions = (
    <>
      <DrawerClose asChild>
        <Button className="w-full" pill>
          Confirm Delivery Time
        </Button>
      </DrawerClose>
      <DrawerClose asChild>
        <Button className="w-full" pill variant="outline">
          Cancel
        </Button>
      </DrawerClose>
    </>
  );

  return (
    <Drawer swipeDirection={swipeDirection}>
      <DrawerTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DrawerTrigger>
      <DrawerContent variant={isSide ? "inset" : "default"}>
        <DrawerHeader
          description="We'll prepare your order as soon as possible."
          title="Pick a delivery time"
        />
        <DrawerBody className="text-start">
          {isSide ? (
            <DeliveryOptions />
          ) : (
            <div className="mx-auto w-full max-w-xs">
              <DeliveryOptions />
            </div>
          )}
        </DrawerBody>
        <DrawerFooter className="sm:flex-col">
          {isSide ? (
            footerActions
          ) : (
            <div className="mx-auto flex w-full max-w-xs flex-col gap-2">
              {footerActions}
            </div>
          )}
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
              {"badge" in option ? (
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

export default Example;
