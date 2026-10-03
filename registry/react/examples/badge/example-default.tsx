import { StarIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";

const BadgeDemo = () => (
  <Badge>
    <StarIcon data-icon="inline-start" />
    Favorite
  </Badge>
);

export default BadgeDemo;
