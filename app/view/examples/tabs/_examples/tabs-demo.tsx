import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const TabsDemo = () => (
  <Tabs className="w-full max-w-96" defaultValue="overview">
    <TabsList>
      {tabs.map((tab) => (
        <TabsTrigger key={tab.value} value={tab.value}>
          {tab.title}
        </TabsTrigger>
      ))}
    </TabsList>

    {tabs.map((tab) => (
      <TabsContent key={tab.value} value={tab.value}>
        <Card>
          <CardHeader description={tab.description} title={tab.title} />
          <CardContent className="text-muted-foreground text-sm">
            {tab.content}
          </CardContent>
        </Card>
      </TabsContent>
    ))}
  </Tabs>
);

const tabs = [
  {
    content: "You have 12 active projects and 3 pending tasks.",
    description:
      "View your key metrics and recent project activity. Track progress across all your active projects.",
    title: "Overview",
    value: "overview",
  },
  {
    content: "Page views are up 25% compared to last month.",
    description:
      "Track performance and user engagement metrics. Monitor trends and identify growth opportunities.",
    title: "Analytics",
    value: "analytics",
  },
  {
    content: "You have 5 reports ready and available to export.",
    description:
      "Generate and download your detailed reports. Export data in multiple formats for analysis.",
    title: "Reports",
    value: "reports",
  },
  {
    content: "Configure notifications, security, and themes.",
    description:
      "Manage your account preferences and options. Customize your experience to fit your needs.",
    title: "Settings",
    value: "settings",
  },
];

export default TabsDemo;
