import type { Metadata } from "next";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { TaskHeader } from "./_components/task-header";
import { TaskTable } from "./_components/task-table";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Tasks Preview",
};

const TasksTemplatePage = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="flex h-full min-h-0 flex-col bg-background">
      <TaskHeader />
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-4 p-4 sm:p-6">
          <TaskTable />
        </div>
      </ScrollArea>
    </div>
  </div>
);

export default TasksTemplatePage;
