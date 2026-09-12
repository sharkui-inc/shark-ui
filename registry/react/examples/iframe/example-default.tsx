import { Iframe } from "@/registry/react/components/iframe";

const IframeDemo = () => (
  <div className="mx-auto max-w-3xl">
    <Iframe
      head={<style>{"body { background-color: #f0f0f0; }"}</style>}
      style={{
        border: "1px solid #ccc",
        height: "var(--height)",
        width: "100%",
      }}
      title="Custom iframe"
    >
      <div style={{ padding: "40px" }}>
        <h1>Hello from inside the iframe!</h1>
        <p>
          This content is rendered within our custom iframe component using a
          Portal.
        </p>
      </div>
    </Iframe>
  </div>
);

export default IframeDemo;
