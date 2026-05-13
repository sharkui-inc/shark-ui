import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { RegistryItemType } from "../lib/registry";

type RegistryKind = "component" | "hook" | "lib";
type SourceExt = "ts" | "tsx";

interface KindConfig {
  emoji: string;
  label: string;
  manifestType: string;
  subdir: string;
}

const SCHEMA = "https://ui.shadcn.com/schema/registry-item.json";
const CWD = process.cwd();
const PUBLIC_DIR = join(CWD, "public", "r");

/** Source extensions in priority order (first wins on ambiguity). */
const SOURCE_EXTS: readonly SourceExt[] = ["tsx", "ts"];

const KINDS = {
  component: {
    manifestType: "registry:ui",
    subdir: "components",
    label: "components",
    emoji: "📦",
  },
  hook: {
    manifestType: "registry:hook",
    subdir: "hooks",
    label: "hooks",
    emoji: "🪝",
  },
  lib: {
    manifestType: "registry:lib",
    subdir: "lib",
    label: "libs",
    emoji: "📚",
  },
} as const satisfies Record<RegistryKind, KindConfig>;

// Cache the in-flight promise so concurrent callers dedupe automatically.
const manifestCache = new Map<string, Promise<RegistryItemType>>();

const loadManifest = (itemName: string): Promise<RegistryItemType> => {
  const cached = manifestCache.get(itemName);
  if (cached) {
    return cached;
  }

  const pending = (async () => {
    const path = join(CWD, "registry", "manifest", `${itemName}.ts`);
    try {
      const mod = await import(pathToFileURL(path).href);
      return mod.default as RegistryItemType;
    } catch {
      throw new Error(`Manifest not found for ${itemName}`);
    }
  })();

  manifestCache.set(itemName, pending);
  return pending;
};

interface SourceInput {
  code: string;
  ext: SourceExt;
}

const buildMetadata = async (
  itemName: string,
  kind: RegistryKind,
  source?: SourceInput,
  framework = "react"
) => {
  const manifest = await loadManifest(itemName);
  const base = { $schema: SCHEMA, ...manifest };

  if (!source?.code.trim()) {
    console.warn(
      `[build-registry] ${itemName}: manifest type is "${manifest.type}" — skipping embedded`
    );
    return base;
  }

  const { manifestType, subdir } = KINDS[kind];

  if (manifest.type !== manifestType) {
    console.warn(
      `[build-registry] ${itemName}: kind="${kind}" expects manifest type "${manifestType}" but got "${manifest.type}" — skipping embedded files.`
    );
    return base;
  }

  return {
    ...base,
    files: [
      {
        path: `registry/${framework}/${subdir}/${itemName}.${source.ext}`,
        content: source.code,
        type: manifest.type,
      },
    ],
  };
};

const writeArtifact = async (metadata: unknown, itemName: string) => {
  const filePath = join(PUBLIC_DIR, `${itemName}.json`);
  await writeFile(filePath, JSON.stringify(metadata, null, 2));
  console.log(`✅ Generated ${itemName}.json`);
};

const formatRegistryJson = async () => {
  const path = join(CWD, "registry.json");

  try {
    const parsed = JSON.parse(await readFile(path, "utf-8"));
    await writeFile(path, JSON.stringify(parsed, null, 2));
    console.log("✅ Updated registry.json");
  } catch {
    console.warn("⚠️ registry.json could not be formatted (continuing).");
  }
};

/** Pick the best source file per item, honoring SOURCE_EXTS priority. */
const pickSourceFiles = (files: string[]) => {
  const chosen = new Map<string, SourceExt>();

  for (const file of files) {
    for (let i = 0; i < SOURCE_EXTS.length; i++) {
      const ext = SOURCE_EXTS[i];
      const suffix = `.${ext}`;
      if (!file.endsWith(suffix)) {
        continue;
      }

      const name = file.slice(0, -suffix.length);
      const existing = chosen.get(name);
      if (existing === undefined || i < SOURCE_EXTS.indexOf(existing)) {
        chosen.set(name, ext);
      }
      break;
    }
  }

  return chosen;
};

const processKind = async (kind: RegistryKind, framework = "react") => {
  const { subdir, label, emoji } = KINDS[kind];

  const dirPath = join(CWD, "registry", framework, subdir);

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
      const code = await readFile(join(dirPath, `${itemName}.${ext}`), "utf-8");
      const metadata = await buildMetadata(
        itemName,
        kind,
        { code, ext },
        framework
      );
      await writeArtifact(metadata, itemName);
    })
  );

  console.log(`🎉 Successfully processed all ${chosen.size} ${label}!\n`);
};

const processStandaloneManifests = async (itemNames: string[]) => {
  await Promise.all(
    itemNames.map(async (itemName) => {
      console.log(`📦 Processing standalone manifest ${itemName}...`);
      const manifest = await loadManifest(itemName);
      await writeArtifact({ $schema: SCHEMA, ...manifest }, itemName);
    })
  );
};

const main = async () => {
  await mkdir(PUBLIC_DIR, { recursive: true });

  // generate registry for all kinds
  for (const kind of ["component", "hook", "lib"] as const) {
    await processKind(kind);
  }

  await processStandaloneManifests(["ui", "style", "hitbox"]);
  await formatRegistryJson();
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
