import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import type { CompositionArtifact } from "@/lib/registry";
import starter from "@/registry/manifest/starter";
import style, { styleFoundation } from "@/registry/manifest/style";
import ui, { SHARK_UI_BUNDLE } from "@/registry/manifest/ui";
import {
  assertNoLocalhost,
  assertRegistryDepsOrigin,
  assertUiBundleComplete,
  KINDS,
  pickSourceFiles,
  primaryRegistryPath,
  SCHEMA,
  toCompositionRegistryItem,
  validatePublishedArtifact,
} from "@/scripts/build-registry.mts";

const SITE_ORIGIN = "https://shark-ui.com";
const LOCALHOST_IN_BUTTON = /localhost URL found in public\/r\/button\.json/;
const MUST_USE_SITE_ORIGIN =
  /Registry artifacts must use https:\/\/shark-ui\.com/;
const DEPS_NOT_UNDER_ORIGIN =
  /registryDependency is not under https:\/\/shark-ui\.com\//;
const LOCALHOST_FOUND = /localhost URL found/;
const UI_BUNDLE_MISSING_ITEMS = /hitbox, shimmer/;

const readRegistryArtifact = (name: string) =>
  JSON.parse(
    readFileSync(join(process.cwd(), "public", "r", `${name}.json`), "utf8")
  ) as Record<string, unknown>;

const sampleComposition = (): CompositionArtifact => ({
  category: "sidebar",
  dependencies: ["react"],
  description: "A sample block",
  files: [
    {
      content: "export const Demo = () => null;",
      displayPath: "demo.tsx",
      path: "registry/react/blocks/sidebar/demo.tsx",
      source: "demo.tsx",
      target: "@/components/demo.tsx",
      type: "registry:block",
    },
  ],
  meta: {
    featured: true,
    order: 1,
    previewHeight: 400,
  },
  name: "sidebar-demo",
  registryDependencies: [`${SITE_ORIGIN}/r/button.json`],
  title: "Sidebar Demo",
  type: "registry:block",
});

describe("pickSourceFiles", () => {
  it("prefers tsx over ts when both exist", () => {
    const chosen = pickSourceFiles(["button.ts", "button.tsx", "readme.md"]);
    assert.deepEqual([...chosen], [["button", "tsx"]]);
  });

  it("accepts ts when tsx is absent", () => {
    const chosen = pickSourceFiles(["use-mobile.ts"]);
    assert.deepEqual([...chosen], [["use-mobile", "ts"]]);
  });

  it("ignores non-source files", () => {
    const chosen = pickSourceFiles([
      "button.json",
      "README.md",
      ".DS_Store",
      "button",
    ]);
    assert.equal(chosen.size, 0);
  });

  it("maps multiple items in the same directory", () => {
    const chosen = pickSourceFiles([
      "alert.tsx",
      "button.ts",
      "button.tsx",
      "utils.ts",
    ]);
    assert.deepEqual(
      [...chosen].sort(([a], [b]) => a.localeCompare(b)),
      [
        ["alert", "tsx"],
        ["button", "tsx"],
        ["utils", "ts"],
      ]
    );
  });
});

describe("primaryRegistryPath", () => {
  it("builds the component path under react", () => {
    assert.equal(
      primaryRegistryPath("component", "button", "tsx"),
      "registry/react/components/button.tsx"
    );
  });

  it("builds hook and lib paths with the correct subdirs", () => {
    assert.equal(
      primaryRegistryPath("hook", "use-mobile", "ts"),
      `registry/react/${KINDS.hook.subdir}/use-mobile.ts`
    );
    assert.equal(
      primaryRegistryPath("lib", "utils", "ts", "react"),
      `registry/react/${KINDS.lib.subdir}/utils.ts`
    );
  });
});

describe("toCompositionRegistryItem", () => {
  it("maps a composition artifact to the published registry shape", () => {
    const item = toCompositionRegistryItem(sampleComposition());

    assert.deepEqual(item, {
      $schema: SCHEMA,
      categories: ["sidebar"],
      dependencies: ["react"],
      description: "A sample block",
      files: [
        {
          content: "export const Demo = () => null;",
          path: "registry/react/blocks/sidebar/demo.tsx",
          target: "@/components/demo.tsx",
          type: "registry:block",
        },
      ],
      meta: {
        featured: true,
        order: 1,
        previewHeight: 400,
      },
      name: "sidebar-demo",
      registryDependencies: [`${SITE_ORIGIN}/r/button.json`],
      title: "Sidebar Demo",
      type: "registry:block",
    });
  });

  it("defaults missing dependencies to an empty array", () => {
    const composition = sampleComposition();
    composition.dependencies = undefined;
    const item = toCompositionRegistryItem(composition);
    assert.deepEqual(item.dependencies, []);
  });
});

