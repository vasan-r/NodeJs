// import { x, calculateSum } from "./calculate/sum.js";
const { name, city } = require("./data.json");
const { calculateSum, calculateMultiply } = require("./calculate/index");
var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);

require("./imp");
console.log(name);
console.log(city);
console.log(globalThis === global);
console.log("hello");
