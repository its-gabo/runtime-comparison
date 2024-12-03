Bun.serve({
  port: 3000,
  fetch: () => {
    return new Response("Hello World", { status: 200 });
  },
});

console.log("Bun server running on http://localhost:3000");
