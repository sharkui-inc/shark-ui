import { Status } from "@/registry/react/components/status";

const Example = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Status className="bg-amber-500" />
    <Status className="bg-teal-500" />
    <Status className="bg-purple-500" />
  </div>
);

export default Example;
