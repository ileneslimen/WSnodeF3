// const { Add, Hello } = require("./modulelocal.js");
const main = require("./modulelocal");

console.log(main.Add(parseInt(process.argv[2]), parseInt(process.argv[3])));
console.log(process.argv);
console.log(main.Hello(process.argv[4]));
