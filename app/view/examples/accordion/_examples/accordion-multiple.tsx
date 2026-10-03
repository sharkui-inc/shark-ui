import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const AccordionMultiple = () => (
  <Accordion className="mx-auto w-full max-w-4xl" multiple>
    <AccordionItem value="authentication">
      <AccordionTrigger>
        What are the key considerations when implementing a comprehensive
        enterprise-level authentication system?
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Start with strong identity verification, granular authorization, secure
        session management, audit trails, and a recovery path that works for
        both people and administrators.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="consistency">
      <AccordionTrigger>
        How does modern distributed system architecture handle eventual
        consistency and data synchronization across multiple regions?
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        Systems coordinate replicated data with clear ownership, durable events,
        idempotent writes, and observability that makes lag and reconciliation
        visible.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionMultiple;
