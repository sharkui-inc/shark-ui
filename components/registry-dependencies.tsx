import { CodeBlockCommand } from "./code-block-command";

const REGISTRY_ITEM_PATH = /\/r\/(?<name>[^/]+)\.json$/u;

type RegistryDependenciesProps =
  | { registryDependencies: string[]; dependencies?: never }
  | { dependencies: string[]; registryDependencies?: never };

export const RegistryDependencies = (props: RegistryDependenciesProps) => {
  if ("registryDependencies" in props && props.registryDependencies) {
    const targets = props.registryDependencies.map(toSharkAddTarget).join(" ");

    return <CodeBlockCommand __npm__={`npx shadcn@latest add ${targets}`} />;
  }

  const dependencies = props.dependencies ?? [];

  if (dependencies.length === 0) {
    return null;
  }

  return <CodeBlockCommand __npm__={`npm install ${dependencies.join(" ")}`} />;
};

const toSharkAddTarget = (dependency: string) => {
  const match = REGISTRY_ITEM_PATH.exec(dependency);
  const name = match?.groups?.name;

  if (name) {
    return `@shark/${name}`;
  }

  if (dependency.startsWith("@shark/")) {
    return dependency;
  }

  return `@shark/${dependency}`;
};
