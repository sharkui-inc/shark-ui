import { InfoIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

export const AlertExample = (props: React.ComponentProps<"div">) => (
  <Alert {...props}>
    <InfoIcon />
    <AlertTitle>Tokens update live</AlertTitle>
    <AlertDescription>
      Primary, gray, and radius in the footer apply to every preview on this
      page.
    </AlertDescription>
  </Alert>
);
