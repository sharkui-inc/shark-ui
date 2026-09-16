import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const Example = () => (
  <JsonTreeView
    className="w-full max-w-xl"
    data={data}
    defaultExpandedDepth={1}
  />
);

const notificationPreferences = new Map([
  ["order_updates", "email"],
  ["product_news", "disabled"],
  ["weekly_summary", "in_app"],
]);

const enabledFeatures = new Set([
  "express-checkout",
  "order-tracking",
  "saved-payment-methods",
]);

const data = {
  enabledFeatures,
  notificationPreferences,
  workspace: "Onda Commerce",
};

export default Example;
