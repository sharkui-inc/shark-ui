import { CircleCheckIcon, GlobeIcon, StarIcon } from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-4">
    <IconTile aria-hidden="true" fill size="lg">
      <GlobeIcon />
    </IconTile>
    <IconTile aria-hidden="true" fill size="lg" variant="secondary">
      <StarIcon />
    </IconTile>
    <IconTile aria-hidden="true" fill size="lg" variant="outline">
      <CircleCheckIcon />
    </IconTile>
  </div>
);

export default Example;
