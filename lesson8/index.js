const http = require("http");
const fs = require("fs");
const port = 3001;

const readFile = (statusCode, fileLocation, req, res) => {
  fs.readFile(fileLocation, "utf-8", (err, data) => {
    err
      ? console.log(err)
      : res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    readFile(200, "./views/index.html", req, res);
  } else if (req.url === "/about") {
    readFile(200, "./views/about.html", req, res);
  } else if (req.url === "/contact") {
    readFile(200, "./views/contact.html", req, res);
  } else {
    readFile(404, "./views/error.html", req, res);
  }
});

server.listen(port, () => {
  console.log(`congratz!!!! your server running at http://${port}`);
});
