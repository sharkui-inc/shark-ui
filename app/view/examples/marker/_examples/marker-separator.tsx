import { Marker, MarkerContent } from "@/registry/react/components/marker";

const MarkerSeparator = () => (
  <div className="flex w-full max-w-sm flex-col gap-8 py-12">
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Conversation compacted</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>New messages</MarkerContent>
    </Marker>
  </div>
);

export default MarkerSeparator;
