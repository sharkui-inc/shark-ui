import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const TabsDisabled = () => (
  <Tabs defaultValue="home">
    <TabsList>
      <TabsTrigger value="home">Home</TabsTrigger>
      <TabsTrigger disabled value="settings">
        Disabled
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

export default TabsDisabled;
