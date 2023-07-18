const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const readFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    readFile(200, "./views/index.html");
    /* fs.readFile("./views/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }); */
  } else if (req.url === "/about") {
    readFile(200, "./views/about.html");
    /* fs.readFile("./views/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }); */
  } else if (req.url === "/contact") {
    readFile(200, "./views/contact.html");
    /* fs.readFile("./views/contact.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }); */
  } else {
    readFile(404, "./views/error.html");
    /* fs.readFile("./views/error.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }); */
  }
});

server.listen(port, hostname, () => {
  console.log(`Your server running at http://${hostname}:${port}`);
});
