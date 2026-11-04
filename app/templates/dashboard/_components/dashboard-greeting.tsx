import { TrendingUpIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import { greeting } from "../_data/dashboard";

export const DashboardGreeting = () => (
  <div className="flex flex-wrap items-end justify-between gap-3">
    <div>
      <h1 className="font-heading text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
        Good morning, {greeting.firstName}
      </h1>
      <p className="text-muted-foreground mt-1 text-sm">{greeting.subtitle}</p>
    </div>
    <Badge className="gap-1" variant="secondary">
      <TrendingUpIcon aria-hidden />
      Updated just now
    </Badge>
  </div>
);
