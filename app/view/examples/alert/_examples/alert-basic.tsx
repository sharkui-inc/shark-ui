import { CheckCircle2Icon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertBasic = () => (
  <Alert className="max-w-md">
    <CheckCircle2Icon aria-hidden="true" />
    <AlertTitle>Account updated successfully</AlertTitle>
    <AlertDescription>
      Your profile information has been saved. Changes will be reflected
      immediately.
    </AlertDescription>
  </Alert>
);

export default AlertBasic;
