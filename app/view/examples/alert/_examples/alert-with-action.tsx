import { InfoIcon } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";

const AlertWithAction = () => (
  <Alert className="max-w-md">
    <InfoIcon aria-hidden />
    <AlertTitle>Dark mode is now available</AlertTitle>
    <AlertDescription>
      Enable it under your profile settings to get started.
    </AlertDescription>
    <AlertAction>
      <Button size="xs" variant="outline">
        Enable
      </Button>
    </AlertAction>
  </Alert>
);

export default AlertWithAction;
