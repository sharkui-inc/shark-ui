import { TrendingUpIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Progress } from "@/registry/react/components/progress";
import { trafficSources, trafficSummary } from "../_data/dashboard";

export const DashboardTraffic = () => (
  <Card>
    <CardHeader
      description={`${trafficSummary.totalSessions} sessions`}
      title="Traffic source"
    >
      <CardAction>
        <Badge className="gap-1" size="sm" variant="success">
          <TrendingUpIcon aria-hidden="true" />
          {trafficSummary.change}
        </Badge>
      </CardAction>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      {trafficSources.map((source) => (
        <div className="flex flex-col gap-2" key={source.label}>
          <div className="flex justify-between text-sm">
            <span className="font-medium">{source.label}</span>
            <span className="font-medium tabular-nums">{source.value}%</span>
          </div>
          <Progress value={source.value} />
          <div className="flex justify-between gap-3 text-muted-foreground text-xs">
            <span>{source.sessions} sessions</span>
            <span>{source.change} vs. last month</span>
          </div>
        </div>
      ))}
    </CardContent>
    <CardFooter>
      <div>
        <p className="text-muted-foreground text-xs">Bounce rate</p>
        <p className="font-semibold tabular-nums">
          {trafficSummary.bounceRate}
        </p>
      </div>
      <div className="ms-auto border-s ps-3">
        <p className="text-muted-foreground text-xs">Avg. session</p>
        <p className="font-semibold tabular-nums">
          {trafficSummary.avgSession}
        </p>
      </div>
    </CardFooter>
  </Card>
);
