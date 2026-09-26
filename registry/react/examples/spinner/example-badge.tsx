import { Badge } from "@/registry/react/components/badge";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge variant="destructive">
      <Spinner data-icon="inline-start" />
      Deleting
    </Badge>
    <Badge variant="outline">
      Generating <Spinner data-icon="inline-end" />
    </Badge>
  </div>
);

export default Example;
