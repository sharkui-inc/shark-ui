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
              <FieldLabel className="sr-only" htmlFor="radius-x">
                Radius X
              </FieldLabel>
              <Input defaultValue="0" id="radius-x" placeholder="0" />
            </Field>
            <Field>
              <FieldLabel className="sr-only" htmlFor="radius-y">
                Radius Y
              </FieldLabel>
              <Input defaultValue="0" id="radius-y" placeholder="0" />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel className="sr-only" htmlFor="radius-x-more">
                  Radius X
                </FieldLabel>
                <Input defaultValue="0" id="radius-x-more" placeholder="0" />
              </Field>
              <Field>
                <FieldLabel className="sr-only" htmlFor="radius-y-more">
                  Radius Y
                </FieldLabel>
                <Input defaultValue="0" id="radius-y-more" placeholder="0" />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button size="icon-md" variant="outline">
              {isOpen ? (
                <MinimizeIcon aria-hidden="true" />
              ) : (
                <MaximizeIcon aria-hidden="true" />
              )}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default CollapsibleSettings;
