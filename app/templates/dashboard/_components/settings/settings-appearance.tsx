"use client";

import { useState } from "react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";
import {
  type AppearanceOption,
  appearanceOptions,
} from "../../_data/dashboard";
import { SettingsSwitchField } from "./settings-fields";

export const SettingsAppearancePage = ({ onSave }: { onSave: () => void }) => {
  const [systemPreference, setSystemPreference] = useState(true);
  const [compactNavigation, setCompactNavigation] = useState(true);
  const [appearance, setAppearance] = useState<AppearanceOption>("System");

  return (
    <FieldGroup className="max-w-xl">
      <FieldSet>
        <FieldLegend>Appearance</FieldLegend>
        <FieldDescription>
          Tune the workspace for the way your team works.
        </FieldDescription>
        <Field>
          <FieldLabel>Color preference</FieldLabel>
          <ToggleGroup
            multiple={false}
            onValueChange={({ value }) => {
              const next = value[0] as AppearanceOption | undefined;

              if (!next) {
                return;
              }

              setAppearance(next);
              onSave();
            }}
            value={[appearance]}
            variant="outline"
          >
            {appearanceOptions.map((option) => (
              <ToggleGroupItem key={option} value={option}>
                {option}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </Field>
        <SettingsSwitchField
          checked={systemPreference}
          description="Automatically adapt when your device changes theme."
          label="Follow system preference"
          onCheckedChange={(checked) => {
            setSystemPreference(checked);
            onSave();
          }}
        />
        <SettingsSwitchField
          checked={compactNavigation}
          description="Use a denser sidebar layout on larger screens."
          label="Compact navigation"
          onCheckedChange={(checked) => {
            setCompactNavigation(checked);
            onSave();
          }}
        />
      </FieldSet>
    </FieldGroup>
  );
};
