const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// query parameters ----
/* app.get("/", (req, res) => {
  //const name = req.query.name;
  //const id = req.query.id;
  //const age = req.query.age;
  const { id, name, age } = req.query;

  res.send(`<h1>Name is:${name}, Age is:${age}, Id is:${id}</h1>`);
}); */

/* app.get("/userId/:id/userAge/:age", (req, res) => {
  const name = req.params.name;
  const age = req.params.name;
  const id = req.params.id;
  res.send(`<h1>Name is: ${name}, age is : ${age}, id is: ${id}</h1>`);
}); */ // route parameters

// http request with header ---
/* app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`<h1>Name is: ${name},  id is: ${id}</h1>`);
}); */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// make post request with json or form data (postman trail)
app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const id = req.body.id;
  res.send(`<h1>Hi, ${name}, your age is: ${age}, id is: ${id}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
