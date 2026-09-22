import { Button } from "@/registry/react/components/button";
import { Spinner } from "@/registry/react/components/spinner";

const ButtonSpinnerExample = () => (
  <div className="flex gap-2">
    <Button variant="outline">
      <Spinner aria-hidden data-icon="inline-start" />
      Generating
    </Button>
    <Button variant="secondary">
      Downloading
      <Spinner aria-hidden data-icon="inline-end" />
    </Button>
  </div>
);

export default ButtonSpinnerExample;
