import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";

const AccordionCardDemo = () => (
  <Card className="w-full max-w-md">
    <CardHeader>
      <CardTitle>Product Information</CardTitle>
      <CardDescription>
        Common questions about our products, shipping, and returns.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Accordion defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
);

export default AccordionCardDemo;
