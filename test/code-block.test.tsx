import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { cleanup, render } from "@testing-library/react";
import {
  CodeBlock,
  CodeBlockContent,
} from "@/registry/react/components/code-block";

afterEach(cleanup);

describe("CodeBlock", () => {
  it("renders streaming code immediately with line numbers and highlights", () => {
    const { container, getByText } = render(
      <CodeBlock
        code={"const answer = 42;\n"}
        isStreaming
        language="typescript"
      >
        <CodeBlockContent highlightedLines={[1]} showLineNumbers />
      </CodeBlock>
    );

    assert.ok(getByText("const answer = 42;"));
    assert.equal(
      container
        .querySelector('[data-line="1"]')
        ?.hasAttribute("data-highlighted"),
      true
    );
    assert.equal(
      container.querySelector('[data-line="2"]')?.textContent?.includes("2"),
      true
    );
  });

  it("uses content code instead of the root code when supplied", () => {
    const { container, getByText, queryByText } = render(
      <CodeBlock code="const root = true;" language="typescript">
        <CodeBlockContent code="const override = true;" isStreaming />
      </CodeBlock>
    );

    assert.ok(getByText("const override = true;"));
    assert.equal(queryByText("const root = true;"), null);
    assert.equal(
      container
        .querySelector('[data-slot="code-block"]')
        ?.className.includes("[--code-surface-line-height:--spacing(6)]"),
      true
    );
    assert.equal(
      container.querySelector('[data-slot="code-block"] [data-line="1"]')
        ?.textContent,
      "const override = true;"
    );
    assert.equal(
      container
        .querySelector('[data-slot="code-block"] [data-line="1"]')
        ?.querySelector('[data-slot="code-block-line-number"]'),
      null
    );
  });
});
