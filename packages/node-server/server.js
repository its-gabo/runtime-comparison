import { createServer } from "http";

import { createElement } from "react";
import { renderToPipeableStream } from "react-dom/server";

const App = () =>
  createElement(
    "html",
    null,
    createElement(
      "body",
      null,
      createElement("h1", null, "Hello World"),
      createElement("p", null, "This is a React SSR")
    )
  );

const server = createServer(async (req, res) => {
  if (req.url === "/") {
    const stream = renderToPipeableStream(App(), {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.setHeader("Cache-Control", "no-transform");
        stream.pipe(res);
      },
    });
  }
});

server.listen(3000, () => {
  console.log("Node server running at http://localhost:3000/");
});
