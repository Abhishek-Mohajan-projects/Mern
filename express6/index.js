const express = require("express");
const app = express();
const PORT = 3000;

const middlewareFunction = (req, res, next) => {
  req.currentTimeZone = new Date(Date.now());
  next();
};

app.use(middlewareFunction); // you can now use this middleware function in any route

app.get("/", middlewareFunction, (req, res) => {
  console.log("i am home route " + req.currentTimeZone);
  res.send(`<h1>welcome to home route</h1>`);
});

app.get("/about", middlewareFunction, (req, res) => {
  console.log("i am about route " + req.currentTimeZone);
  res.send(`<h1>welcome to about route</h1>`);
});

app.use((req, res, next) => {
  res.send("404 Bad Request"); // error handling
});

app.use((err, req, res, next) => {
  res.status(500).send("Something broken"); // others error handling
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
