"use client";

import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { Textarea } from "@/registry/react/components/textarea";

export const FaqExample = (props: React.ComponentProps<"div">) => {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  return (
    <Card {...props}>
      <CardHeader
        description="Install, theme, and compose Shark primitives."
        title="FAQ"
      />
      <CardContent>
        <Accordion defaultValue={["item-0"]}>
          {questions.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
      <CardFooter>
        <Dialog
          onOpenChange={({ open: openNext }) => setOpen(openNext)}
          open={open}
        >
          <DialogTrigger asChild>
            <Button className="w-full" variant="outline">
              Contact support
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form
              className="contents"
              onSubmit={async (event) => {
                event.preventDefault();
                setIsSending(true);
                await new Promise((resolve) => {
                  window.setTimeout(resolve, 600);
                });
                setIsSending(false);
                setOpen(false);
                toast.success({
                  description: "We’ll reply to the address you entered.",
                  title: "Message sent",
                });
              }}
            >
              <DialogHeader
                description="This preview does not open a real ticket."
                title="Contact support"
              />
              <DialogBody>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      type="email"
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea
                      placeholder="How can we help?"
                      required
                      rows={4}
                    />
                  </Field>
                </FieldGroup>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button isLoading={isSending} type="submit">
                  Send
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const questions = [
  {
    a: "Run npx shadcn@latest add @shark/button. The CLI copies the source into your project.",
    q: "How do I install a component?",
  },
  {
    a: "Open Themes and change the primary hue, gray scale, and radius. Tokens update live.",
    q: "Can I preview a custom theme?",
  },
  {
    a: "Yes. Compose Ark parts with asChild and semantic Tailwind tokens. Nothing is locked to this site.",
    q: "Do examples work in my app?",
  },
];
