const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`<h1>Your Name is : ${fullName} and your age is : ${age}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Welcome to the server at http://localhost:${PORT}`);
});
