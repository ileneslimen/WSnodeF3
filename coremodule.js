const fs = require("fs");
const path = require("path");
const http = require("http");
console.log("start");

// fs.writeFile("test.txt", "hello guys", (err, data) => {
//   err ? console.log(err) : console.log("file created");
// });

// fs.writeFileSync("test2.txt", "again");

// fs.readFile("test.txt", (err, data) => {
//   err ? console.log(err) : console.log(data.toString());
// });

// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);
// console.log("finish");

// fs.rename("test2.txt", "test3.txt", (err) => err && console.log(err));

// console.log(path.extname("test3.txt"));
// console.log(path.basename("/wsnode/test3.txt"));

// console.log(http.STATUS_CODES);

// const data = fs.readFileSync("a.html", "utf-8");
http
  .createServer((req, res) => {
    res.write("hello");
    res.end();
  })
  .listen(5000, () => console.log("port is runnning"));
