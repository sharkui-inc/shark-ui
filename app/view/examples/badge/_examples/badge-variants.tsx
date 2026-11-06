import { Badge } from "@/registry/react/components/badge";

const BadgeVariants = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="destructive">Destructive</Badge>
  </div>
);

export default BadgeVariants;
