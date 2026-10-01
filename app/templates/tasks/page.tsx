import type { Metadata } from "next";
import { TaskTable } from "./_components/task-table";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Tasks Preview",
};

const TasksTemplatePage = () => (
  <main className="absolute inset-0 overflow-hidden">
    <TaskTable />
  </main>
);

export default TasksTemplatePage;
