import Link from "next/link";
import { Button, buttonVariants } from "@/registry/react/components/button";

const Example = () => (
  <div className="flex gap-2">
    <Button asChild variant="secondary">
      <Link href="#">Login asChild</Link>
    </Button>
    <a className={buttonVariants({ variant: "outline" })} href="#">
      Login className
    </a>
  </div>
);

export default Example;
