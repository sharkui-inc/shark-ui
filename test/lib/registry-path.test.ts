import assert from "node:assert/strict";
import { join, resolve } from "node:path";
import { describe, it } from "node:test";
import { assertPathInsideRoot } from "@/lib/registry-path";

const ESCAPED_PATH_OUTSIDE = /escaped path is outside/;
const ABSOLUTE_PATH_OUTSIDE = /absolute path is outside/;

describe("assertPathInsideRoot", () => {
  const root = resolve("/tmp/shark-registry-root");

  it("allows a path inside the root", () => {
    const inside = join(root, "examples", "button", "example-default.tsx");
    assert.equal(
      assertPathInsideRoot(inside, root, "example"),
      resolve(inside)
    );
  });

  it("allows the root itself", () => {
    assert.equal(assertPathInsideRoot(root, root, "root"), root);
  });

  it("rejects a path that escapes via ..", () => {
    const escaped = join(root, "..", "secrets", ".env");
    assert.throws(
      () => assertPathInsideRoot(escaped, root, "escaped path"),
      ESCAPED_PATH_OUTSIDE
    );
  });

  it("rejects an absolute path outside the root", () => {
    assert.throws(
      () => assertPathInsideRoot("/etc/passwd", root, "absolute path"),
      ABSOLUTE_PATH_OUTSIDE
    );
  });
});
