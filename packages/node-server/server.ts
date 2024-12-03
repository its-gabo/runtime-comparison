const http = require("http");

const server = http.createServer(() => {
  return new Response("Hello World", { status: 200 });
});

server.listen(3000, () => {
  console.log("Node server running at http://localhost:3000/");
});
