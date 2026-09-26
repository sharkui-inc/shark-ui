import type React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/registry/react/components/tabs";

export const TabsExample = (
  props: Omit<React.ComponentProps<"div">, "defaultValue">
) => (
  <Tabs className="w-full" defaultValue="profile" {...props}>
    <TabsList className="w-full">
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsTrigger value="security">Security</TabsTrigger>
    </TabsList>
  </Tabs>
);
