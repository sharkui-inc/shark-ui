"use client";

import { useState } from "react";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import { SettingsTextField } from "./settings-fields";

export const SettingsGeneralPage = ({ onSave }: { onSave: () => void }) => {
  const [workspaceName, setWorkspaceName] = useState("Onda");
  const [workspaceUrl, setWorkspaceUrl] = useState("onda");

  return (
    <FieldGroup className="max-w-xl">
      <FieldSet>
        <FieldLegend>General</FieldLegend>
        <FieldDescription>
          The details your team sees across Onda.
        </FieldDescription>
        <SettingsTextField
          description="Used in navigation, invitations, and reports."
          label="Workspace name"
          onChange={(value) => {
            setWorkspaceName(value);
            onSave();
          }}
          value={workspaceName}
        />
        <SettingsTextField
          description={`onda.shark-ui.com/${workspaceUrl}`}
          label="Workspace URL"
          onChange={(value) => {
            setWorkspaceUrl(value);
            onSave();
          }}
          value={workspaceUrl}
        />
      </FieldSet>
    </FieldGroup>
  );
};
