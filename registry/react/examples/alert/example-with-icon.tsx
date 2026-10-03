import { RocketIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert className="max-w-md">
    <RocketIcon />
    <AlertTitle>New Feature Available</AlertTitle>
    <AlertDescription>
      Icons can be added to alerts to provide visual context and improve user
      experience.
    </AlertDescription>
  </Alert>
);

export default Example;
