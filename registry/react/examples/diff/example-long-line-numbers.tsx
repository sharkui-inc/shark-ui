import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="max-w-lg">
    <DiffHeader title="src/lib/format-response.ts">
      <DiffStats added={2} removed={1} />
    </DiffHeader>
    <DiffContent>
      <DiffLine line={1023} type="context">
        {"export function formatResponse(payload: ApiResponse) {"}
      </DiffLine>
      <DiffLine line={1024} type="delete">
        {"  return JSON.stringify(payload);"}
      </DiffLine>
      <DiffLine line={1024} type="add">
        {"  return JSON.stringify(payload, null, 2);"}
      </DiffLine>
      <DiffLine line={1025} type="add">
        {"  // Preserve a stable, readable response for the CLI output."}
      </DiffLine>
      <DiffLine line={1026} type="context">
        {"}"}
      </DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
