import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";
import { Spinner } from "@/registry/react/components/spinner";

const MarkerStatus = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-12">
    <Marker role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Compacting conversation</MarkerContent>
    </Marker>
    <Marker role="status" variant="separator">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Running tests</MarkerContent>
    </Marker>
  </div>
);

export default MarkerStatus;
