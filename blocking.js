const crypto = require("node:crypto");
const fs = require("fs");

console.log("hello world");

var a = 10255;
var b = 8564587;

// sync
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("first key is generated");

// Async
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (arr, key) => {
  console.log("key is generated");
});

setTimeout(() => {
  console.log("setTime out called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file data : ", data);
});

function multiply(a, b) {
  return a * b;
}
const c = multiply(a, b);
console.log("multiplication result is : ", c);
