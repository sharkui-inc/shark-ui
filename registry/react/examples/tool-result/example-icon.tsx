import { GlobeIcon } from "lucide-react";
import {
  ToolResult,
  ToolResultAction,
  ToolResultContent,
  ToolResultName,
  ToolResultStatus,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

const Example = () => (
  <ToolResult className="max-w-lg" defaultOpen status="success">
    <ToolResultTrigger>
      <GlobeIcon aria-hidden="true" />
      <ToolResultTitle>Fetched docs</ToolResultTitle>
      <ToolResultName>WebFetch</ToolResultName>
      <ToolResultAction>
        <ToolResultStatus />
      </ToolResultAction>
    </ToolResultTrigger>
    <ToolResultContent>
      <p className="text-muted-foreground text-xs">
        https://ark-ui.com/docs/components/collapsible
      </p>
    </ToolResultContent>
  </ToolResult>
);

export default Example;
