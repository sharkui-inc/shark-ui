import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="max-w-lg">
    <DiffHeader title="src/auth.ts">
      <DiffStats added={4} removed={1} />
    </DiffHeader>
    <DiffContent>
      <DiffLine line={12} type="context">
        {"export function getToken() {"}
      </DiffLine>
      <DiffLine line={13} type="delete">
        {"  return localStorage.token;"}
      </DiffLine>
      <DiffLine line={13} type="add">
        {'  const t = cookies.get("session");'}
      </DiffLine>
      <DiffLine line={14} type="add">
        {'  if (!t) throw new Error("no session");'}
      </DiffLine>
      <DiffLine line={15} type="add">
        {"  return t;"}
      </DiffLine>
      <DiffLine line={16} type="context">
        {"}"}
      </DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
