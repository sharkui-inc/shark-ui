import { atom, useSetAtom } from "jotai";
import { useAtomValueRawSync } from "jotai/react";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import {
  DEFAULT_THEME_CONFIG,
  normalizeThemeConfig,
  type ThemeConfig,
} from "@/lib/theme/config";

export type {
  BaseColor,
  BorderRadius,
  PrimaryColor,
  PrimaryTone,
  ThemeConfig,
  ThemeLockKey,
  ThemeLocks,
} from "@/lib/theme/config";
export {
  DEFAULT_BASE_COLOR,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_FONT_HEADING,
  DEFAULT_FONT_SANS,
  DEFAULT_PRIMARY_COLOR,
  DEFAULT_PRIMARY_TONE,
  DEFAULT_THEME_LOCKS,
} from "@/lib/theme/config";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export type InstallationMethod = "cli" | "manual";

export type Config = ThemeConfig & {
  installationMethod: InstallationMethod;
  packageManager: PackageManager;
};

export const DEFAULT_PACKAGE_MANAGER: PackageManager = "pnpm";
export const DEFAULT_INSTALLATION_METHOD: InstallationMethod = "cli";

const defaultConfig: Config = {
  ...DEFAULT_THEME_CONFIG,
  installationMethod: DEFAULT_INSTALLATION_METHOD,
  packageManager: DEFAULT_PACKAGE_MANAGER,
};

export type ConfigUpdate =
  | Partial<Config>
  | ((config: Config) => Partial<Config> | undefined);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isPackageManager = (value: unknown): value is PackageManager =>
  value === "npm" || value === "pnpm" || value === "yarn" || value === "bun";

const isInstallationMethod = (value: unknown): value is InstallationMethod =>
  value === "cli" || value === "manual";

export const normalizeConfig = (
  value: unknown,
  fallback: Config = defaultConfig
): Config => {
  if (!isRecord(value)) {
    return fallback;
  }

  return {
    ...normalizeThemeConfig(value, fallback),
    installationMethod: isInstallationMethod(value.installationMethod)
      ? value.installationMethod
      : fallback.installationMethod,
    packageManager: isPackageManager(value.packageManager)
      ? value.packageManager
      : fallback.packageManager,
  };
};

const configStorage = createJSONStorage<Config>(() =>
  typeof window === "undefined" ? undefined : localStorage
);

const storage = {
  ...configStorage,
  getItem: (key: string, initialValue: Config) =>
    normalizeConfig(configStorage.getItem(key, initialValue)),
  setItem: (key: string, value: Config) =>
    configStorage.setItem(key, normalizeConfig(value)),
  subscribe: (
    key: string,
    callback: (value: Config) => void,
    initialValue: Config
  ) =>
    configStorage.subscribe?.(
      key,
      (value) => callback(normalizeConfig(value, initialValue)),
      initialValue
    ),
};

export const configAtom = atomWithStorage<Config>(
  "config",
  defaultConfig,
  storage
);

export const updateConfigAtom = atom(null, (get, set, update: ConfigUpdate) => {
  const config = get(configAtom);
  const patch = typeof update === "function" ? update(config) : update;

  if (!patch) {
    return;
  }

  set(configAtom, normalizeConfig({ ...config, ...patch }, config));
});

export const useConfig = () => useAtomValueRawSync(configAtom);

export const useUpdateConfig = () => useSetAtom(updateConfigAtom);
