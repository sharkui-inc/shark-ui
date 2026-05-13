import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const data = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

const Example = () => (
  <div className="w-full max-w-md">
    <JsonTreeView data={data} defaultExpandedDepth={1} />
  </div>
);

export default Example;
