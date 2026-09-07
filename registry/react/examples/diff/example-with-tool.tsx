import {
  Diff,
  DiffContent,
  DiffFile,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";
import {
  ToolResult,
  ToolResultAction,
  ToolResultContent,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

const Example = () => (
  <ToolResult status="success">
    <ToolResultTrigger>
      <ToolResultTitle className="font-normal text-muted-foreground">
        Edited <span className="font-medium text-foreground">helpers.ts</span>
      </ToolResultTitle>
      <ToolResultAction>
        <DiffStats added={1} removed={1} />
      </ToolResultAction>
    </ToolResultTrigger>
    <ToolResultContent>
      <Diff>
        <DiffHeader>
          <DiffFile>src/utils/helpers.ts</DiffFile>
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
    </ToolResultContent>
  </ToolResult>
);

export default Example;
