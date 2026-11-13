import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";
import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";

const FILES: Record<string, string> = {
  "src/checkout/retry-queue.ts": `export async function enqueueRetry(job: ChargeJob) {
  if (job.attempts > 0 && job.checkoutId) {
    return createCharge({ ...job, checkoutId: job.checkoutId })
  }
  return createCharge(job)
}`,
  "src/payments/create-charge.ts": `export async function createCharge(input: ChargeInput) {
  return stripe.charges.create({
    amount: input.amount,
    source: input.source,
    idempotencyKey: input.checkoutId,
  })
}`,
};

const TERMINAL_OUTPUT = [
  "\u001B[34mRunning tests...\u001B[0m",
  " \u001B[32m✓\u001B[0m createCharge › single submit",
  " \u001B[32m✓\u001B[0m createCharge › double-submit is idempotent",
  "\u001B[32mAll tests passed!\u001B[0m",
].join("\n");

interface AiComponentsIdeWorkspaceProps {
  path: string;
}

export const AiComponentsIdeWorkspace = (
  props: AiComponentsIdeWorkspaceProps
) => {
  const { path } = props;

  const code = FILES[path] ?? FILES["src/payments/create-charge.ts"] ?? "";

  return (
    <Resizable
      className="h-full min-h-0"
      defaultSize={[62, 38]}
      orientation="vertical"
      panels={[
        { id: "editor", minSize: 20 },
        { id: "terminal", minSize: 18 },
      ]}
    >
      <ResizablePanel className="min-h-0" id="editor">
        <CodeBlock className="h-full rounded-none border-0" code={code}>
          <CodeBlockHeader>
            <CodeBlockTitle>{path}</CodeBlockTitle>
            <CodeBlockCopy />
          </CodeBlockHeader>
          <CodeBlockContent showLineNumbers>{code}</CodeBlockContent>
        </CodeBlock>
      </ResizablePanel>
      <ResizableResizeTrigger id="editor:terminal" />
      <ResizablePanel className="min-h-0" id="terminal">
        <Terminal
          className="h-full rounded-none border-0 border-t"
          output={TERMINAL_OUTPUT}
        >
          <TerminalHeader>zsh · pnpm test</TerminalHeader>
          <TerminalContent />
        </Terminal>
      </ResizablePanel>
    </Resizable>
  );
};
