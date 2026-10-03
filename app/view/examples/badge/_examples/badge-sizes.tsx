import { Badge } from "@/registry/react/components/badge";

const BadgeSizes = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge size="sm">Small</Badge>
    <Badge size="md">Medium</Badge>
    <Badge size="lg">Large</Badge>
  </div>
);

export default BadgeSizes;
