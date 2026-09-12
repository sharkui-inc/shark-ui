"use client";

import { useRef } from "react";
import { Iframe } from "@/registry/react/components/iframe";

const Example = () => {
  const ref = useRef<HTMLIFrameElement>(null);

  return (
    <Iframe
      onMount={() => {
        const document = ref.current?.contentDocument;
        if (!document) {
          return;
        }

        const script = document.createElement("script");
        script.textContent = 'console.log("Hello from inside the iframe!")';
        document.body.appendChild(script);
      }}
      ref={ref}
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
  );
};

export default Example;
