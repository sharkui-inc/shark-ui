import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createRuntimeThemeCss } from "../lib/theme/catalog";

const THEMES_CSS = join(process.cwd(), "styles", "themes.css");

await writeFile(THEMES_CSS, createRuntimeThemeCss());
