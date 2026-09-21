import {
  BookOpenCheckIcon,
  CircleCheckIcon,
  GitBranchIcon,
} from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const MarkerIconExample = () => (
  <div className="flex w-full max-w-sm flex-col gap-12 py-12">
    <Marker>
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to a new branch</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerIcon>
        <CircleCheckIcon />
      </MarkerIcon>
      <MarkerContent>Conversation compacted</MarkerContent>
    </Marker>
    <Marker className="flex-col">
      <MarkerIcon>
        <BookOpenCheckIcon />
      </MarkerIcon>
      <MarkerContent>Syncing completed</MarkerContent>
    </Marker>
  </div>
);

export default MarkerIconExample;
