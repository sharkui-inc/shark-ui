import {
  ArrowUpRight,
  DownloadIcon,
  HeartIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button>
      <PlusIcon aria-hidden="true" data-icon="inline-start" />
      Add
    </Button>
    <Button variant="outline">
      <SettingsIcon aria-hidden="true" data-icon="inline-start" />
      Settings
    </Button>
    <Button variant="secondary">
      <HeartIcon aria-hidden="true" data-icon="inline-start" />
      Favorite
    </Button>
    <Button variant="ghost">
      <DownloadIcon aria-hidden="true" data-icon="inline-start" />
      Download
    </Button>
    <Button variant="link">
      Visit website
      <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
    </Button>
  </div>
);

export default Example;
