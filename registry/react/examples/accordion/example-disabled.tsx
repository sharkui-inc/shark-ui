import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const Example = () => (
  <div className="flex w-full max-w-lg flex-col gap-6">
    <section
      aria-labelledby="item-disabled-title"
      className="flex flex-col gap-2"
    >
      <h3
        className="font-medium text-muted-foreground text-sm"
        id="item-disabled-title"
      >
        Item disabled
      </h3>
      <Accordion defaultValue={["overview"]}>
        <AccordionItem value="overview">
          <AccordionTrigger>Overview</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Product details are available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem disabled value="shipping">
          <AccordionTrigger>Shipping</AccordionTrigger>
          <AccordionContent>Shipping details are unavailable.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section
      aria-labelledby="root-disabled-title"
      className="flex flex-col gap-2"
    >
      <h3
        className="font-medium text-muted-foreground text-sm"
        id="root-disabled-title"
      >
        Root disabled
      </h3>
      <Accordion disabled>
        <AccordionItem value="overview">
          <AccordionTrigger>Overview</AccordionTrigger>
          <AccordionContent>Product details are available.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping">
          <AccordionTrigger>Shipping</AccordionTrigger>
          <AccordionContent>Shipping details are available.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default Example;
