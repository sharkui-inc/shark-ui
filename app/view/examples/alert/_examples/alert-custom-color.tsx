import { AlertTriangleIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertCustomColor = () => (
  <Alert className="max-w-md border-amber-500/32 bg-amber-500/8 [&_svg]:text-amber-500">
    <AlertTriangleIcon aria-hidden="true" />
    <AlertTitle>Your subscription will expire in 3 days</AlertTitle>
    <AlertDescription>
      Renew now to avoid service interruption or upgrade to a paid plan to
      continue using the service.
    </AlertDescription>
  </Alert>
);

export default AlertCustomColor;
