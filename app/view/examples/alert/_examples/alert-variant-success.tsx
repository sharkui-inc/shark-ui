import { CheckCircleIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertVariantSuccess = () => (
  <Alert className="max-w-md" variant="success">
    <CheckCircleIcon aria-hidden />
    <AlertTitle>Payment successful</AlertTitle>
    <AlertDescription>
      Your payment has been processed successfully. You will receive a receipt
      in your email.
    </AlertDescription>
  </Alert>
);

export default AlertVariantSuccess;
