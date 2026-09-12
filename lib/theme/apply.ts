import {
  BASE_COLORS,
  BORDER_RADIUS,
  PRIMARY_COLORS,
  PRIMARY_TONES,
} from "./catalog";
import {
  type BaseColor,
  type BorderRadius,
  createVisualThemeLists,
  DEFAULT_BASE_COLOR,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_FONT_HEADING,
  DEFAULT_FONT_SANS,
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_PRIMARY_TONE,
  type PrimaryColor,
  type PrimaryTone,
  pickVisualThemeSource,
} from "./config";
import { getThemeFont, THEME_FONTS, type ThemeFontName } from "./fonts";

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

export const applyBodyThemeClasses = (input: {
  borderRadius: BorderRadius;
  baseColor: BaseColor;
  primaryColor: PrimaryColor;
  primaryTone: PrimaryTone;
}) => {
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

const dynamicFontName = (font: ThemeFontName, defaultFont: ThemeFontName) =>
  font === defaultFont ? null : font;

export const getDynamicThemeFonts = (input: {
  fontHeading: ThemeFontName;
  fontSans: ThemeFontName;
}) =>
  Array.from(
    new Set(
      [
        dynamicFontName(input.fontSans, DEFAULT_FONT_SANS),
        dynamicFontName(input.fontHeading, DEFAULT_FONT_HEADING),
      ].filter((font): font is ThemeFontName => font !== null)
    )
  );

export const applyThemeFonts = (input: {
  fontHeading: ThemeFontName;
  fontSans: ThemeFontName;
}) => {
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
    if (document.querySelector(`link[data-shark-theme-font="${name}"]`)) {
      continue;
    }

    const font = getThemeFont(name);
    const link = document.createElement("link");
    link.dataset.sharkThemeFont = name;
    link.href = font.cssUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
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

export const loadThemeFontPreviews = () => {
  if (typeof document === "undefined") {
    return;
  }

  for (const font of THEME_FONTS) {
    if (
      document.querySelector(
        `link[data-shark-theme-font-preview="${font.value}"]`
      )
    ) {
      continue;
    }

    const link = document.createElement("link");
    link.dataset.sharkThemeFontPreview = font.value;
    link.href = font.cssUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
};

const visualThemeLists = createVisualThemeLists({
  baseColor: DEFAULT_BASE_COLOR,
  borderRadius: DEFAULT_BORDER_RADIUS,
  fontHeading: DEFAULT_FONT_HEADING,
  fontSans: DEFAULT_FONT_SANS,
  primaryColor: DEFAULT_PRIMARY_COLOR,
  primaryTone: DEFAULT_PRIMARY_TONE,
});

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
    const pick = pickVisualTheme(value, lists);

    if (!value || typeof value !== "object" || Array.isArray(value)) return;

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
