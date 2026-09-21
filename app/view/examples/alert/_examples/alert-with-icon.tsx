import { RocketIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertWithIcon = () => (
  <Alert className="max-w-md">
    <RocketIcon aria-hidden="true" />
    <AlertTitle>New Feature Available</AlertTitle>
    <AlertDescription>
      Icons can be added to alerts to provide visual context and improve user
      experience.
    </AlertDescription>
  </Alert>
);

export default AlertWithIcon;
