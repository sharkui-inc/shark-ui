import { Badge } from "@/registry/react/components/badge";

const BadgeBasic = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);

export default BadgeBasic;
