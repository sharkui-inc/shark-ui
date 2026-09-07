import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";

const Example = () => (
  <div className="flex w-full max-w-lg flex-col gap-2">
    <Diff>
      <DiffHeader title="src/utils/helpers.ts">
        <DiffStats added={1} removed={1} />
      </DiffHeader>
      <DiffContent>
        <DiffLine line={1} type="context">
          {"export function isValidEmail(email: string) {"}
        </DiffLine>
        <DiffLine line={2} type="delete">
          {"  return Boolean(email);"}
        </DiffLine>
        <DiffLine line={2} type="add">
          {"  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);"}
        </DiffLine>
        <DiffLine line={3} type="context">
          {"}"}
        </DiffLine>
      </DiffContent>
    </Diff>
    <Diff>
      <DiffHeader title="src/utils/helpers.test.ts">
        <DiffStats added={1} removed={0} />
      </DiffHeader>
      <DiffContent>
        <DiffLine line={8} type="context">
          {'test("rejects missing at-sign", () => {'}
        </DiffLine>
        <DiffLine line={9} type="add">
          {'  expect(isValidEmail("hello.example.com")).toBe(false);'}
        </DiffLine>
        <DiffLine line={10} type="context">
          {"});"}
        </DiffLine>
      </DiffContent>
    </Diff>
  </div>
);

export default Example;
