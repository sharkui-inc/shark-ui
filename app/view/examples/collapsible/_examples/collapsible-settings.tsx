"use client";

import { MaximizeIcon, MinimizeIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const CollapsibleSettings = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          className="flex items-start gap-2"
          onOpenChange={({ open }) => setIsOpen(open)}
          open={isOpen}
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel className="sr-only">Radius X</FieldLabel>
              <Input defaultValue="0" placeholder="0" />
            </Field>
            <Field>
              <FieldLabel className="sr-only">Radius Y</FieldLabel>
              <Input defaultValue="0" placeholder="0" />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel className="sr-only">Radius X</FieldLabel>
                <Input defaultValue="0" placeholder="0" />
              </Field>
              <Field>
                <FieldLabel className="sr-only">Radius Y</FieldLabel>
                <Input defaultValue="0" placeholder="0" />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button size="icon-md" variant="outline">
              {isOpen ? (
                <MinimizeIcon aria-hidden />
              ) : (
                <MaximizeIcon aria-hidden />
              )}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default CollapsibleSettings;
