// @ts-ignore
import * as React from "https://esm.run/react";
// @ts-ignore
import { renderToReadableStream } from "https://esm.run/react-dom/server";

const App = () => (
  <html>
    <body>
      <h1>Hello World</h1>
      <p>This is a React SSR</p>
    </body>
  </html>
);

/*  
    @ts-ignore is used to ignore the error of Deno cannot be found,
    because it is a global object and not imported from a module

    It works when you have Deno installed on your machine
*/

// @ts-ignore
Deno.serve({ port: 3000 }, async () => {
  return new Response(await renderToReadableStream(<App />), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
});

console.log("Deno server running on http://localhost:3000");
