"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const ToastDemo = () => (
  <Button
    onClick={() => {
      toast.create({
        description: new Date().toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "short",
        }),
        title: "Event has been created.",
      });
    }}
    variant="outline"
  >
    Toast
  </Button>
);

export default ToastDemo;
