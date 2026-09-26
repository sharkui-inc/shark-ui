import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <Sources defaultOpen>
      <SourcesTrigger count={2} />
      <SourcesContent>
        <Source href="#" title="React Documentation" />
        <Source href="#" title="Ark UI" />
      </SourcesContent>
    </Sources>
  </div>
);

export default Example;
