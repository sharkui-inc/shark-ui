import { Iframe } from "@/registry/react/components/iframe";

const srcDoc = `<html><head>
<style>
*,*::before,*::after { margin: 0; padding: 0; box-sizing: border-box; }
html, body { overflow: hidden; }
body { background-color: #f0f0f0; }
</style>
</head><body><div class="frame-root"></div></body></html>`;

const IframeDemo = () => (
  <div className="mx-auto max-w-4xl">
    <Iframe
      className="rounded-lg"
      srcDoc={srcDoc}
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
