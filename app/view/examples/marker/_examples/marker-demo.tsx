import { CircleCheckIcon, GitBranchIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";
import { Spinner } from "@/registry/react/components/spinner";

const MarkerDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-12">
    <Marker>
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to a new branch</MarkerContent>
    </Marker>
    <Marker role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent className="shimmer">
        Loading earlier messages
      </MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Conversation compacted</MarkerContent>
    </Marker>
    <Marker>
      <MarkerIcon>
        <CircleCheckIcon />
      </MarkerIcon>
      <MarkerContent>New messages</MarkerContent>
    </Marker>
  </div>
);

export default MarkerDemo;
