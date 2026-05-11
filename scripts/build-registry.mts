import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { RegistryItemType } from "../lib/registry";

type RegistryKind = "component" | "hook" | "lib";

type SourceExt = "ts" | "tsx";

const manifestCache = new Map<string, RegistryItemType>();

const loadManifestData = async (itemName: string) => {
  const cached = manifestCache.get(itemName);
  
  if (cached) {
    return cached;
  }

  const manifestFilePath = join(
    process.cwd(),
    "registry",
    "manifest",
    `${itemName}.ts`
  );

  try {
    await access(manifestFilePath);
    const manifestUrl = pathToFileURL(manifestFilePath).href;
    const manifestModule = await import(manifestUrl);
    const manifestData = manifestModule.default as RegistryItemType;
    manifestCache.set(itemName, manifestData);
    return manifestData;
  } catch {
    throw new Error(`Manifest not found for ${itemName}`);
  }
};

const extractItemMetadata = async (
  framework: "react",
  itemName: string,
  kind: RegistryKind,
  sourceCode?: string,
  sourceExt?: SourceExt
) => {
  const manifestData = await loadManifestData(itemName);

  const base = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...manifestData,
  };

  if (!sourceCode?.trim()) {
    console.warn(
      `[build-registry] ${itemName}: manifest type is "${manifestData.type}" — skipping embedded`
    );
    return base;
  }

  const expectedManifestType =
    kind === "hook"
      ? "registry:hook"
      : kind === "lib"
        ? "registry:lib"
        : "registry:ui";

  if (manifestData.type !== expectedManifestType) {
    console.warn(
      `[build-registry] ${itemName}: kind="${kind}" expects manifest type "${expectedManifestType}" but got "${manifestData.type}" — skipping embedded files.`
    );
    return base;
  }

  const subdir =
    kind === "hook" ? "hooks" : kind === "lib" ? "lib" : "components";
  const ext = sourceExt ?? (kind === "lib" ? "ts" : "tsx");

  return {
    ...base,
    files: [
      {
        path: `registry/${framework}/${subdir}/${itemName}.${ext}`,
        content: sourceCode,
        type: manifestData.type,
      },
    ],
  };
};

const ensureDirectoryExists = async (dirPath: string) => {
  try {
    await access(dirPath);
  } catch {
    await mkdir(dirPath, { recursive: true });
  }
};

let registryJsonFormattedOnce = false;

const ensureRegistryJsonFormatted = async () => {
  if (registryJsonFormattedOnce) {
    return;
  }
  registryJsonFormattedOnce = true;

  const registryPath = join(process.cwd(), "registry.json");
  try {
    const registryContent = await readFile(registryPath, "utf-8");
    const parsedRegistry = JSON.parse(registryContent);
    await writeFile(registryPath, JSON.stringify(parsedRegistry, null, 2));
    console.log("✅ Updated registry.json");
  } catch {
    // Don't fail the whole build if registry.json is missing/unparseable.
    console.warn("⚠️ registry.json could not be formatted (continuing).");
  }
};

const writeRegistryArtifact = async (
  metadata: Awaited<ReturnType<typeof extractItemMetadata>>,
  itemName: string
) => {
  const publicRDir = join(process.cwd(), "public", "r");
  await ensureDirectoryExists(publicRDir);

  const componentFilePath = join(publicRDir, `${itemName}.json`);
  await writeFile(componentFilePath, JSON.stringify(metadata, null, 2));
  console.log(`✅ Generated ${itemName}.json`);

  await ensureRegistryJsonFormatted();

  return metadata;
};

const processAllSourceItems = async (
  framework: "react" = "react",
  kind: RegistryKind
) => {
  const dirName =
    kind === "component" ? "components" : kind === "hook" ? "hooks" : "lib";
  const exts: SourceExt[] = kind === "lib" ? ["ts", "tsx"] : ["tsx", "ts"];

  const dirPath = join(process.cwd(), "registry", framework, dirName);

  try {
    await access(dirPath);
  } catch {
    const label =
      kind === "component" ? "components" : kind === "hook" ? "hooks" : "libs";
    console.log(`No ${dirName} directory; skipping ${label}.`);
    return;
  }

  const { readdir } = await import("node:fs/promises");
  const files = await readdir(dirPath);

  const chosen = new Map<string, { file: string; sourceExt: SourceExt }>();

  for (const file of files) {
    for (const sourceExt of exts) {
      const suffix = `.${sourceExt}`;
      if (!file.endsWith(suffix)) {
        continue;
      }

      const itemName = file.slice(0, -suffix.length);
      const existing = chosen.get(itemName);
      if (
        !existing ||
        exts.indexOf(sourceExt) < exts.indexOf(existing.sourceExt)
      ) {
        chosen.set(itemName, { file, sourceExt });
      }
      break;
    }
  }

  const count = chosen.size;
  const label =
    kind === "component" ? "components" : kind === "hook" ? "hooks" : "libs";

  console.log(`Found ${count} ${label} to process:`);

  for (const [itemName, { file, sourceExt }] of chosen.entries()) {
    const kindEmoji =
      kind === "component" ? "📦" : kind === "hook" ? "🪝" : "📚";
    console.log(`\n${kindEmoji} Processing ${itemName}...`);

    const sourceCode = await readFile(join(dirPath, file), "utf-8");

    const metadata = await extractItemMetadata(
      framework,
      itemName,
      kind,
      sourceCode,
      sourceExt
    );

    await writeRegistryArtifact(metadata, itemName);
  }

  console.log(`\n🎉 Successfully processed all ${count} ${label}!`);
};

const processAllComponents = async (framework: "react" = "react") => {
  await processAllSourceItems(framework, "component");
};

const processAllHooks = async (framework: "react" = "react") => {
  await processAllSourceItems(framework, "hook");
};

const processAllLibs = async (framework: "react" = "react") => {
  await processAllSourceItems(framework, "lib");
};

const processStandaloneManifests = async (
  framework: "react" = "react",
  itemNames: string[]
) => {
  for (const itemName of itemNames) {
    console.log(`\n📦 Processing standalone manifest ${itemName}...`);

    const manifestData = await loadManifestData(itemName);
    const metadata = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      ...manifestData,
    };

    await writeRegistryArtifact(metadata, itemName);
  }
};

const main = async () => {
  await processAllComponents();
  await processAllHooks();
  await processAllLibs();
  await processStandaloneManifests("react", ["ui", "style"]);
};

main().catch(console.error);
