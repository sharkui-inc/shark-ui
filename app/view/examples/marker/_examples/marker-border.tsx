import { CircleCheckIcon, GitBranchIcon, ShieldCheckIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const MarkerBorder = () => (
  <div className="flex w-full max-w-sm flex-col gap-3 py-12">
    <Marker variant="border">
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to release-candidate</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerIcon>
        <ShieldCheckIcon />
      </MarkerIcon>
      <MarkerContent>Checks passed</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerIcon>
        <CircleCheckIcon />
      </MarkerIcon>
      <MarkerContent>Conversation compacted</MarkerContent>
    </Marker>
  </div>
);

export default MarkerBorder;
