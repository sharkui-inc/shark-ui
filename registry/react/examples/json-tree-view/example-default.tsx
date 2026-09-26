import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const Example = () => (
  <JsonTreeView
    className="w-full max-w-xl"
    data={data}
    defaultExpandedDepth={1}
  />
);

const data = {
  event: "order.fulfilled",
  order: {
    id: "ord_01K5H2Q4J6FM3A",
    status: "fulfilled",
    total: 12_900,
  },
  source: "onda-commerce",
};

export default Example;
