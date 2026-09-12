import { TrendingUpIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import { greeting } from "../_data/dashboard";

export const DashboardGreeting = () => (
  <div className="flex flex-wrap items-end justify-between gap-3">
    <div>
      <h1 className="font-heading font-semibold text-2xl tracking-[-0.03em] sm:text-3xl">
        Good morning, {greeting.firstName}
      </h1>
      <p className="mt-1 text-muted-foreground text-sm">{greeting.subtitle}</p>
    </div>
    <Badge className="gap-1" variant="secondary">
      <TrendingUpIcon aria-hidden="true" />
      Updated just now
    </Badge>
  </div>
);
