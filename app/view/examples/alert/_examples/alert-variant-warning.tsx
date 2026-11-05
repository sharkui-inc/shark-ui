import { AlertTriangleIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertVariantWarning = () => (
  <Alert className="max-w-md" variant="warning">
    <AlertTriangleIcon aria-hidden="true" />
    <AlertTitle>Storage almost full</AlertTitle>
    <AlertDescription>
      Your storage is almost full. Consider upgrading your plan to avoid losing
      data.
    </AlertDescription>
  </Alert>
);

export default AlertVariantWarning;
