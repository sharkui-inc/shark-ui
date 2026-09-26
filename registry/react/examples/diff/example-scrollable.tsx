import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="h-52 max-w-lg">
    <DiffHeader title="src/config/routes.ts">
      <DiffStats added={6} removed={2} />
    </DiffHeader>
    <DiffContent>
      <DiffLine line={1} type="context">
        {"export const routes = {"}
      </DiffLine>
      <DiffLine line={2} type="context">
        {'  home: "/",'}
      </DiffLine>
      <DiffLine line={3} type="delete">
        {'  docs: "/docs",'}
      </DiffLine>
      <DiffLine line={3} type="add">
        {'  docs: "/docs/getting-started",'}
      </DiffLine>
      <DiffLine line={4} type="add">
        {'  components: "/docs/components",'}
      </DiffLine>
      <DiffLine line={5} type="add">
        {'  ai: "/docs/ai-components",'}
      </DiffLine>
      <DiffLine line={6} type="context">
        {'  blog: "/blog",'}
      </DiffLine>
      <DiffLine line={7} type="context">
        {'  pricing: "/pricing",'}
      </DiffLine>
      <DiffLine line={8} type="delete">
        {'  about: "/about",'}
      </DiffLine>
      <DiffLine line={8} type="add">
        {'  about: "/company/about",'}
      </DiffLine>
      <DiffLine line={9} type="add">
        {'  careers: "/company/careers",'}
      </DiffLine>
      <DiffLine line={10} type="add">
        {'  contact: "/company/contact",'}
      </DiffLine>
      <DiffLine line={11} type="context">
        {'  login: "/login",'}
      </DiffLine>
      <DiffLine line={12} type="context">
        {'  signup: "/signup",'}
      </DiffLine>
      <DiffLine line={13} type="context">
        {"} as const;"}
      </DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
