import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const AccordionWithBorders = () => (
  <Accordion className="mx-auto w-full max-w-4xl rounded-xl border px-4">
    <AccordionItem value="install">
      <AccordionTrigger>How do I install the Accordion?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Add the Shark Accordion registry item, then import its parts from your
        local component path.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="multiple-items">
      <AccordionTrigger>Can more than one item stay open?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Yes. Add the multiple prop to the Accordion root when readers should
        compare answers.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="customize">
      <AccordionTrigger>Can I customize the visual treatment?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Yes. Use semantic tokens and layout classes on the exposed parts while
        preserving the accessible trigger and content hierarchy.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionWithBorders;
