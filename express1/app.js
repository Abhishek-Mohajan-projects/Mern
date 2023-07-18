const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.get("/", (req, res) => {
  /* res.send("<h1>I am a get request at Home Route</h1>"); */
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/index.html"); // showing html file
});

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  /* res.status(200).json({
    name: "Abhishek",
    message: "hi this is abhishek",
    age: 23,
  }); */
  // -------> showing json file
  // res.redirect("/login"); // when you routing register page, this redirect send you in login page
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});

app.use("/login", (req, res) => {
  // res.send("i am login page");
  res.cookie("name", "Abhishek");
  res.cookie("age", "23");
  res.clearCookie("name");
  res.append("id", "28923897");
  res.end();
});

app.use((req, res) => {
  res.send("<h1>404 Page not found</h1>");
});

/*  ----> testing for postman
app.post("/about", (req, res) => {
  res.send("<h1>I am a post request at Register Route</h1>");
});

app.put("/contact", (req, res) => {
  res.send("<h1>I am a put request at Login Route</h1>");
});

app.delete("/skills", (req, res) => {
  res.send("<h1>I am a delete request at Login Route</h1>");
}); */

module.exports = app;
