import { ScrollArea } from "@/registry/react/components/scroll-area";
import { TaskHeader } from "./components/task-header";
import { TaskTable } from "./components/task-table";

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
