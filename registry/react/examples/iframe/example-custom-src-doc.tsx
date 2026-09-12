import { Iframe } from "@/registry/react/components/iframe";

const srcDoc = `<html><head>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&display=swap" rel="stylesheet" />
<base target=_blank>
</head><body style='overflow: hidden'><div></div></body></html>`;

const Example = () => (
  <Iframe
    srcDoc={srcDoc}
    style={{ border: "1px solid #ccc", maxWidth: "800px", width: "100%" }}
    title="Custom iframe"
  >
    <h1 style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
      Hello from inside the iframe!
    </h1>
    <p>
      This content is rendered within our custom iframe component using a
      Portal.
    </p>
    <p>
      The iframe has custom initial content, including the Hanken Grotesk font.
    </p>
  </Iframe>
);

export default Example;