describe("assertNoLocalhost", () => {
  it("throws when raw contains localhost", () => {
    assert.throws(
      () =>
        assertNoLocalhost(
          "button.json",
          JSON.stringify({ url: "http://localhost:3000/r/button.json" }),
          SITE_ORIGIN
        ),
      LOCALHOST_IN_BUTTON
    );
  });

  it("throws when raw contains 127.0.0.1", () => {
    assert.throws(
      () =>
        assertNoLocalhost(
          "button.json",
          JSON.stringify({ url: "http://127.0.0.1:3000/r/button.json" }),
          SITE_ORIGIN
        ),
      MUST_USE_SITE_ORIGIN
    );
  });

  it("allows published origins", () => {
    assert.doesNotThrow(() =>
      assertNoLocalhost(
        "button.json",
        JSON.stringify({ url: `${SITE_ORIGIN}/r/button.json` }),
        SITE_ORIGIN
      )
    );
  });
});

describe("assertRegistryDepsOrigin", () => {
  it("throws when an http dependency is outside the site origin", () => {
    assert.throws(
      () =>
        assertRegistryDepsOrigin(
          "card.json",
          ["https://evil.example/r/button.json"],
          SITE_ORIGIN
        ),
      DEPS_NOT_UNDER_ORIGIN
    );
  });

  it("skips relative and non-http dependencies", () => {
    assert.doesNotThrow(() =>
      assertRegistryDepsOrigin(
        "card.json",
        ["button", "style", "ftp://example.com/x"],
        SITE_ORIGIN
      )
    );
  });

  it("allows http dependencies under the site origin", () => {
    assert.doesNotThrow(() =>
      assertRegistryDepsOrigin(
        "card.json",
        [`${SITE_ORIGIN}/r/button.json`],
        SITE_ORIGIN
      )
    );
  });
});

describe("validatePublishedArtifact", () => {
  it("passes artifacts without registryDependencies", () => {
    assert.doesNotThrow(() =>
      validatePublishedArtifact(
        "style.json",
        JSON.stringify({ name: "style", type: "registry:style" }),
        SITE_ORIGIN
      )
    );
  });

  it("validates localhost and dependency origin together", () => {
    assert.throws(
      () =>
        validatePublishedArtifact(
          "card.json",
          JSON.stringify({
            registryDependencies: ["http://localhost:3000/r/button.json"],
          }),
          SITE_ORIGIN
        ),
      LOCALHOST_FOUND
    );

    assert.doesNotThrow(() =>
      validatePublishedArtifact(
        "card.json",
        JSON.stringify({
          registryDependencies: [`${SITE_ORIGIN}/r/button.json`, "button"],
        }),
        SITE_ORIGIN
      )
    );
  });
});

describe("installation manifests", () => {
  it("keeps style limited to the theme foundation", () => {
    assert.deepEqual(style.dependencies, []);
    assert.deepEqual(style.devDependencies, ["tw-animate-css"]);
    assert.ok(
      style.registryDependencies?.every((item) => item.includes("utils"))
    );
    assert.ok(!JSON.stringify(style).includes("@base-ui/react"));
  });

  it("makes starter share the style foundation and install the UI bundle", () => {
    assert.equal(starter.css, styleFoundation.css);
    assert.equal(starter.cssVars, styleFoundation.cssVars);
    assert.ok(
      starter.registryDependencies?.some((item) => item.endsWith("/r/ui.json"))
    );
  });

  it("requires the UI bundle to contain every installable UI item", () => {
    const manifestTypes = new Map([
      ["button", "registry:ui"],
      ["chat", "registry:ui"],
      ["hitbox", "registry:style"],
      ["shimmer", "registry:style"],
      ["style", "registry:style"],
      ["ui", "registry:ui"],
    ]);

    assert.doesNotThrow(() =>
      assertUiBundleComplete(manifestTypes, [
        "button",
        "chat",
        "hitbox",
        "shimmer",
      ])
    );
    assert.throws(
      () => assertUiBundleComplete(manifestTypes, ["button", "chat"]),
      UI_BUNDLE_MISSING_ITEMS
    );
    assert.ok(SHARK_UI_BUNDLE.includes("masonry"));
    assert.ok(
      ui.registryDependencies?.some((item) => item.endsWith("/r/chat.json"))
    );
  });

  it("publishes canonical starter, style, and UI artifacts", () => {
    const styleArtifact = readRegistryArtifact("style");
    const starterArtifact = readRegistryArtifact("starter");
    const uiArtifact = readRegistryArtifact("ui");
    const serialized = JSON.stringify({
      starterArtifact,
      styleArtifact,
      uiArtifact,
    });

    assert.deepEqual(styleArtifact.dependencies, []);
    assert.ok(
      (starterArtifact.registryDependencies as string[]).includes(
        "https://shark-ui.com/r/ui.json"
      )
    );
    assert.ok(
      (uiArtifact.registryDependencies as string[]).includes(
        "https://shark-ui.com/r/masonry.json"
      )
    );
    assert.ok(!serialized.includes("@base-ui/react"));
    assert.ok(!serialized.includes("shark.vini.one"));
  });
});
