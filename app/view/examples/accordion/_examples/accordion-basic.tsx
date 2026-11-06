import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const AccordionBasic = () => (
  <Accordion className="mx-auto w-full max-w-4xl">
    <AccordionItem value="accessible">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="styled">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Yes. It is styled with semantic tokens that adapt to the active theme.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="animated">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Yes. It uses a contained height animation that respects reduced motion
        preferences.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionBasic;
