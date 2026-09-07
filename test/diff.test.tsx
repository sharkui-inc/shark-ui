import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { cleanup, render } from "@testing-library/react";
import { Diff, DiffContent, DiffLine } from "@/registry/react/components/diff";

afterEach(cleanup);

describe("Diff", () => {
  it("keeps short and four-digit line numbers in the shared gutter", () => {
    const { container } = render(
      <Diff>
        <DiffContent>
          <DiffLine line={7} type="context">
            {"const short = true;"}
          </DiffLine>
          <DiffLine line={1024} type="delete">
            {"const before = true;"}
          </DiffLine>
          <DiffLine line={1024} type="add">
            {"const after = true;"}
          </DiffLine>
        </DiffContent>
      </Diff>
    );

    const lineNumbers = container.querySelectorAll(
      '[data-slot="diff-line-number"]'
    );
    const gutters = [...lineNumbers].map(
      (lineNumber) => lineNumber.parentElement
    );

    assert.equal(lineNumbers.length, 3);
    assert.ok(gutters.every((gutter) => gutter?.className.includes("w-11")));
    assert.ok(
      [...lineNumbers].every((lineNumber) =>
        lineNumber.className.includes("pe-3")
      )
    );
    assert.equal(container.querySelectorAll('[data-type="context"]').length, 1);
    assert.equal(container.querySelectorAll('[data-type="delete"]').length, 1);
    assert.equal(container.querySelectorAll('[data-type="add"]').length, 1);
    assert.equal(
      container.querySelectorAll('[data-slot="diff-line-sign"]').length,
      0
    );
    assert.ok(
      [...lineNumbers].every((lineNumber) =>
        lineNumber.className.includes("text-end")
      )
    );
  });
});
