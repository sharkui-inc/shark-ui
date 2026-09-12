import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { Status } from "@/registry/react/components/status";

export const BadgeExample = (props: React.ComponentProps<"div">) => (
  <Card {...props}>
    <CardHeader description="Semantic roles on this release." title="Labels" />
    <CardContent className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-muted-foreground text-xs">Tags</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag.label} variant={tag.variant}>
              {tag.label}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-muted-foreground text-xs">Presence</p>
        <div className="flex flex-wrap gap-2">
          {presence.map((item) => (
            <Badge key={item.label} variant="outline">
              <Status size="sm" variant={item.status} />
              {item.label}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const tags = [
  { label: "v0.4.2", variant: "default" },
  { label: "Stable", variant: "secondary" },
  { label: "Docs", variant: "outline" },
  { label: "Shipped", variant: "success" },
  { label: "Review", variant: "warning" },
  { label: "Draft", variant: "info" },
  { label: "Blocked", variant: "destructive" },
] as const;

const presence = [
  { label: "Online", status: "success" },
  { label: "In progress", status: "info" },
  { label: "Pending", status: "warning" },
  { label: "Offline", status: "destructive" },
] as const;
