"use client";

import { useState } from "react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import { Progress } from "@/registry/react/components/progress";
import { SettingsTextField } from "./settings-fields";

export const SettingsBillingPage = ({ onSave }: { onSave: () => void }) => {
  const [billingEmail, setBillingEmail] = useState("billing@onda.io");

  return (
    <FieldGroup className="max-w-xl">
      <FieldSet>
        <FieldLegend>Billing</FieldLegend>
        <FieldDescription>
          Plan usage and billing details for your workspace.
        </FieldDescription>
        <Card className="[--space:--spacing(4)]">
          <CardHeader description="Renews on July 24, 2026" title="Growth plan">
            <CardAction>
              <Badge variant="secondary">Active</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex justify-between gap-3 text-sm">
              <span>Seats</span>
              <span className="text-muted-foreground">8 of 12 used</span>
            </div>
            <Progress value={67} />
          </CardContent>
        </Card>
        <SettingsTextField
          description="Invoices and payment confirmations are sent here."
          label="Billing email"
          onChange={(value) => {
            setBillingEmail(value);
            onSave();
          }}
          type="email"
          value={billingEmail}
        />
        <Button onClick={onSave} variant="outline">
          Manage plan
        </Button>
      </FieldSet>
    </FieldGroup>
  );
};
