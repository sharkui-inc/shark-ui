import {
  BASE_COLORS,
  BORDER_RADIUS,
  PRIMARY_COLORS,
  PRIMARY_TONES,
} from "./catalog";
import {
  createVisualThemeLists,
  DEFAULT_FONT_HEADING,
  DEFAULT_FONT_SANS,
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_THEME_CONFIG,
  pickVisualThemeSource,
  type VisualThemePick,
} from "./config";
import {
  getThemeFont,
  THEME_FONTS,
  THEME_FONTS_PREVIEW_CSS_URL,
  type ThemeFontName,
} from "./fonts";

const managedThemeClasses = new Set([
  ...BASE_COLORS.map(({ value }) => `bg-${value}`),
  ...BORDER_RADIUS.map(({ value }) => `radius-${value}`),
  ...PRIMARY_COLORS.map(({ value }) => `theme-${value}`),
  ...PRIMARY_TONES.map(({ value }) => `primary-tone-${value}`),
]);

export const isManagedThemeClass = (className: string) =>
  managedThemeClasses.has(className);

export const hasManagedBodyThemeClass = () =>
  typeof document !== "undefined" &&
  Array.from(document.body.classList).some(isManagedThemeClass);

export const applyBodyThemeClasses = (
  input: Pick<
    VisualThemePick,
    "baseColor" | "borderRadius" | "primaryColor" | "primaryTone"
  >
) => {
  if (typeof document === "undefined") {
    return;
  }

  const { body } = document;
  const managed = Array.from(body.classList).filter(isManagedThemeClass);

  if (managed.length > 0) {
    body.classList.remove(...managed);
  }

  const classes = [
    `bg-${input.baseColor}`,
    `radius-${input.borderRadius}`,
    `primary-tone-${input.primaryTone}`,
  ];

  if (input.primaryColor !== DEFAULT_PRIMARY_COLOR) {
    classes.push(`theme-${input.primaryColor}`);
  }

  body.classList.add(...classes);
};

export const getDynamicThemeFonts = (
  input: Pick<VisualThemePick, "fontHeading" | "fontSans">
) => {
  const fonts = new Set<ThemeFontName>();

  if (input.fontSans !== DEFAULT_FONT_SANS) {
    fonts.add(input.fontSans);
  }

  if (input.fontHeading !== DEFAULT_FONT_HEADING) {
    fonts.add(input.fontHeading);
  }

  return [...fonts];
};

const ensureActiveFontLink = (name: ThemeFontName, href: string) => {
  if (document.querySelector(`link[data-shark-theme-font="${name}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.dataset.sharkThemeFont = name;
  link.href = href;
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

export const applyThemeFonts = (
  input: Pick<VisualThemePick, "fontHeading" | "fontSans">
) => {
  if (typeof document === "undefined") {
    return;
  }

  const dynamicFonts = getDynamicThemeFonts(input);
  const activeFonts = new Set(dynamicFonts);

  for (const link of document.querySelectorAll<HTMLLinkElement>(
    "link[data-shark-theme-font]"
  )) {
    if (!activeFonts.has(link.dataset.sharkThemeFont as ThemeFontName)) {
      link.remove();
    }
  }

  for (const name of dynamicFonts) {
    ensureActiveFontLink(name, getThemeFont(name).cssUrl);
  }

  const html = document.documentElement;
  const applyVariable = (
    name: "--font-heading" | "--font-sans",
    fontName: ThemeFontName,
    defaultFont: ThemeFontName
  ) => {
    if (fontName === defaultFont) {
      html.style.removeProperty(name);
      return;
    }

    html.style.setProperty(name, getThemeFont(fontName).family);
  };

  applyVariable("--font-sans", input.fontSans, DEFAULT_FONT_SANS);
  applyVariable("--font-heading", input.fontHeading, DEFAULT_FONT_HEADING);
};

export const applyThemeVisual = (visual: VisualThemePick) => {
  applyBodyThemeClasses(visual);
  applyThemeFonts(visual);
};

export const loadThemeFontPreviews = () => {
  if (typeof document === "undefined") {
    return;
  }

  if (document.querySelector("link[data-shark-theme-font-preview]")) {
    return;
  }

  const link = document.createElement("link");
  link.dataset.sharkThemeFontPreview = "";
  link.href = THEME_FONTS_PREVIEW_CSS_URL;
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const visualThemeLists = createVisualThemeLists(DEFAULT_THEME_CONFIG);

const themeBootstrapFonts = Object.fromEntries(
  THEME_FONTS.map(({ cssUrl, family, value }) => [value, { cssUrl, family }])
);

export const themeBootstrapScript = `
(() => {
  try {
    const pickVisualTheme = ${pickVisualThemeSource};
    const lists = ${JSON.stringify(visualThemeLists)};
    const fonts = ${JSON.stringify(themeBootstrapFonts)};
    const stored = window.localStorage.getItem("config");

    if (!stored) return;

    const value = JSON.parse(stored);

    if (!value || typeof value !== "object" || Array.isArray(value)) return;

    const pick = pickVisualTheme(value, lists);
    const body = document.body;

    body.classList.add(
      "bg-" + pick.baseColor,
      "radius-" + pick.borderRadius,
      "primary-tone-" + pick.primaryTone
    );

    if (pick.primaryColor !== lists.defaultConfig.primaryColor) {
      body.classList.add("theme-" + pick.primaryColor);
    }

    const html = document.documentElement;
    const selectedFonts = [
      [pick.fontHeading, "--font-heading", lists.defaultConfig.fontHeading],
      [pick.fontSans, "--font-sans", lists.defaultConfig.fontSans],
    ];

    for (const [name, property, defaultFont] of selectedFonts) {
      if (name !== defaultFont) {
        html.style.setProperty(property, fonts[name].family);
      }
    }
    const activeFonts = new Set(
      selectedFonts
        .filter(([name, _property, defaultFont]) => name !== defaultFont)
        .map(([name]) => name)
    );

    for (const name of activeFonts) {
      const font = fonts[name];

      if (
        document.querySelector(
          'link[data-shark-theme-font="' + name + '"]'
        )
      ) continue;

      const link = document.createElement("link");

      link.dataset.sharkThemeFont = name;
      link.href = font.cssUrl;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  } catch {
    // An unavailable or malformed localStorage value must not block rendering.
  }
})();
`;
