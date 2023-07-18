const fs = require("fs");

// how to send data using async method
fs.writeFile("fs.txt", "This is Node js.", (err) => {
  err ? console.log(err) : console.log("successful");
});

// how to add data using async method
fs.appendFile(
  "fs.txt",
  " This is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  (err) => {
    err ? console.log(err) : console.log("successful");
  }
);

// how to data read using async method
fs.readFile("fs.txt", "utf-8", (err, data) => {
  err ? console.log(err) : console.log(data);
});

// how to rename file using async method
fs.rename("fs.txt", "fsmodule.txt", (err) => {
  err ? console.log(err) : console.log("successful");
});

// how to delete file using async method
fs.unlink("fs.txt", (err) => {
  err ? console.log(err) : console.log("successful");
});

// how to see the file existancy
fs.exists("fsmodule.txt", (result) => {
  result ? console.log("found") : console.log("not found");
});
