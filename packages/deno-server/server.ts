/*  
    @ts-ignore is used to ignore the error of Deno cannot be found,
    because it is a global object and not imported from a module

    It works when you have Deno installed on your machine
*/

// @ts-ignore
Deno.serve(
  () => {
    return new Response("Hello World", { status: 200 });
  },
  { port: 3000 }
);

console.log("Deno server running on http://localhost:3000");
