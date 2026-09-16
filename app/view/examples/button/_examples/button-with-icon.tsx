import { GitBranchIcon, GitForkIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

const ButtonWithIconExample = () => (
  <div className="flex flex-wrap gap-2">
    <Button variant="outline">
      <GitBranchIcon aria-hidden="true" data-icon="inline-start" />
      New Branch
    </Button>
    <Button variant="outline">
      Fork
      <GitForkIcon aria-hidden="true" data-icon="inline-end" />
    </Button>
  </div>
);

export default ButtonWithIconExample;
