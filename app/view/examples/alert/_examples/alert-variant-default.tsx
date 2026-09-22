import { CheckCheckIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertVariantDefault = () => (
  <Alert className="max-w-md">
    <CheckCheckIcon aria-hidden />
    <AlertTitle>Deployment successful</AlertTitle>
    <AlertDescription>
      You can now start building your next great project.
    </AlertDescription>
  </Alert>
);

export default AlertVariantDefault;
