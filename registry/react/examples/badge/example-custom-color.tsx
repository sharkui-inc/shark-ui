import { Badge } from "@/registry/react/components/badge";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Badge className="border-indigo-200/24 bg-indigo-500/8 text-indigo-700 dark:text-indigo-300">
      Indigo
    </Badge>
    <Badge className="border-pink-200/24 bg-pink-500/8 text-pink-700 dark:text-pink-300">
      Pink
    </Badge>
    <Badge className="border-sky-200/24 bg-sky-500/8 text-sky-700 dark:text-sky-300">
      Sky
    </Badge>
    <Badge className="border-purple-200/24 bg-purple-500/8 text-purple-700 dark:text-purple-300">
      Purple
    </Badge>
  </div>
);

export default Example;
