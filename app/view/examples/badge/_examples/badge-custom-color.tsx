import { Badge } from "@/registry/react/components/badge";

const BadgeCustomColor = () => (
  <div className="flex flex-wrap gap-2">
    <Badge className="border-blue-500/24 bg-blue-500/8 text-blue-500">
      Blue
    </Badge>
    <Badge className="border-green-500/24 bg-green-500/8 text-green-500">
      Green
    </Badge>
    <Badge className="border-sky-500/24 bg-sky-500/8 text-sky-500">Sky</Badge>
    <Badge className="border-purple-500/24 bg-purple-500/8 text-purple-500">
      Purple
    </Badge>
    <Badge className="border-red-500/24 bg-red-500/8 text-red-500">Red</Badge>
  </div>
);

export default BadgeCustomColor;
