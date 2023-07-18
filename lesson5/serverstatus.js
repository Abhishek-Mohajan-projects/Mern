const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(204, { "Content-Type": "text/plain" });
  /* res.writeHead(202, { "Content-Type": "text/html" }); */
  res.write("node js");
  res.end("<h1>Hello node js</h1>");
});

myServer.listen(port, hostname, () => {
  console.log(
    `Congratulations!! Your server running successfully at http://${hostname}:${port}`
  );
});
