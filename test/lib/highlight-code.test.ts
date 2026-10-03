import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { highlightCode } from "@/lib/highlight-code";

const LINE_NUMBERS_ATTR = "data-line-numbers";

describe("highlightCode", () => {
  it("returns HTML that includes the source text", async () => {
    const code = "const x = 1";
    const html = await highlightCode(code, "ts");

    assert.ok(html.includes("<pre"));
    assert.ok(html.includes("const"));
    assert.ok(html.includes("x"));
    assert.ok(html.includes("1"));
  });

  it("adds data-line-numbers when showLineNumbers is enabled", async () => {
    const html = await highlightCode("const x = 1", "ts", {
      showLineNumbers: true,
    });

    assert.ok(html.includes(LINE_NUMBERS_ATTR));
  });

  it("omits data-line-numbers when showLineNumbers is disabled", async () => {
    const html = await highlightCode("const x = 1", "ts", {
      showLineNumbers: false,
    });

    assert.equal(html.includes(LINE_NUMBERS_ATTR), false);
  });

  it("returns cached HTML for identical inputs", async () => {
    const code = "const cached = true";
    const first = await highlightCode(code, "ts", { showLineNumbers: true });
    const second = await highlightCode(code, "ts", { showLineNumbers: true });

    assert.equal(second, first);
    assert.equal(Object.is(second, first), true);
  });

  it("produces different output when showLineNumbers differs", async () => {
    const code = "const y = 2";
    const withNumbers = await highlightCode(code, "ts", {
      showLineNumbers: true,
    });
    const withoutNumbers = await highlightCode(code, "ts", {
      showLineNumbers: false,
    });

    assert.notEqual(withNumbers, withoutNumbers);
    assert.ok(withNumbers.includes(LINE_NUMBERS_ATTR));
    assert.equal(withoutNumbers.includes(LINE_NUMBERS_ATTR), false);
  });
});
