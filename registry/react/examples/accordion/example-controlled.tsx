"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const Example = () => {
  const [value, setValue] = React.useState(["item-1"]);

  return (
    <div className="w-full max-w-lg">
      <Accordion
        onValueChange={({ value: nextValue }) => setValue(nextValue)}
        value={value}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="text-center text-muted-foreground text-sm">{value}</div>
    </div>
  );
};

export default Example;
