import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/registry/react/components/tabs";

const TabsIcons = () => (
  <Tabs defaultValue="preview">
    <TabsList>
      <TabsTrigger value="preview">
        <AppWindowIcon aria-hidden="true" />
        Preview
      </TabsTrigger>
      <TabsTrigger value="code">
        <CodeIcon aria-hidden="true" />
        Code
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

export default TabsIcons;
