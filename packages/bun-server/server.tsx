// @ts-ignore
import { renderToReadableStream } from "react-dom/server.browser";

const App = () => (
  <html>
    <div>
      <h1>Hello World</h1>
      <p>This is a React SSR</p>
    </div>
  </html>
);

Bun.serve({
  port: 3000,
  fetch: async () => {
    return new Response(await renderToReadableStream(<App />), {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log("Bun server running on http://localhost:3000");
