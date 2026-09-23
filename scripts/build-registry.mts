import { realpathSync } from "node:fs";
import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { SITE_CONFIG } from "../config/site";
import { getRegistryArtifacts } from "../lib/composition-catalog";
import type { CompositionArtifact, RegistryItemType } from "../lib/registry";
import { replaceRegistryImportsForCopy } from "../utils/formatter";

export type RegistryKind = "component" | "hook" | "lib";
export type SourceExt = "ts" | "tsx";

interface KindConfig {
  emoji: string;
  label: string;
  manifestType: string;
  subdir: string;
}

export const SCHEMA = "https://ui.shadcn.com/schema/registry-item.json";

/** Source extensions in priority order (first wins on ambiguity). */
export const SOURCE_EXTS: readonly SourceExt[] = ["tsx", "ts"];

const SOURCE_EXT_PRIORITY = new Map(
  SOURCE_EXTS.map((ext, index) => [ext, index])
);

export const STANDALONE_MANIFESTS = [
  "ui",
  "style",
  "hitbox",
  "shimmer",
  "chat",
] as const;

export const KINDS = {
  component: {
    emoji: "📦",
    label: "components",
    manifestType: "registry:ui",
    subdir: "components",
  },
  hook: {
    emoji: "🪝",
    label: "hooks",
    manifestType: "registry:hook",
    subdir: "hooks",
  },
  lib: {
    emoji: "📚",
    label: "libs",
    manifestType: "registry:lib",
    subdir: "lib",
  },
} as const satisfies Record<RegistryKind, KindConfig>;

export const REGISTRY_KINDS = Object.keys(KINDS) as RegistryKind[];

const LOCALHOST_RE = /localhost|127\.0\.0\.1/i;
const CWD = process.cwd();
const PUBLIC_DIR = join(CWD, "public", "r");
const TRAILING_SLASH = /\/$/;

const COMPOSITION_GROUPS = [
  { emoji: "🧱", kind: "blocks", label: "blocks" },
  { emoji: "🖥️", kind: "templates", label: "templates" },
] as const;

/** Pick the best source file per item, honoring SOURCE_EXTS priority. */
export const pickSourceFiles = (files: string[]) => {
  const chosen = new Map<string, SourceExt>();

  for (const file of files) {
    const ext = SOURCE_EXTS.find((candidate) => file.endsWith(`.${candidate}`));
    if (!ext) {
      continue;
    }

    const name = file.slice(0, -(ext.length + 1));
    const current = chosen.get(name);
    const nextPriority =
      SOURCE_EXT_PRIORITY.get(ext) ?? Number.POSITIVE_INFINITY;
    const currentPriority =
      current === undefined
        ? Number.POSITIVE_INFINITY
        : (SOURCE_EXT_PRIORITY.get(current) ?? Number.POSITIVE_INFINITY);

    if (current === undefined || nextPriority < currentPriority) {
      chosen.set(name, ext);
    }
  }

  return chosen;
};

export const primaryRegistryPath = (
  kind: RegistryKind,
  itemName: string,
  ext: SourceExt,
  framework = "react"
) => `registry/${framework}/${KINDS[kind].subdir}/${itemName}.${ext}`;

export const toCompositionRegistryItem = (
  composition: CompositionArtifact
) => ({
  $schema: SCHEMA,
  categories: [composition.category],
  dependencies: composition.dependencies ?? [],
  description: composition.description,
  files: composition.files.map(({ content, path, target, type }) => ({
    content,
    path,
    target,
    type,
  })),
  meta: composition.meta,
  name: composition.name,
  registryDependencies: composition.registryDependencies,
  title: composition.title,
  type: composition.type,
});

export const assertNoLocalhost = (
  fileName: string,
  raw: string,
  siteOrigin: string
) => {
  if (LOCALHOST_RE.test(raw)) {
    throw new Error(
      `localhost URL found in public/r/${fileName}. Registry artifacts must use ${siteOrigin}.`
    );
  }
};

export const assertRegistryDepsOrigin = (
  fileName: string,
  deps: unknown,
  siteOrigin: string
) => {
  if (!Array.isArray(deps)) {
    return;
  }

  const originPrefix = `${siteOrigin}/`;

  for (const dep of deps) {
    if (typeof dep !== "string" || !dep.startsWith("http")) {
      continue;
    }
    if (!dep.startsWith(originPrefix)) {
      throw new Error(
        `public/r/${fileName}: registryDependency is not under ${originPrefix}`
      );
    }
  }
};

export const validatePublishedArtifact = (
  fileName: string,
  raw: string,
  siteOrigin: string
) => {
  assertNoLocalhost(fileName, raw, siteOrigin);

  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("registryDependencies" in parsed)
  ) {
    return;
  }

  assertRegistryDepsOrigin(fileName, parsed.registryDependencies, siteOrigin);
};

const manifestCache = new Map<string, Promise<RegistryItemType>>();

const manifestPath = (itemName: string) =>
  join(CWD, "registry", "manifest", `${itemName}.ts`);

const kindDir = (kind: RegistryKind, framework: string) =>
  join(CWD, "registry", framework, KINDS[kind].subdir);

const artifactPath = (itemName: string) => join(PUBLIC_DIR, `${itemName}.json`);

