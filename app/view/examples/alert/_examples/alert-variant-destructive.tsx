import { AlertCircleIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertVariantDestructive = () => (
  <Alert className="max-w-md" variant="destructive">
    <AlertCircleIcon aria-hidden="true" />
    <AlertTitle>Payment failed</AlertTitle>
    <AlertDescription>
      Your payment could not be processed. Please check your payment method and
      try again.
    </AlertDescription>
  </Alert>
);

export default AlertVariantDestructive;
