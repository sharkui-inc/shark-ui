import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";

const ALLOWED_ALPHA = new Set([0, 4, 8, 16, 24, 32, 48, 64, 80, 96, 100]);
const ALLOWED_SHADOW_GEOMETRIES = new Set(["xs", "sm", "lg"]);
const SOURCE_ROOTS = [
  "app",
  "components",
  "content",
  "lib",
  "registry",
  "styles",
];
const SOURCE_EXTENSIONS = new Set([".css", ".mdx", ".ts", ".tsx"]);

const sourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      return entry.name === "node_modules" || entry.name === "public"
        ? []
        : sourceFiles(path);
    }

    if (
      !SOURCE_EXTENSIONS.has(path.slice(path.lastIndexOf("."))) ||
      path === "styles/themes.css"
    ) {
      return [];
    }

    return [path];
  });

const reportUnexpectedAlpha = (
  source: string,
  path: string,
  expression: RegExp,
  group = 1,
  isFraction = false
) => {
  const findings: string[] = [];

  for (const match of source.matchAll(expression)) {
    const digits = match[group];
    const value = Number(digits) * (isFraction && digits.length === 1 ? 10 : 1);

    if (!ALLOWED_ALPHA.has(value)) {
      const line = source.slice(0, match.index).split("\n").length;
      findings.push(`${path}:${line} uses ${match[0]}`);
    }
  }

  return findings;
};

const reportUnexpectedShadows = (source: string, path: string) => {
  const findings: string[] = [];
  const semanticRaisedShadowIndexes = new Set<number>();

  for (const match of source.matchAll(
    /\bshadow-[a-z-]+\/\d+\s+(shadow-sm)\b/g
  )) {
    semanticRaisedShadowIndexes.add(
      (match.index ?? 0) + match[0].lastIndexOf(match[1])
    );
  }

  for (const match of source.matchAll(
    /\b(?:shadow|drop-shadow)-(2xs|xs|sm|md|lg|xl|2xl)(?:\/(\d+))?(?=$|["'\s])/g
  )) {
    const [, geometry, alpha] = match;
    const line = source.slice(0, match.index).split("\n").length;

    if (!ALLOWED_SHADOW_GEOMETRIES.has(geometry)) {
      findings.push(
        `${path}:${line} uses unsupported shadow geometry ${match[0]}`
      );
      continue;
    }

    if (alpha) {
      if (!ALLOWED_ALPHA.has(Number(alpha))) {
        findings.push(`${path}:${line} uses ${match[0]}`);
      }
      continue;
    }

    if (
      match[0] !== "shadow-sm" ||
      !semanticRaisedShadowIndexes.has(match.index ?? 0)
    ) {
      findings.push(`${path}:${line} uses bare shadow ${match[0]}`);
    }
  }

  return findings;
};

describe("opacity policy", () => {
  it("uses only the approved alpha scale in authored source", () => {
    const findings = SOURCE_ROOTS.flatMap((root) =>
      sourceFiles(root).flatMap((path) => {
        const source = readFileSync(path, "utf8");

        return [
          ...reportUnexpectedAlpha(
            source,
            path,
            /\b(?:bg|text|border|ring|outline|shadow|stroke|fill)-[^"'\s]+\/(\d+)(?=$|["'\s])/g
          ),
          ...reportUnexpectedAlpha(
            source,
            path,
            /\b(?:[A-Za-z0-9_:[\]-]+:)*opacity-(\d+)(?=$|["'\s])/g
          ),
          ...reportUnexpectedAlpha(
            source,
            path,
            /\b(?:fillOpacity|opacity|strokeOpacity)\s*[:=]\s*0?\.(\d+)\b/g,
            1,
            true
          ),
          ...reportUnexpectedAlpha(
            source,
            path,
            /rgba\([^)]*,\s*0?\.(\d+)\)/g,
            1,
            true
          ),
          ...reportUnexpectedAlpha(
            source,
            path,
            /rgb\([^)]*\/\s*0?\.(\d+)\)/g,
            1,
            true
          ),
          ...reportUnexpectedShadows(source, path),
        ];
      })
    );

    assert.deepEqual(findings, []);
  });
});
