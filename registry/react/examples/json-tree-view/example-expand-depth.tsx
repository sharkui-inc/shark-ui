import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const Example = () => (
  <JsonTreeView
    className="w-full max-w-xl"
    data={data}
    defaultExpandedDepth={2}
  />
);

const data = {
  deployment: {
    environment: "production",
    release: {
      commit: "a1b2c3d",
      service: "onda-api",
    },
    runtime: {
      region: "us-east-1",
      replicas: 3,
    },
  },
  status: "healthy",
};

export default Example;
