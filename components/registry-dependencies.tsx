import { CodeBlockCommand } from "./code-block-command";

interface RegistryDependenciesProps {
  dependencies?: string[];
}

export const RegistryDependencies = ({
  dependencies = [],
}: RegistryDependenciesProps) => {
  if (dependencies.length === 0) {
    return null;
  }

  return <CodeBlockCommand __npm__={`npm install ${dependencies.join(" ")}`} />;
};
