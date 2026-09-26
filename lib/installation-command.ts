export const packageManagers = ["pnpm", "npm", "yarn", "bun"] as const;

export type PackageManager = (typeof packageManagers)[number];

export type PackageManagerCommands = Record<PackageManager, string>;

const commandSegmentPattern =
  /(^|(?:&&|\|\||;|\n)[\t ]*)(npx create-[^\s;&|]+|npm install|npm create|npm run|npx)(?=\s|$)/g;

const getCommandReplacement = (
  packageManager: PackageManager,
  command: string
) => {
  if (command.startsWith("npx create-")) {
    const initializer = command.slice("npx create-".length);

    switch (packageManager) {
      case "bun":
        return `bunx --bun create-${initializer}`;
      case "npm":
        return command;
      case "pnpm":
        return `pnpm create ${initializer}`;
      case "yarn":
        return `yarn create ${initializer}`;
      default:
        return command;
    }
  }

  switch (command) {
    case "npx":
      return {
        bun: "bunx --bun",
        npm: "npx",
        pnpm: "pnpm dlx",
        yarn: "yarn dlx",
      }[packageManager];
    case "npm create":
      return {
        bun: "bun create",
        npm: "npm create",
        pnpm: "pnpm create",
        yarn: "yarn create",
      }[packageManager];
    case "npm install":
      return {
        bun: "bun add",
        npm: "npm install",
        pnpm: "pnpm add",
        yarn: "yarn add",
      }[packageManager];
    case "npm run":
      return {
        bun: "bun",
        npm: "npm run",
        pnpm: "pnpm",
        yarn: "yarn",
      }[packageManager];
    default:
      return command;
  }
};

const convertCommand = (raw: string, packageManager: PackageManager) =>
  raw.replace(
    commandSegmentPattern,
    (_match, boundary: string, command: string) =>
      `${boundary}${getCommandReplacement(packageManager, command)}`
  );

export const isPackageManager = (value: string): value is PackageManager =>
  packageManagers.some((packageManager) => packageManager === value);

export const packageManagerCommandVariants = (
  raw: string
): PackageManagerCommands | null => {
  if (!commandSegmentPattern.test(raw)) {
    return null;
  }

  commandSegmentPattern.lastIndex = 0;

  return {
    bun: convertCommand(raw, "bun"),
    npm: convertCommand(raw, "npm"),
    pnpm: convertCommand(raw, "pnpm"),
    yarn: convertCommand(raw, "yarn"),
  };
};

export const createShadcnAddCommand = (
  packageManager: PackageManager,
  target?: string
) => {
  const command = {
    bun: "bunx --bun shadcn@latest add",
    npm: "npx shadcn@latest add",
    pnpm: "pnpm dlx shadcn@latest add",
    yarn: "yarn dlx shadcn@latest add",
  }[packageManager];

  return target ? `${command} ${target}` : command;
};

export const formatShadcnCommandDisplay = (command: string) =>
  command.replaceAll("shadcn@latest", "shadcn");
