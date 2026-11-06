import { SettingsIcon, ShieldIcon, UserIcon } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Tabs defaultValue="tab-1">
    <TabsList>
      <TabsTrigger value="tab-1">
        <UserIcon />
        Profile
      </TabsTrigger>
      <TabsTrigger value="tab-2">
        <SettingsIcon />
        Settings
      </TabsTrigger>
      <TabsTrigger value="tab-3">
        <ShieldIcon />
        Security
      </TabsTrigger>
    </TabsList>
    <TabsContent
      className="text-muted-foreground rounded-md border p-4 text-center"
      value="tab-1"
    >
      Profile content
    </TabsContent>
    <TabsContent
      className="text-muted-foreground rounded-md border p-4 text-center"
      value="tab-2"
    >
      Settings content
    </TabsContent>
    <TabsContent
      className="text-muted-foreground rounded-md border p-4 text-center"
      value="tab-3"
    >
      Security content
    </TabsContent>
  </Tabs>
);

export default Example;
