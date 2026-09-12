import {
  type BaseColor,
  type BorderRadius,
  createCssVars,
  type PrimaryColor,
  type PrimaryTone,
} from "./catalog";
import { getThemeFont, type ThemeFont, type ThemeFontName } from "./fonts";

export interface ThemeCopyFonts {
  fontHeading: ThemeFontName;
  fontSans: ThemeFontName;
}

export interface ThemeFontInstall {
  fontsource: string;
  nextFont: string;
}

const nextFontExport = (font: ThemeFont) =>
  font.family.split(",")[0].replaceAll("'", "").trim().replaceAll(" ", "_");

const isVariableFont = (font: ThemeFont) => font.cssUrl.includes("..");

export const getThemeFontInstall = (font: ThemeFont): ThemeFontInstall => ({
  fontsource: isVariableFont(font)
    ? `@fontsource-variable/${font.value}`
    : `@fontsource/${font.value}`,
  nextFont: nextFontExport(font),
});

export const uniqueThemeFonts = (fonts: ThemeCopyFonts) => {
  const sans = getThemeFont(fonts.fontSans);

  if (fonts.fontSans === fonts.fontHeading) {
    return [sans];
  }

  return [sans, getThemeFont(fonts.fontHeading)];
};

export const createThemeExportCss = (
  primaryCss: PrimaryColor["cssVars"],
  baseCss: BaseColor["cssVars"],
  radiusCss: BorderRadius["cssVars"],
  fonts: ThemeCopyFonts,
  primaryTone: PrimaryTone = "light"
) => {
  const sans = getThemeFont(fonts.fontSans);
  const heading = getThemeFont(fonts.fontHeading);
  const imports = uniqueThemeFonts(fonts)
    .map((font) => `@import url("${font.cssUrl}");`)
    .join("\n");
  const fontVars = `:root {\n  --font-sans: ${sans.family};\n  --font-heading: ${heading.family};\n}`;
  const tokens = createCssVars(primaryCss, baseCss, radiusCss, primaryTone);

  return `${imports}\n\n${fontVars}\n\n${tokens}`;
};

export const createThemeFontInstallCommand = (fonts: ThemeCopyFonts) => {
  const packages = uniqueThemeFonts(fonts)
    .map((font) => getThemeFontInstall(font).fontsource)
    .join(" ");

  return `npm install ${packages}`;
};

export const createNextFontSnippet = (fonts: ThemeCopyFonts) => {
  const sans = getThemeFont(fonts.fontSans);
  const heading = getThemeFont(fonts.fontHeading);
  const sansExport = getThemeFontInstall(sans).nextFont;
  const headingExport = getThemeFontInstall(heading).nextFont;
  const importNames = Array.from(new Set([headingExport, sansExport])).toSorted(
    (left, right) => left.localeCompare(right)
  );

  if (sans.value === heading.value) {
    return `import { ${sansExport} } from "next/font/google";

const fontSans = ${sansExport}({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = ${sansExport}({
  subsets: ["latin"],
  variable: "--font-heading",
});`;
  }

  return `import { ${importNames.join(", ")} } from "next/font/google";

const fontSans = ${sansExport}({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = ${headingExport}({
  subsets: ["latin"],
  variable: "--font-heading",
});`;
};
