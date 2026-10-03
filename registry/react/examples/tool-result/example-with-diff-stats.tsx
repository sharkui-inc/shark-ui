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
  <ToolResult className="w-full max-w-lg" status="success">
    <ToolResultTrigger>
      <ToolResultTitle className="font-normal text-muted-foreground">
        Edited <span className="font-medium text-foreground">settings.tsx</span>
      </ToolResultTitle>
      <ToolResultAction>
        <DiffStats added={21} removed={0} />
      </ToolResultAction>
    </ToolResultTrigger>
    <ToolResultContent>
      <Diff>
        <DiffHeader>
          <DiffFile>settings.tsx</DiffFile>
        </DiffHeader>
        <DiffContent>
          <DiffLine line={8} type="context">
            {"export const settings = {"}
          </DiffLine>
          <DiffLine line={9} type="delete">
            {'  theme: "light",'}
          </DiffLine>
          <DiffLine line={9} type="add">
            {"  theme: getSystemTheme(),"}
          </DiffLine>
          <DiffLine line={10} type="context">
            {"};"}
          </DiffLine>
        </DiffContent>
      </Diff>
    </ToolResultContent>
  </ToolResult>
);

export default Example;
