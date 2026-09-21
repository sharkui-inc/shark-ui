import { Marker, MarkerContent } from "@/registry/react/components/marker";

const MarkerShimmer = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-12">
    <Marker role="status">
      <MarkerContent className="shimmer">
        Loading earlier messages
      </MarkerContent>
    </Marker>
    <Marker role="status" variant="separator">
      <MarkerContent className="shimmer">Syncing the thread</MarkerContent>
    </Marker>
  </div>
);

export default MarkerShimmer;
