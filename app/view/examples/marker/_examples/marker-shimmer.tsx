import { Marker, MarkerContent } from "@/registry/react/components/marker";

const MarkerShimmer = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-12">
    <Marker role="status">
      <MarkerContent className="shimmer">Thinking...</MarkerContent>
    </Marker>
    <Marker role="status" variant="separator">
      <MarkerContent className="shimmer">Reading 4 files</MarkerContent>
    </Marker>
  </div>
);

export default MarkerShimmer;
