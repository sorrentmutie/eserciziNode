// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 1000);
// console.log("C");

console.log("Siamo in main");
//const area = require("./circle").area;
// const circle = require("./circle");
const circle = require("./circle");
const greeter = require("./greeter");

const x = circle.areaAsync(5).then( console.log);

//console.log(areaAsync(5));
//console.log(x);