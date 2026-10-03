import assert from "node:assert/strict";
import { join } from "node:path";
import { describe, it } from "node:test";
import {
  isPublicRegistryName,
  registryItemSchema,
  toRegistryListItem,
} from "@/lib/registry";

describe("isPublicRegistryName", () => {
  it("allows normal registry names", () => {
    assert.equal(isPublicRegistryName("sidebar-01.tsx"), true);
    assert.equal(isPublicRegistryName("example-default.tsx"), true);
  });

  it("rejects underscore-prefixed private names", () => {
    assert.equal(isPublicRegistryName("_registry.ts"), false);
    assert.equal(isPublicRegistryName("_categories.ts"), false);
  });
});

describe("toRegistryListItem", () => {
  it("joins the category path with the file name", () => {
    const item = toRegistryListItem({
      category: "sidebar",
      categoryPath: "/repo/registry/react/blocks/sidebar",
      fileName: "sidebar-01.tsx",
      folderType: "blocks",
    });

    assert.deepEqual(item, {
      category: "sidebar",
      name: "sidebar-01.tsx",
      path: join("/repo/registry/react/blocks/sidebar", "sidebar-01.tsx"),
      type: "blocks",
    });
  });
});

describe("registryItemSchema", () => {
  it("parses a minimal manifest and defaults dependencies", () => {
    const parsed = registryItemSchema.parse({
      name: "button",
      type: "registry:ui",
    });

    assert.equal(parsed.name, "button");
    assert.equal(parsed.type, "registry:ui");
    assert.deepEqual(parsed.dependencies, []);
  });

  it("rejects an invalid registry type", () => {
    assert.throws(() =>
      registryItemSchema.parse({
        name: "button",
        type: "registry:unknown",
      })
    );
  });
});
