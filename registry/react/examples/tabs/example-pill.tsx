import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Tabs className="w-full max-w-md" defaultValue="profile">
    <TabsList pill>
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsTrigger value="security">Security</TabsTrigger>
    </TabsList>

    <TabsContent className="text-muted-foreground pt-2 text-sm" value="profile">
      Manage your profile information.
    </TabsContent>
    <TabsContent
      className="text-muted-foreground pt-2 text-sm"
      value="settings"
    >
      Update your preferences.
    </TabsContent>
    <TabsContent
      className="text-muted-foreground pt-2 text-sm"
      value="security"
    >
      Protect your account and data.
    </TabsContent>
  </Tabs>
);

export default Example;
