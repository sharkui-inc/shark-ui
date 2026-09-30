import type React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

export const TabsExample = (
  props: Omit<React.ComponentProps<"div">, "defaultValue">
) => (
  <Tabs className="w-full" defaultValue="profile" {...props}>
    <TabsList className="w-full">
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsTrigger value="security">Security</TabsTrigger>
    </TabsList>
    <TabsContent value="profile">Profile settings</TabsContent>
    <TabsContent value="settings">Account settings</TabsContent>
    <TabsContent value="security">Security settings</TabsContent>
  </Tabs>
);
