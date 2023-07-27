const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* app.get("/user/:id([0-9])", (req, res) => {
  res.send(`<h1>User id is : ${req.params.id}</h1>`);
}); */
/* 
app.get("/user/:id([0-9]{3})", (req, res) => {
  res.send(`<h1>User id is : ${req.params.id}</h1>`); // highest 3 digit
}); */

app.get("/user/:id([0-9]{3})", (req, res) => {
  res.send(`<h1>User id is: ${req.params.id}</h1>`);
});

app.get("/user/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`<h1>User title is: ${req.params.title}</h1>`);
});

app.use("*", (req, res) => {
  res.status(404).send({
    message: "404!! not found",
  });
});

app.listen(PORT, () => {
  console.log(`Welcome to the server running at http://localhost:${PORT}`);
});
