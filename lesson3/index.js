const os = require("os");
console.log(os.hostname());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.userInfo());
console.log(__dirname); // return the root directory name
console.log(__filename); // return the file name

/* const { totalmem, freemem } = require("os"); // individual

console.log(totalmem());
console.log(freemem());
 */

const path = require("path");
/* console.log(path); */
const extensionName = path.extname("index.jsx"); // return the ext name of the file
console.log(extensionName);

const join = path.join(__dirname + "/view.js");

/* const join = path.join(__dirname + "/../views.js"); */
console.log(join);
