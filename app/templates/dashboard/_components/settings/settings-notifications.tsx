"use client";

import React from "react";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import { SettingsSwitchField } from "./settings-fields";

export const SettingsNotificationsPage = () => {
  const [weeklySummary, setWeeklySummary] = React.useState(true);
  const [customerAlerts, setCustomerAlerts] = React.useState(true);
  const [securityAlerts, setSecurityAlerts] = React.useState(true);

  return (
    <FieldGroup className="max-w-xl">
      <FieldSet>
        <FieldLegend>Notifications</FieldLegend>
        <FieldDescription>
          Keep the right people informed without adding noise.
        </FieldDescription>
        <SettingsSwitchField
          checked={weeklySummary}
          description="A concise snapshot every Monday morning."
          label="Weekly performance summary"
          onCheckedChange={(checked) => setWeeklySummary(checked)}
        />
        <SettingsSwitchField
          checked={customerAlerts}
          description="Receive an alert when a customer joins."
          label="New customer alerts"
          onCheckedChange={(checked) => setCustomerAlerts(checked)}
        />
        <SettingsSwitchField
          checked={securityAlerts}
          description="Always notify workspace owners about new sign-ins."
          label="Security alerts"
          onCheckedChange={(checked) => setSecurityAlerts(checked)}
        />
      </FieldSet>
    </FieldGroup>
  );
};
