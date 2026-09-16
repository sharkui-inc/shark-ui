"use client";

import { useState } from "react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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

const deliveryTimes = [
  {
    badge: "Fastest",
    description: "25–35 min · Driver assigned now",
    id: "drawer-demo-asap",
    label: "Standard delivery",
    value: "asap",
  },
  {
    description: "Prep starts at 4:45 PM",
    id: "drawer-demo-5-00",
    label: "5:00 PM – 5:15 PM",
    value: "5-00",
  },
  {
    description: "Good if you're heading home",
    id: "drawer-demo-5-30",
    label: "5:30 PM – 5:45 PM",
    value: "5-30",
  },
  {
    description: "Most popular · High demand",
    id: "drawer-demo-6-00",
    label: "6:00 PM – 6:15 PM",
    value: "6-00",
  },
  {
    description: "Last slot before kitchen closes",
    id: "drawer-demo-6-30",
    label: "6:30 PM – 6:45 PM",
    value: "6-30",
  },
];

const DrawerDemo = () => {
  const [open, setOpen] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState("asap");

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Pick a delivery time</DrawerTitle>
          <DrawerDescription>
            We&apos;ll prepare your order as soon as possible.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-4">
          <RadioGroup
            className="gap-2"
            onValueChange={setDeliveryTime}
            value={deliveryTime}
          >
            {deliveryTimes.map((time) => (
              <FieldLabel htmlFor={time.id} key={time.value}>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle className="flex items-center gap-2">
                      {time.label}
                      {time.badge ? (
                        <Badge variant="secondary">{time.badge}</Badge>
                      ) : null}
                    </FieldTitle>
                    <FieldDescription>{time.description}</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem id={time.id} value={time.value} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </div>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)}>Confirm Delivery Time</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDemo;
