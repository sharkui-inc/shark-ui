import { Tabs, TabsList, TabsTrigger } from "@/registry/react/components/tabs";

const TabsLine = () => (
  <Tabs defaultValue="overview">
    <TabsList variant="underline">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
    </TabsList>
  </Tabs>
);

export default TabsLine;
