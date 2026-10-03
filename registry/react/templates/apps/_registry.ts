import type { TemplateDefinition } from "@/lib/registry";
import { registryUrl } from "@/lib/url";

export const appsTemplates = [
  {
    category: "apps",
    dependencies: [
      "@ark-ui/react",
      "@tanstack/react-table",
      "lucide-react",
      "tailwind-variants",
    ],
    description:
      "Task manager with filters, table selection, and an editor dialog.",
    files: [
      {
        path: "templates/apps/tasks-01/page.tsx",
        source: "page.tsx",
        target: "app/tasks/page.tsx",
        type: "registry:page",
      },
      {
        path: "templates/apps/tasks-01/data/tasks.ts",
        source: "data/tasks.ts",
        target: "@components/tasks/data/tasks.ts",
        type: "registry:file",
      },
      {
        path: "templates/apps/tasks-01/components/task-priority.ts",
        source: "components/task-priority.ts",
        target: "@components/tasks/task-priority.ts",
        type: "registry:file",
      },
      {
        path: "templates/apps/tasks-01/components/task-header.tsx",
        source: "components/task-header.tsx",
        target: "@components/tasks/task-header.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-table.tsx",
        source: "components/task-table.tsx",
        target: "@components/tasks/task-table.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-columns.tsx",
        source: "components/task-columns.tsx",
        target: "@components/tasks/task-columns.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-filters.tsx",
        source: "components/task-filters.tsx",
        target: "@components/tasks/task-filters.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-grid.tsx",
        source: "components/task-grid.tsx",
        target: "@components/tasks/task-grid.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-empty-state.tsx",
        source: "components/task-empty-state.tsx",
        target: "@components/tasks/task-empty-state.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-editor-dialog.tsx",
        source: "components/task-editor-dialog.tsx",
        target: "@components/tasks/task-editor-dialog.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-editor-fields.tsx",
        source: "components/task-editor-fields.tsx",
        target: "@components/tasks/task-editor-fields.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-select-options.tsx",
        source: "components/task-select-options.tsx",
        target: "@components/tasks/task-select-options.tsx",
        type: "registry:component",
      },
      {
        path: "templates/apps/tasks-01/components/task-selection-action-bar.tsx",
        source: "components/task-selection-action-bar.tsx",
        target: "@components/tasks/task-selection-action-bar.tsx",
        type: "registry:component",
      },
    ],
    meta: {
      featured: true,
      order: 1,
      previewHeight: 820,
    },
    name: "tasks-01",
    preview: () => import("./tasks-01/page"),
    registryDependencies: [
      registryUrl("/r/action-bar.json"),
      registryUrl("/r/avatar.json"),
      registryUrl("/r/badge.json"),
      registryUrl("/r/button.json"),
      registryUrl("/r/card.json"),
      registryUrl("/r/checkbox.json"),
      registryUrl("/r/data-table.json"),
      registryUrl("/r/dialog.json"),
      registryUrl("/r/field.json"),
      registryUrl("/r/input.json"),
      registryUrl("/r/input-group.json"),
      registryUrl("/r/menu.json"),
      registryUrl("/r/scroll-area.json"),
      registryUrl("/r/select.json"),
      registryUrl("/r/state.json"),
      registryUrl("/r/status.json"),
      registryUrl("/r/table.json"),
    ],
    title: "Tasks",
    type: "registry:block",
  },
] as const satisfies readonly TemplateDefinition[];
