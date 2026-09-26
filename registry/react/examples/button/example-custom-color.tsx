import { Button } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
      Indigo
    </Button>
    <Button className="bg-pink-600 text-white hover:bg-pink-700">Pink</Button>
    <Button className="bg-sky-600 text-white hover:bg-sky-700">Sky</Button>
    <Button className="bg-purple-600 text-white hover:bg-purple-700">
      Purple
    </Button>
  </div>
);

export default Example;