const loadManifest = (itemName: string): Promise<RegistryItemType> => {
  const cached = manifestCache.get(itemName);
  if (cached) {
    return cached;
  }

  const pending = (async () => {
    try {
      const mod = await import(pathToFileURL(manifestPath(itemName)).href);
      return mod.default as RegistryItemType;
    } catch (error) {
      throw new Error(`Manifest not found for ${itemName}`, { cause: error });
    }
  })();

  manifestCache.set(itemName, pending);
  return pending;
};

const readTransformed = async (filePath: string) =>
  replaceRegistryImportsForCopy(await readFile(filePath, "utf-8"));

const writeArtifact = async (itemName: string, metadata: unknown) => {
  await writeFile(artifactPath(itemName), JSON.stringify(metadata, null, 2));
  console.log(`✅ Generated ${itemName}.json`);
};

const loadExtraFiles = async (
  files: RegistryItemType["files"],
  primaryPath: string
) =>
  Promise.all(
    (files ?? [])
      .filter((file) => file.path !== primaryPath)
      .map(async (file) => {
        const content = await readTransformed(join(CWD, file.path));
        return { ...file, content };
      })
  );

interface SourceInput {
  code: string;
  ext: SourceExt;
}

const buildKindMetadata = async (
  itemName: string,
  kind: RegistryKind,
  source: SourceInput,
  framework = "react"
) => {
  const manifest = await loadManifest(itemName);
  const base = { $schema: SCHEMA, ...manifest };

  if (!source.code.trim()) {
    console.warn(
      `[build-registry] ${itemName}: manifest type is "${manifest.type}"; skipping embedded`
    );
    return base;
  }

  const { manifestType } = KINDS[kind];
  if (manifest.type !== manifestType) {
    console.warn(
      `[build-registry] ${itemName}: kind="${kind}" expects manifest type "${manifestType}" but got "${manifest.type}"; skipping embedded files.`
    );
    return base;
  }

  const primaryPath = primaryRegistryPath(
    kind,
    itemName,
    source.ext,
    framework
  );

  return {
    ...base,
    files: [
      {
        content: source.code,
        path: primaryPath,
        type: manifest.type,
      },
      ...(await loadExtraFiles(manifest.files, primaryPath)),
    ],
  };
};

const processKind = async (kind: RegistryKind, framework = "react") => {
  const { subdir, label, emoji } = KINDS[kind];
  const dirPath = kindDir(kind, framework);

  try {
    await access(dirPath);
  } catch {
    console.log(`No ${subdir} directory; skipping ${label}.`);
    return;
  }

  const chosen = pickSourceFiles(await readdir(dirPath));
  console.log(`Found ${chosen.size} ${label} to process:`);

  await Promise.all(
    Array.from(chosen, async ([itemName, ext]) => {
      console.log(`${emoji} Processing ${itemName}...`);
      const code = await readTransformed(join(dirPath, `${itemName}.${ext}`));
      const metadata = await buildKindMetadata(
        itemName,
        kind,
        { code, ext },
        framework
      );
      await writeArtifact(itemName, metadata);
    })
  );

  console.log(`🎉 Successfully processed all ${chosen.size} ${label}!\n`);
};

const processCompositions = async () => {
  await Promise.all(
    COMPOSITION_GROUPS.map(async ({ emoji, kind, label }) => {
      const items = (await getRegistryArtifacts(kind)) as CompositionArtifact[];
      console.log(`Found ${items.length} ${label} to process:`);

      await Promise.all(
        items.map(async (composition) => {
          console.log(`${emoji} Processing ${composition.name}...`);
          await writeArtifact(
            composition.name,
            toCompositionRegistryItem(composition)
          );
        })
      );

      console.log(`🎉 Successfully processed all ${items.length} ${label}!\n`);
    })
  );
};

const processStandaloneManifests = async () => {
  await Promise.all(
    STANDALONE_MANIFESTS.map(async (itemName) => {
      console.log(`📦 Processing standalone manifest ${itemName}...`);
      const manifest = await loadManifest(itemName);
      await writeArtifact(itemName, { $schema: SCHEMA, ...manifest });
    })
  );
};

const assertPublishedRegistryUrls = async () => {
  const siteOrigin = SITE_CONFIG.url.replace(TRAILING_SLASH, "");
  const names = (await readdir(PUBLIC_DIR)).filter((name) =>
    name.endsWith(".json")
  );

  const files = await Promise.all(
    names.map(async (name) => ({
      name,
      raw: await readFile(join(PUBLIC_DIR, name), "utf8"),
    }))
  );

  for (const { name, raw } of files) {
    validatePublishedArtifact(name, raw, siteOrigin);
  }
};

const main = async () => {
  await mkdir(PUBLIC_DIR, { recursive: true });
  await Promise.all(REGISTRY_KINDS.map((kind) => processKind(kind)));
  await processCompositions();
  await processStandaloneManifests();
  await assertPublishedRegistryUrls();
};

const isDirectRun = () => {
  if (process.argv[1] === undefined) {
    return false;
  }
  try {
    return (
      realpathSync(fileURLToPath(import.meta.url)) ===
      realpathSync(process.argv[1])
    );
  } catch {
    return false;
  }
};

if (isDirectRun()) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
